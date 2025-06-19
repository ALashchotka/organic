import { useEffect, useState } from 'react';
import Realm from 'realm';

import { Product } from '@organic/models';

export function useRealm() {
  const [realm, setRealm] = useState<Realm | null>(null);

  useEffect(() => {
    const config = {
      schema: [Product],
    };

    Realm.open(config).then(setRealm);

    return () => {
      if (realm && !realm.isClosed) {
        realm.close();
      }
    };
  }, []);

  return realm;
}
