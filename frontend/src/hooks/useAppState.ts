import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { setPopUp, setLogIn, setUser } from "@/store/slices/appState";

const useAppState = () => {

    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.appState);

    const setPopUpFxn = (showPopup: boolean, popUpContent: string) => {
        dispatch(setPopUp({ showPopup, popUpContent }));
    };
    const setLogInFxn = (value:boolean) => {
        dispatch(setLogIn(value));
    };
    const setUserFxn = (value:any) => {
        dispatch(setUser(value));
    };

    return {
        appState,
        setPopUpFxn,
        setLogInFxn,
        setUserFxn
    }
}

export default useAppState;