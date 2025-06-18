import { useEffect } from 'react';
import { useRealm } from '@realm/react';
import axios from 'axios';

import { Product } from '@organic/models/Product';

interface ProductFromServer extends Omit<Product, '_id' | 'image'> {
  images: string[];
}

export default function useData() {
  const realm = useRealm();

  const fetchData = async () => {
    try {
      const response = await axios(
        'https://dummyjson.com/products?limit=10&skip=0&select=id,title,description,images',
      );

      const products = response.data.products;

      realm.write(() => {
        realm.delete(realm.objects(Product));

        products.forEach((product: ProductFromServer) => {
          realm.create(
            Product,
            Product.generate({
              id: product.id,
              title: product.title || '',
              description: product.description || '',
              image: product.images[0] || '',
            }),
          );
        });
      });
    } catch (error) {
      console.error('Failed to fetch and save products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
}
