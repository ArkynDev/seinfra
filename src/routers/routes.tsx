import { createBrowserRouter } from "react-router-dom";


import { LoginPage } from "../pages/LoginPage/LoginPage";
import App from "../App";


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "LoginPage",
                element: <LoginPage />
            }
        ],
    }
])