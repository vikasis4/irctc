import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SingleTrainType = {
    _id: string;
    __v: number;
    trainName: string;
    trainNumber: string;
    source: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    duration: number;
    totalSeats: number;
    availableSeats: number;
};
export type TrainState = SingleTrainType[];

const initialState: { data: TrainState } = {
    data: [],
};

const trainsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTrainData: (state, action: PayloadAction<TrainState>) => {
            state.data = action.payload
        },
    },
});

export const { setTrainData } = trainsSlice.actions;

export default trainsSlice.reducer;
