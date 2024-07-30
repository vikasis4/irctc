import Auth from './Auth'
import useAppState from '@/hooks/useAppState'
import Logout from './Logout';

function Pop() {

    const { appState } = useAppState();

    const compMap: { [key: string]: JSX.Element } = {
        'auth': <Auth />,
        'logout': <Logout />
    }

    return (
        appState.showPopup ?
            <div className='flex justify-center items-center absolute inset-0 bg-black bg-opacity-50'>
                {compMap[appState.popUpContent]}
            </div>
            : null
    )
}

export default Pop