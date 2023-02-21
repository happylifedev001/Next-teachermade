import { 
    SELECTEDITEM_CHANGED ,
    ERROR,
    SET_BACKGROUND,
    INSERT_ITEM,
    CHECK_MODAL,
    SET_INSERTS
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
            type: INSERT_ITEM,
            payload: item
        })
    } catch {
        dispatch({
            type: ERROR
        })
    }
}

export const setCheckModal = (item) => async (dispatch) => {
    try {
        dispatch({
            type: CHECK_MODAL,
            payload: item
        })
    } catch {
        dispatch({
            type: ERROR
        })
    }
}

export const setInserts = (item) => async (dispatch) => {
    try {
        dispatch({
            type: SET_INSERTS,
            payload: item
        })
    } catch {
        dispatch({
            type: ERROR
        })
    }
}