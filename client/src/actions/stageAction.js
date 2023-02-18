import { 
    SELECTEDITEM_CHANGED ,
    ERROR
} from "./actionType";

export const setItem = (item) => async (dispatch) => {
    try {
        dispatch({
            type: SELECTEDITEM_CHANGED,
            payload: item
        })
    } catch {
        dispatch({
            type: ERROR
        })
    }
    
}