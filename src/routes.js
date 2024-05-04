import { Component } from "react"
import Admin from "./pages/Admin"
import { ADMIN_ROUTE, GAMES_ROUTE, GAME_ROUTE, LOGIN_ROUTE, POPULAR_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import MyGames from "./pages/MyGames/MyGames"
import Shop from "./pages/Shop/Shop"
import Popular from "./pages/Popular"
import Auth from "./pages/Auth"
import GamePage from "./pages/GamePage/GamePage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: GAMES_ROUTE,
        Component: MyGames,
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: POPULAR_ROUTE,
        Component: Popular,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: GamePage,
    }
]