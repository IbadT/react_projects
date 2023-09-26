//////////////////////////////////////////// 5 //////////////////////////////////
// redux saga

import React from "react";
import { Provider } from "react-redux/es/exports";
import App from './App';
import { createRoot } from 'react-dom/client';
import { store } from './store/index';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)



// в redux saga есть 3 осн понятия(workers, watchers, effects) 
// весь redux saga построен вокруг генераторов- это функция помеченная звездочкой*

// workers - это функция, внутри которой выполняется какая-то асинхронная 
// логика(setTimeout || асинхронные запросы на сервер и тд)

// watchers - это функция генератор, в которой с помощью специальных функций, 
// мы указываем тип action(-a) и warkers, который будет отрабатывать, 
// когда action с таким типом(который мы указали) будет отрабатывать
// ↓
// др словами - это функция наблюдатель, которая сидит и ждет, 
// когда отработает тот или иной action

// effects - это набор встроенных в redux saga функций, которые помогаю делать запросы, делать dispatch, следить за warkers, и тд












//////////////////////////////////////////// 4 //////////////////////////////////
// redux thunk
// import React from "react";
// import { createRoot } from 'react-dom/client';
// import { Provider } from "react-redux";
// import App from './App';
// import { store } from "./store";

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )









//////////////////////////////////////////// 3 //////////////////////////////////

// import React from "react";
// import { createRoot } from 'react-dom/client';
// import { store } from './store/index';
// import { Provider } from "react-redux";
// import App from './App'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )




//////////////////////////////////////////// 2 //////////////////////////////////////////////

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from '../src/store/index';
// import App from './App'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )




















///////////////////////////////////////////// 1 /////////////////////////////////////////
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux"; // 4
// import { createStore } from "redux"; //1



// 2. создаем reducer для того, чтобы передать в store
// reducer - это просто функция которая может быть просто объявлена через function, 
// так и через => и она принимает 2 параметра(stete, action)
// action -> это просто js объект, у которого обязательно должно быть поле type, 
// по которому мы будем определять(как state будет изменяться) и так же в action 
// можно передать любое количество данных(чаще всего их передают в поле payload)
// action = {type: '', payload: '?'} 

// const reducer = (state = defaultState, action) => {
//   // 3. создаем логику
//   // вся логика фокусируется на том, какой action был проброшен в функцию
//   switch(action.type){
//     case 'ADD_CASH':
//       //каждый раз должны возвращать новый {}↓ {...state}, с помощью spread 
//       // разворачиваем старый state и изменяем какое-то конкретное поле

//       // получаем текущее количество денег на счету и к этому кол-ву денег 
//       // добавить то, что прилетело в action(-е)
//       return {...state, cash: state.cash + action.payload}
//     case 'GET_CASH':
//       return {...state, cash: state.cash - action.payload}
//     // ОБЯЗАТЕЛЬНО НУЖНО ВЕРНУТЬ STATE↓ (если к нам пришел action с типом, 
//     //который мы не обрабатываем ни в каком case), то мы будем возвращать состояние НЕИЗМЕНЕННОЕ
//     default: return state
//   }
// }

// // создаем defaultState, которое будет присваиваться в тот момент, когда пользователь открыл приложение
// const defaultState = {
//   cash: 0
// }

// // state -> это какой-то {}(чаще всего) или [] или какое-то примитивное значение,
// // которое хранит какие-то данные у которого уже есть какие-то конкретные поля
// // (которые могут быть как {}, так и [], так и примитивами)







// // 1. создаем store (параметры->(reducer, action) )
// const store = createStore(reducer)







// // 4. reacu-redux нужен для того, чтобы связать компоненты с redux
// // из этого модуля мы получаем компонент Provider в которое оборачиваем 
// // наше приложение и передаем ему store(будет в компоненты прокидывать наш state)
 
// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//       <App />
//   </Provider>
// )









// есть dispatch, в него передается action. 
// То, как action будет изменять state -> определено внутри reducer(-a). 
// В свою очередь reducer - это чистая функция, 
// которая принимает state и action И ВСЕГДА ВОЗВРАЩАЕТ НОВЫЙ {} state. 
// Этот reducer передается в store, и store с помощью Provider(-a) передается уже в 
// React компоненты, в которых мы эти состояния и используем