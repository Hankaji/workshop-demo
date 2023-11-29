import { Suspense } from 'react'
import { PostFeed, Weather } from './../../Components/skeletons'
 
const Page = () => {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <br />
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}

export default Page
