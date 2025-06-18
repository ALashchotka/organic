import { useEffect, useState } from 'react';
import { UpdateMode } from 'realm';
import { useRealm } from '@realm/react';
import axios from 'axios';

import { Product } from '@organic/models/Product';

interface ProductFromServer extends Omit<Product, 'image'> {
  images: string[];
}

export default function useData() {
  const realm = useRealm();

  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPageExists, setIsNextPageExists] = useState(true);

  const fetchData = async () => {
    try {
      if (!isNextPageExists) {
        return;
      }

      const response = await axios(
        `https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}&select=id,title,description,images`,
      );

      const products = response.data.products;

      realm.write(() => {
        products.forEach((product: ProductFromServer) => {
          realm.create(
            Product,
            {
              id: product.id,
              title: product.title || '',
              description: product.description || '',
              image: product.images[0] || '',
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

  return { fetchData, isNextPageExists };
}
