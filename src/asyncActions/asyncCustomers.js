//////////////////////////////////////////// 5 //////////////////////////////////
// redux saga

import { actionAddCustomer } from '../store/customerReducer';

export const fetchCustomers = () => {
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(actionAddCustomer(json)))
    }
}












//////////////////////////////////////////// 4 //////////////////////////////////
// redux thunk
// import { actionAddManyCustomers } from "../store/customerReducer"

// export const fetchCustomers = () => {
//     // чтобы мы могли использовать эту ф-ю как action
//     // (те прокидывать ее в dispatch), то мы из этой ф-ии должны 
//     // вернуть новую ф-ю, которая параметром принимает dispatch
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())

//             // .then(json => console.log(json))
//             // вместо этой записи мы используем↓ 
//             // после того, как данные от сервера были получены, 
//             // мы можем вызвать тот dispatch, который прокинут через 
//             // параметры и в него прокинуть actionCreator
//             // (который вернет action) и в него передаем json
//             .then(json => dispatch(actionAddManyCustomers(json)))
//     }
// }

// thunk - это Middleware, который позволяет внутри сторонних функций использовать dispatch
// он внутри себя прокидывает параметром dispatch и мы можем им пользоваться