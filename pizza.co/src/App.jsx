import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./featuer/menu/Menu";
import Cart from "./featuer/cart/Cart";
import CreateOrder from "./featuer/order/CreateOrder";
import Order from "./featuer/order/Order";
import AppLayout from "./ui/AppLayout";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {path: "/order/new", element: <CreateOrder />,},
      {path: "/order/:orderId", element: <Order />,}
    
    ]
  }
]); 

export default function App() {
  return <RouterProvider router={router} />;
  
}