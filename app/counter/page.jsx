'use client'
 
import { useState } from 'react'
 
const Page = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div className='flex flex-col gap-4'>
      <p>You clicked {count} times</p>
      <button className='border p-2 mx-6 solid border-[#ccc] rounded-lg' type='button'
       onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Page
