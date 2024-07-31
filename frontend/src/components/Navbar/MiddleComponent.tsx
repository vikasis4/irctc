// src/components/NavBar.js

import useAppState from "@/hooks/useAppState";
import Timer from "./Timer";
import useLogout from "@/hooks/useLogout";
import { useNavigate } from "react-router-dom";

const MiddleComponent = () => {

    const app = useAppState();
    const logoutFxn = useLogout();

    const navigate = useNavigate();

    const handleclick = () => {
        app.setPopUpFxn(true, 'auth');
    }

    const hnadleroute = () => {
        navigate('/admin')
    }


    return (
        <div className="flex-col hidden lg:flex items-center w-full bg-secondary">
            <div className="flex justify-center gap-4 items-center w-full px-6 py-2 ">
                <div className="flex space-x-4">
                    {
                        app.appState.loggedIn ?
                            <div className="flex justify-center items-center space-x-4">
                                <button onClick={logoutFxn} className="bg-primary px-4 text-secondary py-2 font-bold">LOGOUT</button>
                                <h1 className="font-bold">Welcone {app.appState.user.name}</h1>
                                {
                                    app.appState.user.type == 'admin' ?
                                        <button onClick={hnadleroute} className="text-black font-bold">Go To Admin DashBoard</button>
                                        : null
                                }
                            </div>
                            :
                            <div className="flex space-x-4">
                                <button onClick={handleclick} className="text-primary font-bold">LOGIN</button>
                                <button onClick={handleclick} className="text-black">REGISTER</button>
                                <button onClick={handleclick} className="text-black">AGENT LOGIN</button>
                            </div>

                    }
                    <button className="text-black">CONTACT US</button>
                    <button className="text-red-600">DAILY DEALS</button>
                    <button className="bg-gray-200 text-black font-bold px-2">ALERTS</button>
                </div>
                <div className="flex space-x-2 items-center">
                    <Timer />
                    <button className="text-black">A-</button>
                    <button className="text-black">A</button>
                    <button className="text-black">A+</button>
                    <button className="text-black">हिंदी</button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full px-6 py-2">
                <div className="flex items-center space-x-4">
                    <button className="bg-primary text-white font-bold px-4 py-2">IRCTC EXCLUSIVE</button>
                    <button className="text-orange-600 underline font-bold">TRAINS</button>
                    <button className="text-black">LOYALTY</button>
                    <button className="text-orange-600 underline">IRCTC eWallet</button>
                    <button className="text-black">BUSES</button>
                    <button className="text-black">FLIGHTS</button>
                    <button className="text-black">HOTELS</button>
                    <button className="text-black">HOLIDAYS</button>
                    <button className="text-black">MEALS</button>
                    <button className="text-black">PROMOTIONS</button>
                    <button className="text-black">MORE</button>
                </div>
            </div>
        </div>
    );
};

export default MiddleComponent;
