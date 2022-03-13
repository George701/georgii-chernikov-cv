import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/lang';

const Navbar = ({ language }) => {
    const [lang, setLang] = useState('biba');
    console.log(language);
    return (
        <select value={lang} onChange={event => setLang(event.target.value)}>
            <option value="biba">Biba</option>
            <option value="boba">Boba</option>
        </select>
    );
}

const mapStateToProps = state => ({
    language: state.language
  });
  
  const mapDispatchToProps = {
    setLanguage,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);