import React from 'react'
import { IoLogoGithub } from 'react-icons/io'

const Cards = ({item}) => {
  return (
    <div key={item.id} className='border  border-red-500 rounded-lg w-[250px]  lg:w-[300px] hover:scale-105 cursor-pointer my-2 bg-red-50'>
        <img src={item.img} alt="" className='rounded-lg'/>
        <div className='p-4'>
            <h1 className='font-semibold text-xl text-red-700 mb-2'>{item.name}</h1>
            <p className='text-orange-600 text-xs'>{item.desc}</p>
            <div className='flex gap-3 mt-4'>
                <button className='bg-red-500 text-white px-3 py-2 rounded-md'><a href={item.Demo} target='blank'>Live Preview</a></button>
                <button className='bg-black text-white rounded-md'>
                    <a href={item.Github}  className='flex gap-1'> <IoLogoGithub className='w-8' /></a>
                     </button>

            </div>
        </div>

    </div>
  )
}

export default Cards