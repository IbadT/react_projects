//////////////////////////////////////////// 5 //////////////////////////////////
// redux saga

const INCREMENT = 'INCREMENT';
const DICREMENT = 'DICREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const ASYNC_DICREMENT = 'ASYNC_DICREMENT';

export const reducer = (state = {num: 0}, action) => {
    switch(action.type){
        case INCREMENT:
            return {...state, num: state.num+1}
        case DICREMENT:
            return {...state, num: state.num-1}
        default: return state
    }
}

export const actionIncrement = () => ({type: INCREMENT});
export const actionDicrement = () => ({type: DICREMENT});
// для countWatcher↓
export const actionAsyncIncrement = () => ({type: ASYNC_INCREMENT});
export const actionAsyncDicrement = () => ({type: ASYNC_DICREMENT});










//////////////////////////////////////////// 4 //////////////////////////////////
// redux thunk
// const ADD_CASH = 'ADD_CASH';
// const GET_CASH = 'GET_CASH';

// export const cashReducer = (state = {cash: 0}, action) => {
//     switch(action.type){
//         case ADD_CASH:
//             return {...state, cash: state.cash + action.payload}
//         case GET_CASH:
//             return {...state, cash: state.cash - action.payload}
//         default: return state
//     }
// }

// export const actionAddCash = payload => ({type: ADD_CASH, payload});
// export const actionGetCash = payload => ({type: GET_CASH, payload})























//////////////////////////////////////////// 3 //////////////////////////////////

// const ADD_CASH = 'ADD_CASH';
// const GET_CASH = 'GET_CASH';

// export const cashReducer = (state = {cash: 0}, action) => {
//     switch(action.type){
//         case ADD_CASH:
//             return {...state, cash: state.cash + action.payload}
//         case GET_CASH:
//             return {...state, cash: state.cash - action.payload}
//         default: return state
//     }
// }

// // тк в dispatch мы передаем однотипный {}, то мы можем это оптимизоровать
// // эта функция называется actionCreator(простая функция, которая будет возвращать нам {})
// // export const addCustomerAction = () => ({})

// export const addCashAction = (payload) => ({type: ADD_CASH, payload})
// export const getCashAction = (payload) => ({type: GET_CASH, payload})
















////////////////////////////////////////////// 2 ////////////////////////////////

// для каждого reducer(-a) создаем новый файл, где они и будут храниться

// export const cashReducer = (state = {cash: 0}, action) => {
//     switch(action.type){
//       case 'ADD_CASH':
//         return {...state, cash: state.cash + action.payload}
//       case 'GET_CASH': 
//         return {...state, cash : state.cash - action.payload}
//       default: return state;
//     }
// }