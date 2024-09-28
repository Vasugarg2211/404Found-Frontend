'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Logs from './Logs'

function Logger() {
  const searchParams = useSearchParams(); 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchLogs = async () => {
    setLoading(true);
    const params = searchParams.toString(); // Get the query params as a string
    const response = await fetch(`/api/logs?${params}`); // Fetch data from API based on query params
    const result = await response.json(); // Assume the API returns JSON
    setData(result); // Set the fetched data in state
    setLoading(false);
    console.log(result)
  };

  useEffect(() => {
    fetchLogs();
  }, [searchParams]); 

  return (
    <div className='flex-1 my-4'>
      <div className='w-full grid grid-cols-5 bg-gray-300/50 px-2 py-4 rounded-lg'>
        <h2>Date</h2>
        <h2>Host</h2>
        <h2>Service</h2>
        <h2>Content</h2>
        <h2>Message</h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        // data.map((d, index) => (
        //   <Logs key={index} log={d} />
        // ))
        <h1>DATA</h1>
      )}
    </div>
  )
}

export default Logger;
