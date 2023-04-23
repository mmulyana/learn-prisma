import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [news, setNews] = useState([])

  async function getNews() {
    const res = await axios('/api/news')
    setNews(res.data)
  }
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className='pb-12'>
      <h1 className='mt-4 text-center'>React News</h1>
      <div className='mt-6 max-w-[400px] mx-auto grid grid-cols-1 gap-y-5'>
        {news.map((data) => (
          <div className='w-full h-fit bg-white'>
            <img
              src={data.image}
              className='w-full h-56 rounded object-cover object-center'
            />
            <div className='p-2'>
              <p className='mt-2'>{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
