import { 
    SELECTEDITEM_CHANGED ,
    ERROR,
    SET_BACKGROUND,
    ISNERT_ITEM
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

export const setBackground = (item) => async (dispatch) => {
    try {
        dispatch({
            type: SET_BACKGROUND,
            payload: item
        })
    } catch {
        dispatch({
            type: ERROR
        })
    }
}

export const setInsertItem = (item) => async (dispatch) => {
    try {
        dispatch({
            type: ISNERT_ITEM,
            payload: item
        })
    } catch {
        dispatch({
            type: ERROR
        })
    }
}