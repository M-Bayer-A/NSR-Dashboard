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
import SupervisorsPage from "./app/pages/supervisors/ui/supervisorsPage/SupervisorsPage";
import SupervisorAccountPage from "./app/pages/supervisors/ui/supervisorAccountPage/SupervisorAccountPage";
import { ToastContainer } from "react-toastify";
import LoadingBackDrop from "./app/shared/components/LoadingBackDrop";
import { useSelector } from "react-redux";
import { loadingSelector } from "./app/shared/states/loadingState/loadingSelector";
import WorkersPage from "./app/pages/workers/ui/WorkersPage";
import ReportsPage from "./app/pages/reports/ui/ReportsPage";

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
        { path: "workers", element: <WorkersPage /> },
        { path: "reports", element: <ReportsPage /> },
        { path: "notifications", element: <HomePage /> },
        { path: "categories", element: <HomePage /> },
        { path: "tools", element: <HomePage /> },
        { path: "units", element: <HomePage /> },
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
