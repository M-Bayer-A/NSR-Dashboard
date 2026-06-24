import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./app/layouts/mainLayout/MainLayout";
import HomePage from "./app/pages/homePage/HomePage";
import RequestsPage from "./app/pages/requests/requestsPage/RequestsPage";
import RequestDetailsPage from "./app/pages/requests/requestDetailsPage/RequestDetailsPage";

function App() {
  //
  const router = createBrowserRouter([
    {
      // path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: "home", element: <HomePage /> },
        {
          path: "requests",
          children: [
            {
              index: true,
              element: <RequestsPage />,
            },
            {
              path: ":id",
              element: <RequestDetailsPage />,
            },
          ],
        },
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
  return <RouterProvider router={router} />;
}

export default App;
