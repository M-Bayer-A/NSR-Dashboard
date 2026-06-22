import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./features/main/MainLayout";
import HomePage from "./features/main/sections/home/HomePage";
import { useEffect } from "react";
import RequestsPage from "./features/main/sections/requests/RequestsPage";

function App() {
  //
  const router = createBrowserRouter([
    {
      // path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: "home", element: <HomePage /> },
        { path: "requests", element: <RequestsPage /> },
        { path: "supervisors", element: <HomePage /> },
        { path: "workers", element: <HomePage /> },
        { path: "reports", element: <HomePage /> },
        { path: "notifications", element: <HomePage /> },
      ],
    },
    // {
    //   element: <AuthLayout />,
    //   children: [
    //     { path: "login", element: <LoginPage /> },
    //     { path: "register", element: <RegisterPage /> },
    //   ],
    // },
  ]);
  //
  useEffect(() => {
    document.documentElement.classList.add("light");
  }, []);
  //
  return (
    // <div className="light">
    <RouterProvider router={router} />
    // </div>
  );
}

export default App;
