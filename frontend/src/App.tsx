import Routes from "@/routes/Routes"
import { Provider } from 'react-redux';
import store from '@/store/store';
import Pop from "./components/popup/Pop";

function App() {

  return (
    <Provider store={store}>
      <Routes />
      <Pop />
    </Provider>
  )
}

export default App
