export const SET_DATA = 'GET_DATA';

export function setData(data) {
    return function(dispatch) {
        return dispatch({type: SET_DATA, payload: data})
    }
}

