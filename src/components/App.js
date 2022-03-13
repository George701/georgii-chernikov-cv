import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from './Navbar'

const App = () => {
  

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        Hello world!
      </div>
    </Provider>
  )
}


export default (App);