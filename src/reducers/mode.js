import { SWITCH_MODE } from '../constants/actions';
import { modes } from '../constants/options';

const initialState = {
    mode: modes.dark,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SWITCH_MODE:
            return {...state, mode: payload};
        default:
            return state;
    }
};