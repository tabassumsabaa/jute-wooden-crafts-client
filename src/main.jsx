import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error.jsx';
import AddCraft from './Components/AddCraft.jsx';
import UpdateCraft from './Components/UpdateCraft.jsx';
import SingUP from './Components/SingUP.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import ListItemCard from './Components/ListItemCard.jsx';
import ArtCraftCategory from './Components/ArtCraftCategory.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import MoreDetails from './Components/MoreDetails.jsx';
import Users from './Components/Users.jsx';
import AllCraftItems from './Components/AllCraftItems.jsx';
import { fetchItemDetails } from './Components/Fetch/DataFetch.jsx';
import SignIn from './Components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    loader: () => fetch('https://jute-wooden-craft-server.vercel.app/craft'),
  },
  {
    path: "/addcraft",
    element: <AddCraft></AddCraft>,
  },
  {
    path: "updatecraft/:id",
    element: <UpdateCraft></UpdateCraft>,
    loader: ({ params }) => fetch(`https://jute-wooden-craft-server.vercel.app/craft/${params.id}`)
  },
  {
    path: "/singin",
    element: <SignIn></SignIn>
  },
  {
    path: "/singup",
    element: <SingUP></SingUP>,
  },
  {
    path: "/view/:id",
    element: <ViewDetails></ViewDetails>,
    loader: async ({ params }) => {
      const itemDetails = await fetchItemDetails(params.id);
      if (!itemDetails) {
        throw new Response('Item not found', { status: 404 });
      }
      return itemDetails;
    }
  },
  {
    path: "/more/:id",
    element: <MoreDetails></MoreDetails>,
    loader: ({ params }) => fetch(`https://jute-wooden-craft-server.vercel.app/craft/${params.id}`)
  },
  {
    path: "/listItems",
    element: <ListItemCard></ListItemCard>,
  },
  {
    path: "/artCraftCategory",
    element: <ArtCraftCategory></ArtCraftCategory>,
    //loader:() => fetch('https://jute-wooden-craft-server.vercel.app/listItems'),
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('https://jute-wooden-craft-server.vercel.app/users')
  },
  {
    path: '/allCraftItems',
    element: <AllCraftItems></AllCraftItems>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-6xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
