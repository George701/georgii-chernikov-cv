import React from 'react';
import { BodyMain } from './Styles';
import Navbar from '../Navbar';
import Starting from '../Starting';
import BIO from '../BIO';
import Education from '../Education';
import Experience from '../Experience';
import MyOffers from '../MyOffers';
import ContactMe from '../ContactMe';
import Footer from '../Footer';
import withTranslation from '../../i18n/withTranslation';

const Body = ({ t }) => {
  return (
    <BodyMain>
      <Starting />
      <BIO />
      <Education />
      <Experience />
      <MyOffers />
      <ContactMe />
      <Footer />
      <Navbar />
      {t('greeting')}
    </BodyMain>
  )
};

export default withTranslation(Body);