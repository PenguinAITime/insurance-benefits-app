import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from '@store/store';
import { AppNavigator } from '@navigation/AppNavigator';
import { theme } from '@theme/theme';
import './global.css';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}

export default App;
