import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/lang';
import { languageOptions } from '../../constants/options';
import withTranslation from '../../i18n/withTranslation';

const Navbar = (props) => {
	const {
		language: {lang},
		setLanguage,
	} = props;
	// TODO
	// Slide menu
	// Show humburger
	
	return (
		<div>
			<select value={lang} onChange={event => setLanguage(event.target.value)}>
				{
					Object.values(languageOptions).map(option => (
						<option key={option} value={option}>
								{option.toUpperCase()}
						</option>
					))
				}
			</select>
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