// тк у нас теперь 2 warker(-s) для этого и нужен второй файл index.js  
import { all } from 'redux-saga/effects';
import { countWatcher } from './countSaga';
import { usersWatcher } from './userSaga';
// all - это глобальный watcher, который следит за другими watcher(-ами), похож на combieReducer, который позволяет объединить несколько watcher(-ов)

export function* rootWatcher(){
    yield all([countWatcher(), usersWatcher()])
}

// после этого генератора нужно будет поменять значение в 