import React from 'react'
import Searchbar from './Searchbar'
import Logger from './Logger'
import Navbar from './Navbar'
import { Histogram } from './Histogram'
import { data } from '@/data'

function Hero() {
  return (
    <div className='flex-1 flex flex-col'>
        <Navbar />
        {/* <Searchbar /> */}
        <Histogram width={1200} height={400} data={data} />
        <Logger />
    </div>
  )
}

export default Hero