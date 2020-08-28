/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import MainView from './src/screens/MainView/MainView';
import theme from './src/theme';

const App = () => {
  const [themeMode, setThemeMode] = useState('DARK');
  const currentTheme =
    themeMode === 'DARK' ? theme.darkTheme : theme.lightTheme;

  const onSwithTheme = useCallback(() => {
    setThemeMode(themeMode === 'DARK' ? 'LIGHT' : 'DARK');
  }, [themeMode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <MainView theme={themeMode} onSwitchTheme={onSwithTheme} />
    </ThemeProvider>
  );
};

export default App;
