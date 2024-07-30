import Card from '@/components/SearchTrains/Card';
import Header from '@/components/SearchTrains/Header'
import useSearch from '@/hooks/useSearch';
import useTrains from '@/hooks/useTrains'
import React from 'react'
import { useParams } from 'react-router-dom';

function ShowTrains() {

  const { allTrains } = useTrains();
  const search = useSearch();
  const { source = '', destination = '' } = useParams();
  
  
  React.useEffect(() => {
    if (allTrains.length === 0) {
      (async () => {
        await search(source, destination);
      })();
    }
  }, [])

  if (allTrains.length === 0) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <h1 className='text-2xl text-primary'>No Trains Found</h1>
      </div>
    )

  }

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