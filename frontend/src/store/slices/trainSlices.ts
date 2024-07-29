import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SingleTrainType = {
    trainName: string;
    trainNumber: string;
    source: string;
    destination: string;
    departureTime: Date;
    arrivalTime: Date;
    duration: number;
    totalSeats: number;
    availableSeats: number;
};
export type TrainState = SingleTrainType[];

const initialState: TrainState = [
    {
        trainName: 'Punjab Express',
        trainNumber: '235425',
        source: 'Delhi',
        destination: 'Punjab',
        departureTime: new Date('2021-02-01T10:00:00'),
        arrivalTime: new Date(),
        duration: 50,
        totalSeats: 50,
        availableSeats: 50,
    },
    {
        trainName: 'Chennai Express',
        trainNumber: '934425',
        source: 'Punjab',
        destination: 'Delhi',
        departureTime: new Date(),
        arrivalTime: new Date(),
        duration: 120,
        totalSeats: 124,
        availableSeats: 0,
    }
] as TrainState;

const trainsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTrainData: (state, action: PayloadAction<TrainState>) => {
            state = action.payload
        },
    },
});

export const { setTrainData } = trainsSlice.actions;

export default trainsSlice.reducer;
