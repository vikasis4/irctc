import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { setPopUp } from "@/store/slices/appState";

const useAppState = () => {

    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.appState);

    const setPopUpFxn = (showPopup: boolean, popUpContent: string) => {
        dispatch(setPopUp({ showPopup, popUpContent }));
    };

    return {
        appState,
        setPopUpFxn
    }
}

export default useAppState;