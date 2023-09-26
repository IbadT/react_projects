import React, { useRef, useEffect} from "react";
import { IInputTasks } from '../types/types';


const InputTasks: React.FC<IInputTasks> = ({ value, setValue, addTask }) => {
    const inputRef = useRef<HTMLInputElement>(null); // нужно указать generic и указать 
    // конкретный элемент <HTMLInputElement> --> (наведя на input получим этот элемент)
  
    useEffect(() => {
      // делаем проверку, тк null тоже может быть
      if(inputRef.current) inputRef.current.focus();
    }, []);


    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    //     setValue(e.target.value)
    // }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value)
    }

    const hendleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
        if(e.key === 'Enter') addTask()
    }
    return(
        <div>
            <input ref={inputRef} onChange={e => handleChange(e) } 
                placeholder='input todos'
                // onKeyPress={e => e.key === 'Enter' && addTask()} 
                onKeyPress={e => hendleKeyPress(e)}
                value={value}/>
        </div>
    )
}



// interface IInputTasks{
//     value: string,
//     setValue: Function,
// }
// function InputTasks({ value, setValue }): JSX.Element{
    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//         // function handleChange: React.ChangeEventHandler<HTMLInputElement>(e){
//         setValue(e.target.value)
//     }

//     return(
//         <div>
//             <input onChange={e =>  handleChange(e)} 
//                 placeholder='input todos' 
//                 value={value}/>
//         </div>
//     )
// }



// function InputTasks( props: {value: string, setValue: Function} ): JSX. Element{
//     const { value, setValue } = props;
    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // // function handleChange: React.ChangeEventHandler<HTMLInputElement>(e){
    //     setValue(e.target.value)
    // }
//     return(
//         <div>
//             <input onChange={e =>  handleChange(e)} 
//                 placeholder='input todos' 
//                 value={value}/>
//         </div>
//     ) 
// }


export default InputTasks