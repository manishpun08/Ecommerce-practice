import MainLayout from "../Layout/MainLayout";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const loginRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <ProductList />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
];

export default loginRoutes;
