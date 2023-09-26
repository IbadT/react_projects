export interface Itodo { // описывает то, что мы будем ожидать в пропсах
    id: number;
    task: string;
    isCompleted: boolean;
}


export interface ITodoList {
    state: Itodo[];
    setState: (state: Itodo[]) => void;
}


export interface IInputTasks {
    value: string;
    setValue: (value: string) => void;
    addTask: () => void;
}


export interface ITodoList {
    state: Itodo[];
    setState: (state: Itodo[]) => void;
}