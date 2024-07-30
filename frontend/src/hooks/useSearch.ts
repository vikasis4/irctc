import axios from 'axios';
import useTrains from './useTrains';

const useSearch = () => {

    const train = useTrains();

    const search = async (source: string, destination: string) => {
        try {
            const URL = `http://localhost:8888/api/open/train/search?source=${source}&destination=${destination}`;
            var response = await axios.get(URL);
            if (response.data.success) train.setAllTrains(response.data.result);
            return response.data;
        } catch (error) {
            console.log(error);
            return { success: false };
            
        }
    }

    return search

}

export default useSearch;