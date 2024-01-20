import { useState } from "react";
//route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//component
import Cart from "./component/Cart";
import Layout from "./component/Layout";
import Products from "./component/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: "true", element: <Products /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
