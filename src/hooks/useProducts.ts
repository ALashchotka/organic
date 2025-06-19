import { useContext, useEffect, useState } from 'react';
import Realm from 'realm';

import { Product, RealmContext } from '@organic/models';

export function useProducts() {
  const realm = useContext(RealmContext);

  const [products, setProducts] = useState<Realm.Results<Product> | []>([]);

  useEffect(() => {
    if (realm) {
      const allObjects = realm.objects(Product);

      setProducts(allObjects);

      allObjects.addListener((newResults) => {
        setProducts(newResults as Product[]);
      });

      return () => {
        allObjects.removeAllListeners();
      };
    }
  }, [realm]);

  return products;
}
