import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./app/layouts/mainLayout/MainLayout";
import HomePage from "./app/pages/home/ui/homePage/HomePage";
import RequestsPage from "./app/pages/requests/ui/requestsPage/RequestsPage";
import RequestDetailsPage from "./app/pages/requests/ui/requestDetailsPage/RequestDetailsPage";
import SupervisorsPage from "./app/pages/supervisors/supervisorsPage/SupervisorsPage";
import SupervisorAccountPage from "./app/pages/supervisors/supervisorAccountPage/SupervisorAccountPage";
import { ToastContainer } from "react-toastify";
import LoadingBackDrop from "./app/shared/components/LoadingBackDrop";
import { useSelector } from "react-redux";
import { loadingSelector } from "./app/shared/states/loadingState/loadingSelector";

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
        {
          path: "supervisors",
          children: [
            {
              index: true,
              element: <SupervisorsPage />,
            },
            {
              path: ":id",
              element: <SupervisorAccountPage />,
            },
          ],
        },
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
  const isActionLoading = useSelector(loadingSelector.isActionLoading);
  //
  return (
    <>
      <RouterProvider router={router} />
      <LoadingBackDrop open={isActionLoading} />
      <ToastContainer
        toastStyle={{ fontFamily: "Cairo" }}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={true}
        draggable={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
