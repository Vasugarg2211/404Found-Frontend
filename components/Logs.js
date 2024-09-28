import React from 'react'

function Logs({log}) {

  const message = log['message'];
  let status = ''

  if(message.includes('INFO')){
    status = 'INFO'
  }
  else if(message.includes('WARN')){
    status = 'WARN'
  }
  else if(message.includes('ERROR')){
    status = 'ERROR'
  }

  const logData = {
    'timestamp': log['@timestamp'], 
    'host': log['host']['name'],
    'status': status,
    'message': message.split(":").pop().trim()
  }

  return (
   <div className='w-full grid grid-cols-5 px-2 p-1 border border-1'>
        <div>{ logData.timestamp } </div>
        <div>{ logData.host } </div>
        <div> { } </div>
        <div> { logData.status } </div>
        <div>{logData.message } </div>
   </div>
  )
}

export default Logs