import React, { useState } from 'react'


export const FormTodo = ({addTodos, id, edit, setEdit}) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value){
      alert("Tolong Masukkan Tugas")
      return
    }
    const currentTime = new Date().toLocaleTimeString()
    addTodos({id, text: value, time: currentTime})
    setValue('')
    setEdit('')
  }
  return (
    <form className='mb-10'>
        {edit !== 'edit' && (<h1 className='font-bold mb-2'>Buat Catatanmu</h1>)}
        {edit !== 'edit' && (<input type="text" className='outline-none text-black p-3 w-1/2' onChange={(e) => setValue(e.target.value)} value={value}/>)}
        {edit !== 'edit' && (<button className='bg-[#205295] p-3' onClick={handleSubmit}>Create</button>)}

        
    </form>
  )
}
