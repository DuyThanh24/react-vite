const TodoData = (props) => {
  const { value, handleDelete } = props

  return (
    <>
      <div className="TodoDataContainer">
        <div className="TodoDataContainerBox">
          <div>
            {value.map((item, index) => (
              <div
                key={item.Id}
                className="boxData"
              >
                <p>{item.name}</p>

                <button
                  onClick={() => handleDelete(item.Id)}
                  className="dataButton"
                >Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}
export default TodoData
