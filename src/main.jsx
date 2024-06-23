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
import SingIN from './Components/SingIN.jsx';
import SingUP from './Components/SingUP.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import ListItemCard from './Components/ListItemCard.jsx';
import ArtCraftCategory from './Components/ArtCraftCategory.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import MoreDetails from './Components/MoreDetails.jsx';
import Users from './Components/Users.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
//import ListItems from './Components/ListItems.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    loader: () => fetch('http://localhost:5000/craft'),   
  },
  {
    path: "/addcraft",
    element: <AddCraft></AddCraft>,
  },
  {
    path: "updatecraft/:id",
    element: <UpdateCraft></UpdateCraft>,
    loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
  },
  {
    path:"/singin",
    element: <SingIN></SingIN>
  },
  {
    path: "/singup",
    element: <SingUP></SingUP>,
  }, 
  {
    path: "/view/:id",
    element: <ViewDetails></ViewDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/listItems/${params.id}`)
  },
  {
    path: "/more/:id",
    element: <MoreDetails></MoreDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
  } ,
  {
    path: "/listItems",
    element: <ListItemCard></ListItemCard>,    
  },
  {
    path: "/artCraftCategory",
    element: <ArtCraftCategory></ArtCraftCategory>,
    //loader:() => fetch('http://localhost:5000/listItems'),
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
