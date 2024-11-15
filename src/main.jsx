import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/Home';
import App from './App';
import EventsPage from './EventsPage';
import Venturative from './components/Venturative';
import Entrepret from './components/Entrepret';
import Admaker from './Admaker';
import Ideation from './Ideation';
import CorporateIcons from './CorporateIcons';
import ExecutiveBody from './components/ExecutiveBody';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/events",
        element:<EventsPage/>
      },
      {
        path:"/venturative",
        element:<Venturative/>
      },
      {
        path:"/entrepret",
        element:<Entrepret/>
      },
      {
        path:"/admaker-bangladesh-2019",
        element:<Admaker/>
      },
      {
        path:"/masters-of-ideation",
        element:<Ideation/>
      },
      {
        path:"/nsuers-meet-corporate-icons",
        element:<CorporateIcons/>
      },
      {
        path:"/executive-board",
        element:<ExecutiveBody/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
