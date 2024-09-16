import { createBrowserRouter} from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Error from "./components/Error";
import Signup from "./components/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Home />,
        errorElement : <Error />
    },
    {
        path:'/login',
        element : <Login />,
        errorElement : <Error />
    },
    {
        path:'/signup',
        element : <Signup />,
        errorElement : <Error />
    }
]);