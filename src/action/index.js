import { TYPE_1 } from './actionType';

export const action1 = (item) => {
    return dispatch => {
        dispatch({ type: TYPE_1, item })
    }
}