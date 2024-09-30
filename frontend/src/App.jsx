import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Layout from "./hoc/Layout";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import ProductDisplay from "./pages/ProductDisplay";
import ProductCreation from "./pages/ProductCreation";
import ProductUpdation from "./pages/ProductUpdation";
import Cart from "./pages/Cart";
import MyProducts from "./pages/MyProducts";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <SignUp/>,
        },
        {
          path: "/search",
          element: <Search/>,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/listing",
          element: <MyProducts/>,
        },
        {
          path: "/view",
          element: <ProductDisplay/>,
        },
        {
          path: "/create",
          element: <ProductCreation/>,
        },
        {
          path: "/update",
          element: <ProductUpdation/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
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
