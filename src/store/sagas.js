import { takeEvery, takeLatest, put, call, select, all, delay } from 'redux-saga/effects';
import axios from "axios";

function* fetchStoreData() {

    // const token = yield select(selectToken);
    // const headerParams = {
    //   "Authorization": `JWT ${token}`
    // };
    // const apiCall = () => {
    //     return axios.post('/posts', {
    //         action.payload // only if not an object. Otherwise don't use outer {},
    //     },
    //         headerParams: headerParams,
    //     ).then(response => response.data)
    //         .catch(err => {
    //             throw err;
    //         });
    // }

    const apiCall = () => {
        return axios.get('https://swapi.dev/api/vehicles/')
            .then(response => {
                console.log("response", response)
                return response.data.results;
            })
            .catch(err => {
                throw err;
            });
    }

    try {
        const payload = yield call(apiCall);
        yield put({ type: 'FETCHED_DATA_SUCCESS', payload })
    } catch (error) {
        // yield put({ type: 'ADD_TO_CART_FAILURE', payload })
        console.log(error);
    }

}

export default function* root() {
    return yield all([
        takeLatest('FETCHING_DATA_REQUEST', fetchStoreData)
    ])

}