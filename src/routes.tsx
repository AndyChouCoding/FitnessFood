import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Body from "./pages/body";
import Shop from "./pages/shop";
import Login from "./pages/login";
import LoginSuccess from "./pages/login/loginSuccess";
import SignUp from "./pages/signUp";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
        children: [],
    },
    {
        path: "/about",
        element: <About />,
        children: [],
    },
    {
        path: "/body",
        element: <Body />,
        children: [],
    },
    {
        path: "/shop",
        element: <Shop />,
        children: [],
    },
    {
        path: "/login",
        element: <Login />,
        children: [],
    },
    {
        path: "/loginSuccess",
        element: <LoginSuccess />,
        children: [],
    },
    {
        path: "/signUp",
        element: <SignUp />,
        children: [],
    },
    {
        path: "/cart",
        element: <Cart />,
        children: [],
    },
    {
        path: "*",
        element: <NotFound />,
        children: [],
    },
];

export default routes;
