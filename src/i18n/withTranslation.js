import * as React from 'react';
import {connect} from 'react-redux';
import mock from './mock'


const withTranslation = (Component) => {
  class HOC extends React.Component {
    render(){
			const {lang} = this.props;
			const t = word => mock[lang][word];
      return <Component {...this.props} t={t}/>;
    }
  }

	const mapStateToProps = state => ({
    lang: state.language.lang,
  });
  

  return connect(mapStateToProps,  null)(HOC);
};


export default withTranslation;