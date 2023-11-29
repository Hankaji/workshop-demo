import React from 'react'

const Page = () => {
  return (
    <div>
        {/* <LazyLoadImage
            alt="image 1"
            height={600}
            width={600}
            effect='blur'
            src="images/i1.jpg" /> */}
        <img loading='eager' src="images/i1.jpg" alt="image 1" />
        <img loading='eager' src="images/i2.jpg" alt="image 1" />
        <img loading='eager' src="images/i3.jpg" alt="image 1" />
    </div>
  )
}

export default Page
