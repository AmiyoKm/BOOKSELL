import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import Home from "../pages/home/home.jsx"
import Login from "../components/Login.jsx"
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import Checkout from "../pages/books/Checkout.jsx";
import Orders from "../pages/orders/order.jsx";

const router =createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/about",
                element: <div>adout</div>
            },
           {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <Checkout />
            }
        ]
    }
])

export default router