import React,{useCallback, useState} from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

function TimeFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [timer,setTimer] = useState('15min');

    const createQueryString = useCallback(
        (name, value) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const handleSelectTimer = (e)=>{
        setTimer(e.target.value);
        router.push(pathname + '?' + createQueryString('timeFilter',e.target.value))
    }

  return (
    <select name="time" id="" onChange={handleSelectTimer}>
        <option value="15min">Past 15 minutes</option>
        <option value="1hr">Past 1 hour</option>
        <option value="6hr">Past 6 hours</option>
        <option value="12hr">Past 12 hours</option>
        <option value="24hr">Past 24 hours</option>
    </select>
    )
}

export default TimeFilter