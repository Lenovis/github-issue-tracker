import {StackNavigationProp} from '@react-navigation/stack/';

import {NavigationMap} from '../../routes/NavigationMap';

declare module '@react-navigation/native' {
  export function useNavigation<T = StackNavigationProp<NavigationMap>>(): T;
}
