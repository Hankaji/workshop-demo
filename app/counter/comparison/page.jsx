import React from 'react'
import SSR from './ssr'
import CSR from './csr'

const Page = () => {
  return (
    <div className='[&>div]:flex [&>div]:justify-center'>
        <div>
            <SSR></SSR>
        </div>
        <br />
        <div>
            <CSR></CSR>
        </div>
    </div>
  )
}

export default Page