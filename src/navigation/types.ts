import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Product } from '@organic/models/Product';

export enum RootStackList {
  MAIN = 'Main',
  DETAILS = 'Details',
}

export type RootStackParamList = {
  [RootStackList.MAIN]: undefined;
  [RootStackList.DETAILS]: { item: Product };
};

export type RootStackRoute<T extends RootStackList> = RouteProp<RootStackParamList, T>;

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
