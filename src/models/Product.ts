import { Realm } from '@realm/react';

export class Product extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  id!: number;
  title!: string;
  description!: string;
  image!: string;

  static generate(productData: Omit<Partial<Product>, '_id'>) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...productData,
    };
  }

  static schema = {
    name: 'Product',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      id: 'int',
      title: 'string',
      description: 'string',
      image: 'string',
    },
  };
}
