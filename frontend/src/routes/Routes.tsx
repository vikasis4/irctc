import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "@/pages/Home"
import ShowTrains from "@/pages/ShowTrains"
import Error from "./Error"

function Routes() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />
        },
        {
            path: "/showTrains",
            element: <ShowTrains />
        }
    ])

    return (
        <div className="w-full h-full">
            <RouterProvider router={router} />
        </div>
    )
}

export default Routes
