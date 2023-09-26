import { put,takeEvery,call } from 'redux-saga/effects';
// call - возвращает данные, которые прилетают нам в promis(-e)
import { setUsers, FETCH_USERS } from '../store/customerReducer';

// создаем ф-ию, которая возвращает promis(fetch эта функция и возвращает)
const fetchUsersFromAPI = () => fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUsersWorker(){
    const data = yield call(fetchUsersFromAPI)
    const json = yield call(() => new Promise(res => res(data.json())))
    // теперь в json переменной у нас хранится [] пользователей
    yield put(setUsers(json))
}

export function* usersWatcher(){
    yield takeEvery(FETCH_USERS, fetchUsersWorker)
}