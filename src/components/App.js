import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from './Navbar';
import Starting from './Starting';
import BIO from './BIO';
import Education from './Education';
import Experience from './Experience';
import MyOffers from './MyOffers';
import ContactMe from './ContactMe';
import Footer from './Footer';

const App = () => {
  

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Starting />
        <BIO />
        <Education />
        <Experience />
        <MyOffers />
        <ContactMe />
        <Footer />
      </div>
    </Provider>
  )
}


export default (App);