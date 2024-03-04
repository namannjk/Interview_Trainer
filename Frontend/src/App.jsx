import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'

import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([{
  path : "/",
  element : <App/>,
  children : [
    {
        path : "/",
        element : <Body/>
    },
    // {
    //     path : "/About",
    //     element : <About/>
    // },
    // {
    //     path : "/Contact",
    //     element : <Contact/>
    // },
    {
        path : "/login",
        element : <Login/>
    },
    {
      path : "/register",
      element : <SignUp/>
    }
]
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router} />
);


export default App;
