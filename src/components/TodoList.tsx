import TodoItems from './TodoItems';
import { ITodoList } from '../types/types';



function TodoList(props: ITodoList): JSX.Element{
    const { state, setState } = props;

    return(
        <div>
            {state.length > 0 ? 
                <TodoItems state={state} setState={setState}   /> :
                 'Empty tasks'}
        </div>
    )
}








// function TodoList(props: {state: Itodo[]}){
// function TodoList(props: ITodoList){
//     const { state } = props;

//     return(
//         <div>
//             {state.length > 0 ? 
//                 state.map(i => <div key={ i.id }>{ i.task }</div>) : 
//                 'Empty tasks'
//             }
//         </div>
//     )
// }




                        


// const TodoList: React.FC<ITodoList> = ({ state }) => {
//     return(
//         <div>
//             {state.length > 0 ? 
//                 state.map(i => <div key={ i.id }>{ i.task }</div>) : 
//                 'Empty tasks'
//             }
//         </div>
//     )
// }



export default TodoList;