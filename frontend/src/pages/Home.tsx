import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Search from '@/components/Search/Search'
import Wrapper from '@/components/Search/Wrapper'

function Home() {


  return (
    <div
      className='h-full w-full relative'>
      <Navbar />
      <Wrapper>
        <Search />
      </Wrapper>
    </div>
  )
}

export default Home