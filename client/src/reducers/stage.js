import { SELECTEDITEM_CHANGED } from "../actions/actionType"

const initialState = {
    selectedItem: null
}

function stageReducer(state = initialState, action)
{
    const {type, payload} = action;
    
    switch(type)
    {
        case SELECTEDITEM_CHANGED:
            return {
                ...state,
                selectedItem: payload
            }
        default :
            return state;
    }
}

export default stageReducer;