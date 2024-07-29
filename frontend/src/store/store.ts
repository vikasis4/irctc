import { configureStore } from '@reduxjs/toolkit';
import trainReduces from '@/store/slices/trainSlices';
import appState from './slices/appState';

const store = configureStore({
    reducer: {
        trains: trainReduces,
        appState: appState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
