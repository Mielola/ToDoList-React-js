import React, { useState } from 'react'

export const EditTodo = ({id, todos, saveData, setEdit}) => {
    const editData = todos.find(item => item.id === id)
    const [text, setText] = useState(editData.text)
    const [currentTime, setCurrentTime] = useState(editData.time)
    console.log(editData)

    function Edit(newText, newTime){
        newText = text || newText
        newTime = currentTime || newTime
        saveData(editData.id,  newText, newTime)
        console.log(editData.id, newText, newTime)
        setEdit('')
    }


  return (
    <div className='-mt-6 mb-5'>
          <h1 className='font-bold mb-2'>Edit</h1>
          <div className='flex'>
          <input type="text" className='outline-none text-black p-3 w-1/2' onChange={e=>setText(e.target.value)} value={text}/><br />
          <button className='bg-[#205295] py-3 px-6' onClick={() => {Edit()}}>Edit</button>
          </div>
    </div>
  )
}
