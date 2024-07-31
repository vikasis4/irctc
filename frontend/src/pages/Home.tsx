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
      {/* <div
        className='rounded-sm shadow-2xl border-2 border-gray-200 text-primary mb-12 m-auto p-6 w-[90%] lg:w-max lg:mt-4'>
        Please click here for Empanelment for PAD items for Catering.
      </div> */}
    </div>
  )
}

export default Home