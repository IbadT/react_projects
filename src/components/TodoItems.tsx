import { ITodoList } from '../types/types';

function TodoItems(props: ITodoList): JSX.Element{    
    const { state, setState } = props
    function removeTask(index: number): void{
        setState([...state].filter(i => i.id!== index))
    }
    function doneTask(index?: number): void{
        setState([...state].map(i => i.id===index ? {...i ,isCompleted : !i.isCompleted} : i))
    }

    return(
        <>
        {state.map(i => 
            <div key={ i.id } >
            {/* <button onClick={() => doneTask( i.id )}>0</button> */}
            <input type='checkbox' checked={ i.isCompleted } onChange={() => doneTask(i.id)} />
            <span onClick={() => removeTask( i.id )} 
                style={{textDecoration: i.isCompleted? 'line-through' : 'none'}} 
            >   
            { i.task }
            </span>
        </div>)}
        </>
    )
}

export default TodoItems