import React from 'react'
import train from '@/assets/train.jpg'
import Card from '@/components/SearchTrains/Card'
import axios from 'axios'
import useAppState from '@/hooks/useAppState'

type WrapperProps = {
    children: React.ReactNode
}

const URL = "http://localhost:8888/api/app/booking/read/"

function Wrapper({ children }: WrapperProps) {

    var app = useAppState();

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        (async () => {
            if (!app.appState.user.id) return null
            var result = await axios.get(URL + app.appState.user.id, { withCredentials: true })
            console.log(result.data);

            if (result.data.success) {
                setData(result.data.result)
            } else {
                alert("Failed to fetch Bookings")
            }
        })()

    }, [app.appState.user.id]);




    return (
        <div
            style={window.innerWidth > 620 ? { backgroundImage: `url(${train})` } : {}}
            className="flex lg:relative justify-center items-center lg:py-8 lg:px-16  bg-no-repeat bg-cover bg-center bg-fixed">

            {children}

            <div className='lg:w-1/2 h-full pl-12'>
                {
                    app.appState.loggedIn ?
                        <>
                            <div className='hidden lg:flex  w-full flex-col ga-4'>
                                <h1 className='bg-primary text-secondary  px-4 py-2 w-full'>
                                    See All Your Bookings
                                </h1>
                            </div>
                            <div className='flex flex-col h-64 gap-4 p-4 overflow-scroll bg-secondary'>
                                {
                                    data.map((value: any) => <Card key={value._id} data={value.train} type="book" />)
                                }
                            </div>
                        </>
                        :
                        null
                }

            </div>
        </div>
    )
}

export default Wrapper