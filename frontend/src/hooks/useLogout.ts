import axios from "axios";
import useAppState from "./useAppState";


const useLogout = () => {
    
    const app = useAppState();

    const URL = `http://localhost:8888/api/${app.appState.user.type}/auth/logout`

    const handleClick = async () => {
        var response = await axios.post(URL, {}, { withCredentials: true });

        if (response.data.success) {
            app.setPopUpFxn(false, 'auth');
            app.setLogInFxn(false);
            window.location.href = '/';
        } else {
            alert('Something went wrong. Please try again later.')
        }

    }

    return handleClick
}

export default useLogout