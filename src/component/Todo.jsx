import { useState } from 'react'
import './Todo.css'

const Todo = (props) => {
  const [data, setData] = useState('');
  const { addData } = props

  const handleClick = () => {
    addData(data)
    setData('')
  }

  const handleChange = (name) => {
    setData(name)
  }

  return (
    <>
      <div className="todoContainer">
        <div className="todoContainerInput">
          <input
            value={data}
            onChange={(e) => handleChange(e.target.value)}
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