import { useState } from 'react'
import './Todo.css'
const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState('');
  const handleClick = () => {
    setData(inputValue)
    setInputValue('')
  }

  return (
    <>
      <div className="todoContainer">
        <div className="todoContainerInput">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Text' type="text" />
        </div>
        <div className="todoContainerButton">
          <button
            onClick={handleClick}
          > Add </button>
        </div>
      </div>
    </>
  )
}
export default Todo