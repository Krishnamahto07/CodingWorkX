import path from 'path';
import React from 'react'
import Home from './components/Home';
import Error from './components/Error';
import { createBrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Library from './components/Library';
import PlayList from './components/PlayList';
import LikedSongs from './components/LikedSongs';

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Home />,
        errorElement : <Error />
    },
    {
        path: "/search",
        element : <Search />,
        errorElement : <Error />
    },
    {
        path: "/your-library",
        element : <Library />,
        errorElement : <Error />
    },
    {
        path: "/create-playlist",
        element : <PlayList />,
        errorElement : <Error />
    },
    {
        path: "/liked-songs",
        element : <LikedSongs />,
        errorElement : <Error />
    },
]);

