import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import merge from 'deepmerge';

// Adapt navigation theme for MD3
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

// Custom colors
const customColors = {
  primary: '#FFD700',
  secondary: '#4FD1C5',
  tertiary: '#F687B3',
  surface: '#FFFFFF',
  background: '#F7FAFC',
  error: '#E53E3E',
  onPrimary: '#2D3748',
  onSecondary: '#FFFFFF',
  onSurface: '#2D3748',
  surfaceVariant: '#E2E8F0',
};

// Merge themes properly
export const theme = merge.all([
  MD3LightTheme,
  LightTheme,
  {
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
      ...customColors,
    },
    roundness: 2,
  },
]);
