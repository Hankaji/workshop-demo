import React from 'react'

const Page = () => {

  const links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/normal-loading',
      label: 'Normal Loading'
    },
    {
      href: '/lazy-loading',
      label: 'Lazy Loading'
    },
  ]

  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-4 h-16 border-b-[1px] border-[#ccc] border-solid shadow-md">
      <ul className='flex gap-6 justify-between items-center m-0 p-0 list-none [&>li]:'>
        {links.map(({ href, label }) => (
          <li className="text-lg font-semibold no-underline" 
            key={`${href}${label}`}>
            <a href={href}>{label}</a>
          </li>
        ), [])}
      </ul>
    </div>
  )
}

export default Page
