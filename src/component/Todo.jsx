import React, { useState } from 'react'
import { FormTodo } from './FormTodo'
import { WrapperTodo } from './WrapperTodo'
import { EditTodo } from './EditTodo'

export const Todo = () => {
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(1)
  const [edit, setEdit] = useState('')

  // Create
  function addTodos(todo){
    const newTodo = {...todo, id}
    setTodos([...todos, todo])
    setId(id + 1)
  }

  // Delete
  const handleDelete = (id) => {
    const delData = todos.filter((item) => item.id !== id)
    setTodos(delData)
  }


  // Edit
  const handleEdit = (id) => {
    setId(id)
    setEdit('edit')
  }

  function saveData (id, newText, newTime){
    const newData = todos.map((item) => {
      if (item.id === id) {
        return{ ...item, text:newText , time: newTime}
      }
        return item
  
  })
  setTodos(newData)
  }

  console.log(todos)
  return (
    <div className='bg-[#144272] h-min text-white w-1/2 p-8 md:w-2/3 sm:w-2/3'>
      <div className='mb-6'>
        <h2 className='font-bold text-2xl'>Catat Kepentingan mu</h2>
        <p className='mb-2'>Web ini dibuat untuk latihan saya belajar react</p>
        <hr />
        </div>
        <FormTodo addTodos={addTodos} id={id} edit={edit} setEdit={setEdit}/>
        {edit === 'edit' && (<EditTodo id={id} todos={todos} saveData={saveData} setEdit={setEdit}/>)}
        <div className='overflow-y-auto max-h-96'>
        {todos.map((todo, index) => (
        <WrapperTodo key={index} id={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={()  => {handleEdit(todo.id)}}/>))}
        </div>
    </div>
  )
}
