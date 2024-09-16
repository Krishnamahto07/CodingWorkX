import { createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";
import BookMarks from "./pages/BookMarks";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Home />,
        errorElement : <Error />
    },
    {
        path:'/movies',
        element : <Movie />,
        errorElement : <Error />
    },
    {
        path:'/tv-series',
        element : <TvSeries />,
        errorElement : <Error />
    },
    {
        path:'/bookmarks',
        element: <BookMarks />,
        errorElement : <Error />
    }
]);