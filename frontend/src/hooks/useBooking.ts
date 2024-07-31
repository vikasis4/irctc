import useAppState from "./useAppState"
import axios from "axios";

const URL = 'http://localhost:8888/api/app/booking/create'

const useBooking = (trainId: string) => {

    const app = useAppState();
    const userId = app.appState.user.id;

    const bookTicket = async () => {
        try {
            if (!userId)
                return { success: false, message: 'Please Login First' };

            var response = await axios.post(URL, { userId, trainId }, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.log(error);
            return { success: false, message: 'Something went wrong' };
        }

    }

    return bookTicket
}

export default useBooking; 