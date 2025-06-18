import { Realm } from '@realm/react';

export class Product extends Realm.Object {
  id!: number;
  title!: string;
  description!: string;
  image!: string;
  tags!: string[];

  static schema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
      image: 'string',
      tags: 'string[]',
    },
  };
}
