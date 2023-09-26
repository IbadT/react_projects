//////////////////////////////////////////// 5 //////////////////////////////////
// redux saga

import { applyMiddleware, createStore } from 'redux';
import { reducer } from "./cashReducer";
import { combineReducers } from 'redux';
import { customerReducer } from './customerReducer';
import createSagaMiddleware from '@redux-saga/core'; // 3.
// import { countWatcher } from '../saga/countSaga'; //4.
import { rootWatcher } from '../saga/index'; //5.

const sagaMiddleWare = createSagaMiddleware();


const rootReducer = combineReducers({
    num: reducer,
    customers: customerReducer,
})
// //ПРИ ТАКОЙ ЗАПИСИ, ЧТОБЫ ПОЛУЧИТЬ ЗНАЧЕНИЕ НУЖНО БУДЕТ НАПИСАТЬ↓
// const num = useSelector(state => state.num.num);
// const customers = useSelector(state => state.customers.customers);

// const rootReducer = combineReducers({
//     reducer,
//     customerReducer,
// })
// //ПРИ ТАКОЙ ЗАПИСИ, ЧТОБЫ ПОЛУЧИТЬ ЗНАЧЕНИЕ НУЖНО БУДЕТ НАПИСАТЬ↓
// const num = useSelector(state => state.reducer.num);
// const customers = useSelector(state => state.customerReducer.customers);

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

// // sagaMiddleWare.run(countWatcher); 
// // вместо этого значение после добавления второго генератора пользователей, изменяем на↓
sagaMiddleWare.run(rootWatcher)
// и теперь после этого можем поменять в компоненте App действие кнопки











//////////////////////////////////////////// 4 //////////////////////////////////
// redux thunk
// import { createStore } from "redux";
// import { cashReducer } from "./cashReducer";
// import { customerReducer } from "./customerReducer";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware } from "redux"; //1
// import thunk from "redux-thunk"; //2

// const rootReducer = combineReducers({
//     cash: cashReducer,
//     customers: customerReducer
// })

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))











//////////////////////////////////////////// 3 //////////////////////////////////

// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { cashReducer } from './cashReducer';
// import { customerReducer } from './customerReducer';

// const rootReducer = combineReducers({
//     cash: cashReducer,
//     customers: customerReducer,
// })

// export const store = createStore(rootReducer, composeWithDevTools)
























////////////////////////////////////////////// 2 ////////////////////////////////

// этот файл будет хранить всю логику по работе с данными

// import { createStore, combineReducers } from "redux";
// import { cashReducer } from './cashReducer'
// import { customerReducer } from "./customerReducer";
// import { composeWithDevTools } from "redux-devtools-extension";


// // 2. для того, чтобы можно было передать оба reducer(-a) в store, нам нужен combineReducers↓
// // combineReducer - параметром принимает {}
// const rootReducer = combineReducers({
//     // // можно передать как просто значения↓
//     // cashReducer,
//     // customerReducer

//     // а можно как ключ-значение↓
//     cash: cashReducer,
//     customer: customerReducer,
// })


// // 1. ОБЯЗАТЕЛЬНО ЭКСПОРТИРУЕМ STORE!!!! и передаем в Provider
// // export const store = createStore(cashReducer);

// // 3. передаем rootReducer в store
// // 4. добавляем вторым параметром composeWithDevTools
// export const store = createStore(rootReducer, composeWithDevTools)