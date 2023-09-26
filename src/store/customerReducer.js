//////////////////////////////////////////// 5 //////////////////////////////////
// redux saga

const ADD_CUSTOMER = "ADD_CUSTOMER";
export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';


// в видео только SET_USERS
export const customerReducer = (state = {customers: []}, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, ...action.payload]}
        case 'REMOVE':
            return {...state, customers: state.customers.filter(i => i.id!==action.payload.id)}
        default: return state;
    }
}

export const actionAddCustomer = payload => ({type: ADD_CUSTOMER, payload});
export const setUsers = payload => ({type: SET_USERS, payload});
export const fetchUsers = () => ({type: FETCH_USERS});
export const actionRemove = payload => ({type: 'REMOVE', payload})









//////////////////////////////////////////// 4 //////////////////////////////////
// redux thunk
// const ADD_CUSTOMER = 'ADD_CUSTOMER';
// const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
// const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

// export const customerReducer = (state = {customers: []}, action) => {
//     switch(action.type){
//         case ADD_MANY_CUSTOMERS:
//             // сначала разворачиваем массив, которы у нас есть, 
//             // а затем разворачиваем тот массив, который нас прилетит из сервера
//             return {...state, customers: [...state.customers, ...action.payload]}
//         case ADD_CUSTOMER:
//             return {...state, customers: [...state.customers, action.payload]}
//         case REMOVE_CUSTOMER:
//             return {...state, customers: state.customers.filter(i => i.id !== action.payload)}
//         default: return state
//     }
// }



// // actionCreator - функция, которая принимает какие-то данные и возвращает нам {} action(-a)
// // action - это обычный js {}, у которго обязательно должен быть тип
// export const actionAddCustomer = payload => ({type: ADD_CUSTOMER, payload})
// export const actionRemoveCustomer = payload => ({type: REMOVE_CUSTOMER, payload})
// export const actionAddManyCustomers = payload => ({type: ADD_MANY_CUSTOMERS, payload})



























//////////////////////////////////////////// 3 //////////////////////////////////

// const ADD_CUSTOMER = 'ADD_CUSTOMER';
// const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';


// export const customerReducer = (state = {customers: []}, action) => {
//     switch(action.type){
//         case ADD_CUSTOMER:
//             // возвращаем новый {}, в котором разворачиваем старое состояние 
//             // (и тк это операция ДОБАВЛЕНИЯ пользователя), мы присваиваем customer(-aм) 
//             // новый [], в котором разворачиваем уже существующий customer[] 
//             // и к нему в конец добавляем {}, который будем передавать через action
//             return {...state, customers: [...state.customers, action.payload]}
//         case REMOVE_CUSTOMER:
//             // возвращаем новый {}, в котором разворачиваем старое состояние 
//             // (и тк это операция УДАЛЕНИЯ пользователя), мы присваиваем customer(-aм) 
//             // новый [], в котором разворачиваем уже существующий customer[] 
//             // и к нему в конец добавляем {}, который будем передавать через action
//             return {...state, customers: state.customers.filter(i => i.id!==action.payload)}
//             // фильтруем [] и испльзуем filter, которая всегда возвращаем новый [], 
//             // в который попадают только те {}, для которых функция вернет true
//             // (если id слиента === id того клиента, которого мы будем передавать как payload, 
//             //     то тогда эл не попадет в новый [])
//         default: return state
//     }
// }

// // тк в dispatch мы передаем однотипный {}, то мы можем это оптимизоровать
// // эта функция называется actionCreator(простая функция, которая будет возвращать нам {})
// // export const addCustomerAction = () => ({})
// export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
// export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
















////////////////////////////////////////////// 2 ////////////////////////////////
// для каждого reducer(-a) создаем новый файл, где они и будут храниться

// export const customerReducer = (state = {customers: []}, action) => {
//     switch(action.type){
//       case 'ADD_CUSTOMER':
//         return {...state, cash: state.cash + action.payload}
//       case 'GET_CUSTOMER': 
//         return {...state, cash : state.cash - action.payload}
//       default: return state;
//     }
// }