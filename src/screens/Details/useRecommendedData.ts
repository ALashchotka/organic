import React, { useEffect, useState } from 'react';
import { useQuery } from '@realm/react';

import { Product } from '@organic/models/Product';

export default function useRecommendedData() {
  const products = useQuery(Product);

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      const shuffledData = [...products].sort(() => 0.5 - Math.random());
      const itemsCount = Math.floor(Math.random() * 6) + 5;

      setData(shuffledData.slice(0, itemsCount));
    }
  }, [products]);

  return data;
}
