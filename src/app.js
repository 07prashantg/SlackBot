import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Component/Header";
import Body from "../Component/Body";
import EmployeeLogin from "../Component/EmployeeLogin";
import ManagerInfo from "../Component/ManagerInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ManagerLogin from "../Component/ManagerLogin";

//arrow function
//es6 syntex - function applayout(){ }

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/ManagerLogin",
                element: <ManagerLogin />,
            },
            {
                path: "/Employee",
                element: <EmployeeLogin Name={document.getElementById("Username")}/>,
            },
            {
                path: "/Manager",
                element: <ManagerInfo />,
            }
        ],
    },

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);