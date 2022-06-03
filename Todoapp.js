import { useState } from 'react'

function Todo({ todo }) {
  return (
    <div className='toto'>
      <h1>{todo}</h1>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value,setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }
  const handleChange = e =>{
    setValue(e.target.value)
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      className='input'
      value={value}
      onChange={handleChange}
      />
    </form>
  )

}

function App() {

  const [todos, setTodos] = useState([
    { text: ' hello anh em' },
    { text: ' hello anh em2' },
    { text: ' hello anh em3' }
  ])
  const addTodo = text =>{
    const newAdd= [...todos, {text}]
    setTodos(newAdd)
  }

  return (
    <div className="wraper" style={{ padding: 20 }}>
      {todos.map(
        (todo, index) => (
          <Todo
            key={index}
            todo={todo.text}
          />
        )
      )}
      <TodoForm addTodo={addTodo}/>
     

      {/* <button onClick={handleClick}>incred</button> */}
    </div>
  )
}


export default App;
