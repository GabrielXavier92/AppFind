import React from 'react';
import { AppRegistry } from 'react-native';
import reducers from './src/redux/reducers';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { name as appName } from './app.json';

import App from './src/App';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
console.disableYellowBox = true;
const appBeloDente = props => (
   <Provider store={store} >
      <App />
   </Provider>
)
AppRegistry.registerComponent(appName, () => appBeloDente);
