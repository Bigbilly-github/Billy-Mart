import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useLocation } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContextProvider from '../src/contexts/propscontext.jsx'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/shop.jsx';

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
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
         <RouterProvider router= {router} />
    </ContextProvider>
    
    
  </StrictMode>
)

