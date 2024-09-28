import React from 'react'

function Searchbar() {
    
  return (
    <div className='flex items-center gap-5'>
        <input type="text" className='px-4 bg-gray-400/10 border-2' />
        <button className='p-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm'>
            Search
        </button>
    </div>
  )
}

export default Searchbar