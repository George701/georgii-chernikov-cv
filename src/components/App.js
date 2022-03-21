import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import Body from './Body';

const App = () => {
  

  return (
    <Provider store={store}>
      <Body />
    </Provider>
  )
}


export default (App);