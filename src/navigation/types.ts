import { NavigationProp, RouteProp } from '@react-navigation/native';

import { IItem } from '@organic/api/types';

export enum RootStackList {
  MAIN = 'Main',
  DETAILS = 'Details',
}

export type RootStackParamList = {
  [RootStackList.MAIN]: undefined;
  [RootStackList.DETAILS]: { item: IItem };
};

export type RootStackRoute<T extends RootStackList> = RouteProp<RootStackParamList, T>;

export type RootStackNavigation = NavigationProp<RootStackParamList>;
