import React, { useState } from 'react'
import { FormTodo } from './FormTodo'
import { WrapperTodo } from './WrapperTodo'
import { EditTodo } from './EditTodo'

export const Todo = () => {
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(1)
  const [edit, setEdit] = useState('')
  const [search, setSearch] = useState('')

  // Search
  const searchFilter = (e) => {
    setSearch(e.target.value)
  }

  const filterTodos = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))

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
    <div className='md:bg-[#144272] md:h-min md:text-white md:w-1/2 md:p-8 sm'>
      <div className='mb-6'>
        <h2 className='font-bold text-2xl'>Catat Kepentingan mu</h2>
        <p className='mb-2'>Web ini dibuat untuk latihan saya belajar react</p>
        <hr />
        </div>
        <FormTodo addTodos={addTodos} id={id} edit={edit} setEdit={setEdit}/>
        {edit === 'edit' && (<EditTodo id={id} todos={todos} saveData={saveData} setEdit={setEdit}/>)}
        <div className=' mb-5 flex flex-col gap-2'>
          <input type="text" className='outline-none text-black p-3 w-full rounded-sm' value={search} onChange={searchFilter} placeholder='Searching...'/>
        </div>
        <div className='overflow-y-auto max-h-96'>
        {filterTodos.map((todo, index) => (
        <WrapperTodo key={index} id={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={()  => {handleEdit(todo.id)}}/>))}
        </div>
    </div>
  )
}
