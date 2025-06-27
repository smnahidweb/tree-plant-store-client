import { createBrowserRouter } from 'react-router'; // ✅ Correct import
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
import Dashboard from '../Layout/Dashboard';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import About from '../Pages/About';

import UpComingWatering from '../Components/UpComingWatering';
import Community from '../Pages/Community';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        Component: Home,
        loader: () => fetch('https://plant-tree-store-server.vercel.app/plants'),
        hydrateFallbackElement: <Loading />
      },
      {
        path: '/allPlants',
        Component: AllPlanst,
        loader: () => fetch('https://plant-tree-store-server.vercel.app/plants'),
        hydrateFallbackElement: <Loading />
      },
      {
        path:'/about',
        Component:About
      },
      {
        path: '/plants/:id',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://plant-tree-store-server.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <Loading />
      },
      
      {
        path: '/plantsGuide',
        Component: PlanGuide
      }
    ]
  },

  // Auth Layout for Login/Register
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },

  // Dashboard (Private)
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
       {
      index: true, 
      Component: DashboardHome, 
    },
      {
        path: 'myProfile',
        Component: DashboardHome
      },
      {
        path: 'myPlants',
        element: <MyPlants />
      },
      {
        path: 'addPlants',
        element: <AddPlant />
      },
      {
        path: 'updateTree/:id',
        element:<Update></Update>,
        
        loader: ({ params }) => fetch(`https://plant-tree-store-server.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <Loading />
      },
      {
        path:'todaysWatering',
        Component:UpComingWatering,
         loader: () => fetch('https://plant-tree-store-server.vercel.app/plants'),
      },
      {
        path:'allPlants',
        Component:AllPlanst,
         loader: () => fetch('https://plant-tree-store-server.vercel.app/plants'),
        
      },{
        path:'newsletter',
        Component:Community
      }
    ]
  },

  // Catch-all route
  {
    path: '*',
    Component: Error
  }
]);

export default Router;
