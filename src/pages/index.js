import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  const [news, setNews] = useState(null)

  async function getNews() {
    const res = await axios.get('/api/news')
    setNews(res.data)
  }
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className='pb-12 max-w-[400px] mx-auto'>
      <div className='flex justify-between items-center mt-4'>
        <h1 className='text-center'>React News</h1>
        <Link href='/create' className='btn-link'>
          Create
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-y-5'>
        {news ? (
          news.map((data, index) => (
            <div className='w-full h-fit bg-white' key={index}>
              <img
                src={data.image}
                className='w-full h-56 rounded object-cover object-center'
              />
              <div className='p-2'>
                <p className='mt-2'>{data.title}</p>
              </div>
            </div>
          ))
        ) : (
          <>
            <Skeleton style={{ height: '224px', borderRadius: '4px' }} />
            <Skeleton style={{ marginTop: '8px', height: '1.5rem' }} />
          </>
        )}
      </div>
    </div>
  )
}
