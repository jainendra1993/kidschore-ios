import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      <RootNavigator />
    </>
  );
};

export default App;
