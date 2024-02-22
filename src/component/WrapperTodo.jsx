import React from 'react'
import Delete from '../assets/image/delete.png'
import Edit from '../assets/image/digital-controller.png'



export const WrapperTodo = ({ id, todo, handleDelete, handleEdit }) => {
  return (
    <section className=''>
      <div className='bg-[#2C74B3] p-4 rounded-sm mb-3 flex items-center justify-between'>
        <div>
            <h2 className='text-base'>{todo.text}</h2>
            <p className='text-xs'>{todo.time}</p>
        </div>
        <div className='flex gap-3'>
            <img src={Edit} alt=""  onClick={()=>handleEdit()} className='hover:cursor-pointer'/>
            <img src={Delete} alt="" onClick={()=>handleDelete(id)} className='hover:cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}
