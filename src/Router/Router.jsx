import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllPlanst from '../Pages/AllPlanst';
import MyPlants from '../Pages/MyPlants';
import AddPlant from '../Pages/AddPlant';
import Details from '../Pages/Details';
import PrivateRoute from '../Provider/PrivateRoute';
import Update from '../Pages/Update';
import Loading from '../Components/Loading';
import PlanGuide from '../Pages/PlanGuide';
import AuthLayout from '../Layout/AuthLayout';


const Router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    errorElement:Error,
    children: [
      {
        path: '/',
        Component: Home,
        loader: ()=> fetch('https://plant-tree-store-server.vercel.app/plants'),
         hydrateFallbackElement: <Loading></Loading>
        
        
      },
     
      {
        path:'/allPlants',
        loader: ()=> fetch('https://plant-tree-store-server.vercel.app/plants'),
        Component:AllPlanst,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path:'/myPlants',
        element: <PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>
      },
      {
        path:'/addPlants',
        element: <PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path: '/plants/:id',
        element: <PrivateRoute>
        <Details></Details>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://plant-tree-store-server.vercel.app/plants/${params.id}`),
         hydrateFallbackElement: <Loading></Loading>
      },
      {
        path:'/updateTree/:id',
        loader: ({params})=> fetch(`https://plant-tree-store-server.vercel.app/plants/${params.id}`),
        element:<Update></Update>,
         hydrateFallbackElement: <Loading></Loading>
      
      },
      {
        path:"/plantsGuide",
        Component:PlanGuide,
      }

    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },{
        path:'/register',
        Component:Register
      }
    ]
  },

  
  {
    path: "*",
    Component: Error, 
  },
]);

export default Router;