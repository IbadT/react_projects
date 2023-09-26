//////////////////////////////////////////// 5 //////////////////////////////////
// redux saga

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAsyncIncrement, actionAsyncDicrement } from './store/cashReducer';
// import {  actionIncrement, actionDicrement } from './store/cashReducer';
import { actionRemove, fetchUsers } from "./store/customerReducer";

function App(){
  const dispatch = useDispatch();
  const num = useSelector(state => state.num.num);
  const customers = useSelector(state => state.customers.customers);

  return(
    <div>
      <div>{num}</div>
      {/* <button onClick={() => dispatch(actionIncrement())}>INCREMENT++</button> */}
      <button onClick={() => dispatch(actionAsyncIncrement())}>INCREMENT++</button>
      {/* <button onClick={() => dispatch(actionDicrement())}>DICREMENT--</button> */}
      <button onClick={() => dispatch(actionAsyncDicrement())}>DICREMENT--</button>
      <button onClick={() => dispatch(fetchUsers())}>Получить Users</button>

      {customers.length> 0 ?
        <div>{customers.map(i => <div onClick={() => dispatch(actionRemove(i))} key={i.id}>{ i.name }</div>)}</div> :
        <div>Клиенты отсутствуют</div>
      }
    </div>
  )
}
export default App























//////////////////////////////////////////// 4 //////////////////////////////////
// redux thunk
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCustomers } from "./asyncActions/asyncCustomers";
// import {actionAddCash, actionGetCash} from './store/cashReducer';
// import {actionAddCustomer, actionRemoveCustomer} from './store/customerReducer';

// function App(){
//   const dispatch = useDispatch();
//   const cash = useSelector(state => state.cash.cash);
//   const customers = useSelector(state => state.customers.customers)

//   const addCash = (cash) => { 
//     dispatch(actionAddCash(cash))
//   }
//   const getCash = (cash) => {
//     dispatch(actionGetCash(cash))
//   }

//   const addCustomer = (name) => {
//     const customer = {
//       name,
//       id : Date.now(),
//     }
//     dispatch(actionAddCustomer(customer))
//     // dispatch({type: 'ADD_CUSTOMER', payload: customer})
//   }
//   const removeCustomer = (customer) => {
//     dispatch(actionRemoveCustomer(customer.id))
//     // dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id})
//   }

//   return(
//     <div>
//       <div>{cash}</div>
//       <button onClick={() => addCash(Number(prompt()))}>addCash</button>
//       <button onClick={() => getCash(Number(prompt()))}>getCash</button>

//       <button onClick={() => addCustomer(prompt())}>addCustomer</button>
//       <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
//       {customers.length>0 ? 
//         <div>{customers.map(i => <div onClick={() => removeCustomer(i)}>{ i.name }</div>)}</div> :
//         <div>Клиентов нет</div>
//       }
//     </div>
//   )
// }
// export default App


























//////////////////////////////////////////// 3 //////////////////////////////////

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addCashAction, getCashAction } from "./store/cashReducer";
// import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";



// function App(){
//   const dispatch = useDispatch();
//   const cash = useSelector(state => state.cash.cash);
//   // с помощью хука получаем значение
//   const customers = useSelector(state => state.customers.customers)

//   const addCash = cash => {
//     // dispatch({type: 'ADD_CASH', payload: cash})
//     // // 5. вместе этой записи будем делать так(после объявления actionCreator(-a))↓
//     dispatch(addCashAction)
//   }
//   const getCash = cash => {
//     // dispatch({type: 'GET_CASH', payload: cash})
//     // 5.↓
//     dispatch(getCashAction)
//   }


//   const addCustomer = (name) => {
//     const customer = {
//       name,
//       id: Date.now() //чтобы id был уникальным, мы будем получать его из текущего времени
//     }
//     // и этот {} мы передаем в качестве payload
//     // 5.↓
//     dispatch(addCustomerAction(customer))
//     // dispatch({type: 'ADD_CUSTOMER', payload: customer})
//   }
//   const removeCustomer = (customer) => {
//     // 5.↓
//     dispatch(removeCustomerAction(customer.id))
//     // dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id})
//   }

//   return(
//     <div>
//       <div>{cash}</div>
//       <button onClick={() => addCash(Number(prompt()))}>addCash</button>
//       <button onClick={() => getCash(Number(prompt()))}>getCash</button>

//       <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
//       <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
//       {customers.length > 0 ? 
//         // будем удалять клиентов получая их id
//         <div>{customers.map(i => <div onClick={() => removeCustomer(i)} key={i}>{i.name}</div>)}</div> : 
//         <div>Клиенты отсутствуют!</div>}
//     </div>
//   )
// }
// export default App

























///////////////////////////////////////////// 2 /////////////////////////////////////////
// import React from "react";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import './App.css'
// // 'ADD_CASH'
// // 'GET_CASH'
// // 'ADD_CUSTOMER'
// // 'GET_CUSTOMER'


// function App(){
//   const dispatch = useDispatch();
//   // после изменения store и добавления rootReducer эта запись не будет работать↓, 
//   // тк у нас теперь 2 reducer(-a), а образаемся мы к одному
//   // const cash = useSelector(state => state.cash);


//   // вот эта новая запись будет работать
//   const cash = useSelector(state => state.cash.cash)

//   function addCash(cash){
//     dispatch({type: 'ADD_CASH', payload: cash})
//   }
//   function getCash(cash){
//     dispatch({type: 'GET_CASH', payload: cash})
//   }

//   return(
//     <div>
//       <div>{cash}</div>
//       <button onClick={() => addCash(Number(prompt()))}>addCash</button>
//       <button onClick={() => getCash(Number(prompt()))}>getCash</button>
//     </div>
//   )
// }
// export default App;


















///////////////////////////////////////////// 1 /////////////////////////////////////////

// function App(){
//   // чтобы как-то изменить state, нам нужен dispatch
//   const dispatch = useDispatch();
//   // для того, чтобы получить state, который принимает параметрами функцию, 
//   // а эта функция уже принимает state, и из этого state мы уже получаем нужную переменную
//   const cash = useSelector(state => state.cash)
  
//   console.log(cash) // равна 0

//   // сумма будет изменяться не на какое-то фиксированное кол-во денег, 
//   // а чтобы мы самму указывали сами
//   const addCash = (cash) => {
//     // dispatch-функция, которая принимает action
//     dispatch({type: 'ADD_CASH', payload: cash})

//   }
//   const getCash = (cash) => {
//     dispatch({type: 'GET_CASH', payload: cash})
//   }



//   // // увеличивает или уменьшает числo на 1
//   // const addCash = () => {
//   //   // dispatch-функция, которая принимает action
//   //   dispatch({type: 'ADD_CASH', payload: 1})

//   // }
//   // const getCash = () => {
//   //   dispatch({type: 'GET_CASH', payload: 1})
//   // }

//   return(
//     <div>
//       <div>
//         <div>{cash}</div>
//         {/* тк строка значение приобразуется в строке, нам нужно приобразовать его в числу, поэтому мы используем Number */}
//         <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
//         <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
//       </div>
//     </div>
//   )
// }
// export default App;