export const fetchMessageStart = () => ({
    type: 'FETCH_MESSAGE_START'
})

export const fetchMessageSuccess = message => ({
    type: 'FETCH_MESSAGE_SUCCESS',
    payload: message
})

export const fetchMessageError = error => ({
    type: 'FETCH_MESSAGE_ERROR',
    payload: error
})

export const fetchMessage = url => {
    return dispatch => {
        dispatch(fetchMessageStart())
        return fetch(url)
            .then(response => response.json())
            .then(data => dispatch(fetchMessageSuccess(data)))
            .catch(error => dispatch(fetchMessageError(error)))
    }
}