import { SingleTrainType } from '@/store/slices/trainSlices'
import { formatDate, formatTime, minutesToTime } from '@/utils/handleDate'
import { Button } from '../ui/Button'

function Card({ data }: { data: SingleTrainType }) {

    return (
        <div className='border-2 border-gray-300 rounded-md shadow-md flex gap-4 flex-col justify-start items-start w-full pb-3'>
            <h1 className='text-left bg-gray-200 w-full py-2 font-bold text-text px-4'>{data.trainName} ({data.trainNumber})</h1>
            <div className='flex justify-between items-center gap-4 w-full px-4'>
                <Info time={formatTime(data.arrivalTime)} station={data.source} date={formatDate(new Date())} />
                <h1>--- {minutesToTime(data.duration)} ---</h1>
                <Info time={formatTime(data.departureTime)} station={data.destination} date={formatDate(new Date())} />
            </div>
            <div className='flex justify-center items-center gap-6 font-semibold px-4 w-full'>
                <h1>Total Seats :- {data.totalSeats}</h1>
                <h1>Available Seats :- {data.availableSeats}</h1>
            </div>
            <Button disabled={data.availableSeats == 0 ? true : false} text={data.availableSeats == 0 ? "No Seat Available" : "Book Now"} variant="primary" size="default" className='ml-4' />
        </div>
    )
}

function Info({ time, station, date }: { time: string, station: string, date: string }) {
    return (
        <div className='flex flex-col justify-start items-start'>
            <h1 className='font-bold text-xl'>
                {time}
            </h1>
            <h1>
                {station}
            </h1>
            <h1>
                {date}
            </h1>
        </div>
    )
}

export default Card