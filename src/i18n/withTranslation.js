import * as React from 'react';
import {connect} from 'react-redux';
import language_eng from './language_eng.json';
import { languageOptions } from '../constants/lang/options';

const withTranslation = (Component) => {
  class HOC extends React.Component {
    render(){
			const {lang} = this.props;
			const t = word => chooseDictionary(lang)[word];
      return <Component {...this.props} t={t}/>;
    }
  }

  const chooseDictionary = (lang) => {
    switch (lang) {
      case languageOptions['eng']:
        return language_eng;
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