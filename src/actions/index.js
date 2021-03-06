import axios from 'axios'

export const initList = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            dispatch({ payload: res.data, type: 'COUNTRIES_LIST_INIT' })
        })
        .catch(error => dispatch({ payload: error.message, type: 'COUNTRIES_LIST_ERROR' })
        );
}
export const change = (text) => dispatch => {
    dispatch({payload: text, type: 'TEXT_READED'})
}
