import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import AuthLayout from './components/AuthLayout.jsx';
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import { Provider } from 'react-redux';
import store from './store/store.js'
import Cart from './pages/Cart.jsx'
import UserContext from './context/UserContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },

      {
        path: "/signup",
        element: (
          <AuthLayout authentication = {false}>
            <Signup />
          </AuthLayout>
        )
      },

      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <UserContext >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </UserContext>
)
