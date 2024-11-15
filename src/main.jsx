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
import Publications from './components/Publications';
import SubBody from './components/SubBody';
import CurrentFaculty from './components/currentFaculty';
import PreviousAdvisors from './components/PreviousAdvisors';

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
      {
        path:"/sub-executive-board",
        element:<SubBody/>
      },
      {
        path:"/mirza-m-ferdous",
        element:<CurrentFaculty/>
      },
      {
        path:"/publications",
        element:<Publications/>
      },
      {
        path:"/previous-advisors",
        element:<PreviousAdvisors/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
