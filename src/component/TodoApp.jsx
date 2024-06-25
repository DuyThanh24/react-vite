import './Todo.css'
import Todo from './Todo'
import TodoData from './TodoData'
import { useState } from 'react'
const TodoApp = () => {
    const [value, setValue] = useState([

    ])
    const addData = (name) => {
        const newId = value.length > 0 ? value[value.length - 1].Id + 1 : 1; // Generates a unique Id
        const list = {
            Id: newId,
            name: name
        };
        setValue([...value, list]);
    };
    const handleDelete = (idDelete) => {
        // const numberArray = value;
        const eventNumberArray = value.filter((item) => item.Id !== idDelete);
        setValue(eventNumberArray);
    }
    return (
        <>
            <div className='container'>
                <h1>Todo List</h1>
            </div>
            <Todo addData={addData} />
            <TodoData value={value} handleDelete={handleDelete} />
        </>


    )
}
export default TodoApp;