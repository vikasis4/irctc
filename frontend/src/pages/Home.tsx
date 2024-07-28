import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Search from '@/components/Search/Search'

function Home() {
  return (
    <div className='h-full w-full relative'>
      <Navbar />
      <Search />
    </div>
  )
}

export default Home