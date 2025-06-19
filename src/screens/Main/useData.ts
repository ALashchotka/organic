import { useEffect, useMemo, useState } from 'react';
import { UpdateMode } from 'realm';
import { useQuery, useRealm } from '@realm/react';
import axios from 'axios';

import { CLEAR_DB_ON_EVERY_LAUNCH } from '@organic/constants';
import { Product } from '@organic/models/Product';

interface ProductFromServer extends Omit<Product, 'image'> {
  images: string[];
}

export default function useData(tags: string[]) {
  const realm = useRealm();

  const products = useQuery(Product);

  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPageExists, setIsNextPageExists] = useState(true);

  const data = useMemo(() => {
    if (!tags.length) {
      return products;
    }

    return products.filter((item) => item.tags.some((tag) => tags.includes(tag)));
  }, [products, tags]);

  const fetchData = async () => {
    try {
      if (!isNextPageExists) {
        return;
      }

      const response = await axios(
        `https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}&select=id,title,description,images,tags`,
      );

      const products = response.data.products;

      realm.write(() => {
        if (CLEAR_DB_ON_EVERY_LAUNCH && currentPage === 1) {
          realm.delete(realm.objects(Product));
        }

        products.forEach((product: ProductFromServer) => {
          realm.create(
            Product,
            {
              id: product.id,
              title: product.title || '',
              description: product.description || '',
              image: product.images[0] || '',
              tags: product.tags,
            },
            UpdateMode.Modified,
          );
        });
      });

      setIsNextPageExists(response.data.skip + response.data.limit < response.data.total);
      setCurrentPage((prevState) => prevState + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { products: data, fetchData, isNextPageExists };
}
