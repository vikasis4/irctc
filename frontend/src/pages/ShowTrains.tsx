import Card from '@/components/SearchTrains/Card';
import Header from '@/components/SearchTrains/Header'
import useTrains from '@/hooks/useTrains'
import React from 'react'

function ShowTrains() {

  const { allTrains } = useTrains();

  return (
    <div className='h-full w-full'>
      <Header data={allTrains[0]} />

      <div className='flex flex-col justify-center items-center gap-4 px-4 py-12 w-full overflow-auto'>
        {
          allTrains.map((train, index) => {
            return (
              <Card key={index} data={train} />
            )
          }
          )}
      </div>

    </div>
  )
}

export default ShowTrains