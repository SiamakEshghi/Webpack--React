import { TYPE_1 } from '../action/actionType';

const INITIAL_DATA = {
    item: null
}

export default (state = INITIAL_DATA, action) => {
    switch(action.type) {
        case TYPE_1: return { ...state, item: action.item };
        default: return state;
    }
}