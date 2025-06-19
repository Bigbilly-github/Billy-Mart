import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useLocation } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContextProvider from '../src/contexts/propscontext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/shop.jsx';
import Cart from './pages/cart.jsx';
import Wishlist from './pages/wishlist.jsx';
import Checkout from './pages/checkout.jsx';
import AboutUs from './pages/aboutus.jsx';
import ContactUs from './pages/contactus.jsx';
import NotFound from './pages/notfound.jsx';
import Profile from './pages/profile.jsx';
import LoginSignup from './pages/loginSignup.jsx';
import { AuthProvider } from './contexts/authcontext.jsx';
import PrivateRoute from './components/privatewrapper.jsx';


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
    path: "/homepage",
    element: <Layout><PrivateRoute><Homepage /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/shop",
    element: <Layout><PrivateRoute><Shop /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/shop/:title",
    element: <Layout><PrivateRoute><Shop /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/cart",
    element: <Layout><PrivateRoute><Cart /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/wishlist",
    element: <Layout><PrivateRoute><Wishlist /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/checkout",
    element: <Layout><PrivateRoute><Checkout /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/profile",
    element: <Layout><PrivateRoute><Profile /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/aboutus",
    element: <Layout><PrivateRoute><AboutUs /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/contactus",
    element: <Layout><PrivateRoute><ContactUs /></PrivateRoute></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/",
    element: <Layout><LoginSignup /></Layout>, // public login page
    errorElement: <Layout><NotFound /></Layout>,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <ContextProvider>
            <RouterProvider router= {router} />
              <ToastContainer 
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  closeOnClick
                  pauseOnHover
                  draggable
                  theme="light"
          />
        </ContextProvider>
    </AuthProvider>
    
    
  </StrictMode>
)

