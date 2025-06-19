import { createContext } from 'react';

export * from './Product';

export const RealmContext = createContext<Realm | null>(null);
