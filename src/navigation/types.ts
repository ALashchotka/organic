import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum RootStackList {
  MAIN = 'Main',
  DETAILS = 'Details',
}

export type RootStackParamList = {
  [RootStackList.MAIN]: undefined;
  [RootStackList.DETAILS]: undefined;
};

export type RootStackRoute<T extends RootStackList> = RouteProp<RootStackParamList, T>;

export type RootStackNavigation = NavigationProp<RootStackParamList>;
