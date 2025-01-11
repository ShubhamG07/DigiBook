import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Booklist from './Components/Booklist.jsx'
import Browsebook from './Components/BrowseBook.jsx'
import Bookdetails from './Components/Bookdetails.jsx'
import Addbook from './Components/Addbook.jsx'
import Error from './Components/Error.jsx'


const appRouter= createBrowserRouter([
{
  path:"/",
  element:<App />,
  children: [
    {
      path:"/",
      element:<Booklist />
    },
    {
      path:"/browsebook",
      element:<Browsebook />
    },
    {
      path:"/addbook",
      element:<Addbook />
    },
    {
      path:"bookdetails/:id",
      element:<Bookdetails />
    },
    {
      path:"books/:category",
      element:<Browsebook />
    },
    {
      path:"*",
      element:<Error />
    }

  ],

}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter} />
  </StrictMode>,
)
