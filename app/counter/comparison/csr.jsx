'use client'

import React, { useEffect, useState } from 'react'

const CSR = () => {

  const [time, setTime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // hour API
      try {
        const res = await fetch('https://worldtimeapi.org/api/timezone/Europe/London', { cache: 'no-cache' });
        const json = await res.json();
        // console.log(json);
        setTime(json.datetime);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <div>{time ? `CLient side rendered: ${time}` : 'Loading...'}</div>
  )
}

export default CSR
