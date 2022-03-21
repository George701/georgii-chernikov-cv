import * as React from 'react';
import {connect} from 'react-redux';
import language_eng from './language_eng.json';
import language_rus from './language_rus.json';
import { languageOptions } from '../constants/lang/options';

const withTranslation = (Component) => {
  class HOC extends React.Component {
    render(){
			const {lang} = this.props;
      // console.log(chooseDictionary(lang));
      console.log(chooseDictionary(lang));
			const t = word => chooseDictionary(lang)[word];
      return <Component {...this.props} t={t}/>;
    }
  }

  const chooseDictionary = lang => {
    console.log(languageOptions, lang);
    switch (lang) {
      case languageOptions.eng:
        console.log('I am here');
        return language_eng;
      case languageOptions.rus:
        return language_rus;
      default:
        return language_eng;
    }
  }

	const mapStateToProps = state => ({
    lang: state.language.lang,
  });
  

  return connect(mapStateToProps,  null)(HOC);
};


export default withTranslation;