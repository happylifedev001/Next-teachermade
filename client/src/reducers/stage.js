import { SELECTEDITEM_CHANGED, SET_BACKGROUND, ISNERT_ITEM } from "../actions/actionType"

const initialState = {
    selectedItem: null,
    backgroundImage: null,
    insert: {}
}

function stageReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SELECTEDITEM_CHANGED:
            return {
                ...state,
                selectedItem: payload
            }
        case SET_BACKGROUND:
            return {
                ...state,
                backgroundImage: payload
            }
        case ISNERT_ITEM:
            return {
                ...state,
                insert: payload
            }
        default:
            return state;
    }
}

export default stageReducer;