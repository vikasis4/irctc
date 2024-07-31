import { createSlice } from '@reduxjs/toolkit';

const type = localStorage.getItem('authType') || 'user';

export type appStateProps = {
    showPopup: boolean;
    popUpContent: string;
    loggedIn: boolean;
    user: {
        id: string;
        email: string;
        name: string;
        type: string;
    }
}

const initialState: appStateProps = {
    showPopup: false,
    popUpContent: 'auth',
    loggedIn: false,
    user: {
        id: '',
        email: '',
        name: '',
        type
    }
}

const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setPopUp: (state, action) => {
            state.showPopup = action.payload.showPopup;
            state.popUpContent = action.payload.popUpContent
        },
        setLogIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setPopUp, setLogIn, setUser } = appStateSlice.actions;
export default appStateSlice.reducer;