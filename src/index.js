import 'react-native-gesture-handler';
import React, {useEffect, Fragment} from 'react';
import {StatusBar} from 'react-native';
import {AuthProvider} from './contexts/AuthContext';

import {AppNavigator} from './navigations';

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <AppNavigator />
      </AuthProvider>
    </Fragment>
  );
};

export {App};
