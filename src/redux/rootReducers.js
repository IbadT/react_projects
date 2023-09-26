const ADDTASK = 'ADDTASK';
const REMOVE = 'REMOVE';
const CHANGE = 'CHANGE';

export const rootReducer = ( state = { tasks: [] }, action ) => {
    switch(action.type){
        case ADDTASK:
            return { ...state, tasks: [action.payload, ...state.tasks] }
        case REMOVE:
            return { ...state, tasks: state.tasks.filter(i => i.id !== action.payload.id) }
        case CHANGE:
            return { 
                ...state, 
                tasks: state.tasks.filter(i => i.id === action.payload.id ? i.isCompleted = !i.isCompleted : i)
                }
        default:
            return state
    }
}

export const actionADD = payload => ({type: ADDTASK, payload})
export const actionREM = payload => ({type: REMOVE, payload})
export const actionCHANGE = payload => ({type: CHANGE, payload})