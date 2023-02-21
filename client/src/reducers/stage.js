import { SELECTEDITEM_CHANGED, SET_BACKGROUND, INSERT_ITEM, CHECK_MODAL, SET_INSERTS } from "../actions/actionType"

const initialState = {
    selectedItem: null,
    backgroundImage: null,
    checkModal: false,
    insert: {},
    inserts: []
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
        case INSERT_ITEM:
            return {
                ...state,
                insert: payload
            }
        case CHECK_MODAL:
            {
                return {
                    ...state,
                    checkModal: payload
                }
            }
        case SET_INSERTS:
            {
                return {
                    ...state,
                    inserts: payload
                }
            }
        default:
            return state;
    }
}

export default stageReducer;