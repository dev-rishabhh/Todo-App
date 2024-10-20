import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ContactForm from './components/contact.jsx';
const router=createBrowserRouter([
  {
      path:"/",
      element:<App />,
  },
  {
    path:"/contact",
    element:<ContactForm />
  }
  ])


createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
