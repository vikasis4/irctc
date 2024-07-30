import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTrainData, TrainState } from "@/store/slices/trainSlices";

const useTrains = (): { allTrains: TrainState, setAllTrains: (data: TrainState) => void } => {

    const dispatch = useAppDispatch();
    const allTrains = useAppSelector((state) => state.trains.data);

    const setAllTrains = (data: any) => {        
        dispatch(setTrainData(data));
    }

    return {
        allTrains,
        setAllTrains
    }
}

export default useTrains;