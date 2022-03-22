import { combineReducers } from 'redux';
import lang from './lang'
import mode from './mode'

export default combineReducers({
    language: lang,
    mode,
});