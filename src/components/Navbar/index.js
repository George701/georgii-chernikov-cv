import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/lang';
import { languageOptions } from '../../constants/lang/options';
import withTranslation from '../../i18n/withTranslation';

const Navbar = (props) => {
	const {
		language: { lang},
		setLanguage,
		t,
	} = props;
	// TODO
	// Slide menu
	// Show humburger
	return (
		<div>
			<select value={lang} onChange={event => setLanguage(event.target.value)}>
				{
					languageOptions.map(option => (
						<option key={option} value={option}>
								{option.toUpperCase()}
						</option>
					))
				}
			</select>
			<span>{t('greeting')}</span>
		</div>
	);
}

const mapStateToProps = state => ({
    language: state.language,
  });
  
  const mapDispatchToProps = {
    setLanguage,
  };
  
export default withTranslation(connect(mapStateToProps, mapDispatchToProps)(Navbar));