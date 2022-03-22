import { SWITCH_MODE } from '../constants/actions';

export const switchMode = (mode) => dispatch => {
    dispatch({
        type: SWITCH_MODE,
        payload: mode
    });
}