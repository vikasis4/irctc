import axios from "axios"
import useAppState from "./useAppState"


const useAuth = () => {

    const app = useAppState()
    
    const auth = async (type: string) => {
        const URL = `http://localhost:8888/api/${type}/auth/token`
        const response = await axios.get(URL, { withCredentials: true });
        if (response.data.success) {
            app.setPopUpFxn(false, 'logout');
            app.setLogInFxn(true);
            app.setUserFxn({ name: response.data.result.name, email: response.data.result.email, id: response.data.result._id, type });
        }
    }

    return auth
}

export default useAuth