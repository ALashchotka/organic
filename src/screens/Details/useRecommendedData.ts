import React, { useEffect, useState } from 'react';

import { useProducts } from '@organic/hooks';
import { Product } from '@organic/models/Product';

export default function useRecommendedData(currentItem: Product) {
  const products = useProducts();

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      const shuffledData = [...products].sort(() => 0.5 - Math.random());
      const itemsCount = Math.floor(Math.random() * 6) + 5;

      setData(shuffledData.slice(0, itemsCount).filter((item) => item.id !== currentItem.id));
    }
  }, [products]);

  return data;
}
