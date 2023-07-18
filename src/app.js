import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Component/Header";
import Body from "../Component/Body";
import EmployeeInfo from "../Component/EmployeeInfo";
import ManagerInfo from "../Component/ManagerInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
                path: "/Employee",
                element: <EmployeeInfo Name={document.getElementById("Username")}/>,
            },
            {
                path: "/Manager",
                element: <ManagerInfo Name={document.getElementById("Username")}/>,
            }
        ],
    },

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);