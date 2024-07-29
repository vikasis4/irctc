import { createSlice } from '@reduxjs/toolkit';

export type appStateProps = {
    showPopup: boolean;
    popUpContent: string;
}

const initialState: appStateProps = {
    showPopup: false,
    popUpContent: 'auth',
}

const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setPopUp: (state, action) => {
            state.showPopup = action.payload.showPopup;
            state.popUpContent = action.payload.popUpContent
        },
    }
})

export const { setPopUp } = appStateSlice.actions;
export default appStateSlice.reducer;