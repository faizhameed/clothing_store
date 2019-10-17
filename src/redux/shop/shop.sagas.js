import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {convertCollectionsSnapshotToMap,firestore} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess,fetchCollectionsFailure} from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap =yield call(convertCollectionsSnapshotToMap,snapshot)
        // in call  invokes a method where the firs param is the func and 2nd is the param of that func
        yield put(fetchCollectionsSuccess(collectionsMap))
        
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }


    // collectionRef
    // .get()
    // .then(snapshot=>{;
    //     const collectionsMap=  convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //   })
    //   .catch(error=>dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        );
}