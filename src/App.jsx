import './component/Todo.css'
import './App.css'
import Todo from './component/Todo'
import TodoData from './component/TodoData'
const App = () => {

 
  return (
    <>
      <div className='container'>
        <h1>Todo List</h1>
      </div>
      <Todo/>
      <TodoData />
    </>
  )
}

export default App
