// npm install redux-saga
// put - своего рода dispatch, который предназначен 
// для синхронных action(-ов)
import { put, takeEvery } from 'redux-saga/effects'
import { actionIncrement, actionDicrement, ASYNC_INCREMENT, ASYNC_DICREMENT } from '../store/cashReducer'


//функция, которая делает искусственную задержку
const delay = (ms) => new Promise(res => setTimeout(res, ms))

// 1.
function* incrementWarker(){
    // перед каким-то асинхронным действием, мы пишем↓
    yield delay(1000)
    // put не отработает до тех пор, пока не отрабтает delay
    yield put(actionIncrement())
}

function* dicrementWarker(){
    yield delay(1000);
    yield put(actionDicrement())
}

// 2.
// для того, чтобы warcker работал, нужно реализовать watcher↓
// watcher будет следить за тем, 
// чтобы асинхронный action был выполнен
export function* countWatcher(){
    // import takeEvery
    // takeEvery(1тип action(-a) за которым нужно следить; 2warcker)
    yield takeEvery(ASYNC_INCREMENT, incrementWarker);
    yield takeEvery(ASYNC_DICREMENT, dicrementWarker);
}