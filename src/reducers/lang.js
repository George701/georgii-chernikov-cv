import { SET_LANGUAGE } from '../constants/actions';
import { languageOptions } from '../constants/lang/options';

const initialState = {
    lang: languageOptions.eng,
    options: languageOptions
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_LANGUAGE:
            return {...state, lang: payload};
        default:
            return state;
    }
}