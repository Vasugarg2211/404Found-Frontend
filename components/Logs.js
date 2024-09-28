import React from 'react'

function Logs({log}) {
  return (
   <div className='w-full grid grid-cols-5 px-2 p-1 border border-1'>
        <div>{log.Status} </div>
        <div>{log.Status} </div>
        <div>{log.Status} </div>
        <div>{log.Status} </div>
   </div>
  )
}

export default Logs