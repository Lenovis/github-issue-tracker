import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const HexAlpha: { [key: number]: string } = {
  0.9: 'E6',
  0.8: 'CC',
  0.7: 'B3',
  0.6: '99',
  0.5: '80',
  0.4: '66',
  0.3: '4D',
  0.2: '33',
  0.1: '1A',
};

export type ThemeType = typeof theme;

export const theme = {
  colors: {
    backgroundColor: '#0e1120',
    black: '#000000',
    borderColor: '#cad1db',
    buttonGreen: '#438440',
    gray: '#222222',
    greyAlpha: (alpha = 1) => `rgba(34, 34, 34, ${alpha})`,
    opacity: (hex: string, alpha: number) => `${hex}${HexAlpha[alpha]}`,
    white: '#FFFFFF',
    lightGrey: '#D3D3D3',
  },
};

export const navigationBarTheme: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: theme.colors.backgroundColor },
  headerTitleStyle: { color: theme.colors.white },
};
