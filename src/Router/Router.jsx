import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllPlanst from '../Pages/AllPlanst';
import MyPlants from '../Pages/MyPlants';
import AddPlant from '../Pages/AddPlant';





const Router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    errorElement:Error,
    children: [
      {
        path: '',
        Component: Home,
        
        
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/allPlants',
        Component:AllPlanst
      },
      {
        path:'/myPlants',
        Component: MyPlants
      },
      {
        path:'/addPlants',
        Component:AddPlant
      }

    ]
  },
  
//   {
//     path: 'details/:id',
//     element: <PrivateRoute> <Details></Details> </PrivateRoute> ,
//     loader: () => fetch('/Data.json'),
//   },
//   {
    
//       path: 'profile',
//       element: <PrivateRoute><Profile></Profile></PrivateRoute>
//   },
  
  {
    path: "*",
    Component: Error, 
  },
]);

export default Router;