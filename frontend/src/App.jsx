import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
// import Navbar from "./components/Navbar";
import Layout from "./hoc/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ]
    },
  ]);

  return (
    <div className="min-h-screen bg-[rgba(0,0,0,1)] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-screen bg-[radial-gradient(ellipse_at_top,rgba(121,22,255,0.2)_0%,rgba(13,5,28,0)_95%)]" />
          <div className="absolute top-100 left-72 w-full h-screen bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.2)_0%,rgba(13,5,28,0)_65%)]" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:p-3 xl:gap-3 gap-0.5">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
