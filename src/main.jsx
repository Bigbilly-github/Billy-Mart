import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useLocation } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContextProvider from '../src/contexts/propscontext.jsx'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/shop.jsx';
import Cart from './pages/cart.jsx';
import Wishlist from './pages/wishlist.jsx';
import Checkout from './pages/checkout.jsx';
import AboutUs from './pages/aboutus.jsx';
import ContactUs from './pages/contactus.jsx';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const Layout = ({ children }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout><Homepage /></Layout>,
  },
  {
    path:"/shop",
    element:<Layout><Shop/></Layout>,
  },
   {
    path:"/shop/:title",
    element:<Layout><Shop/></Layout>,
  },
     {
    path:"/cart",
    element:<Layout><Cart/></Layout>,
  },
   {
    path:"/wishlist",
    element:<Layout><Wishlist/></Layout>,
  },
   {
    path:"/checkout",
    element:<Layout><Checkout/></Layout>,
  },
    {
    path:"/aboutus",
    element:<Layout><AboutUs/></Layout>,
  },
   {
    path:"/contactus",
    element:<Layout><ContactUs/></Layout>,
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
         <RouterProvider router= {router} />
    </ContextProvider>
    
    
  </StrictMode>
)

