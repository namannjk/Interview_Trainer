

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
// import Navbar from './components/Navbar';
// import Body from './components/Body';
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Interviewer from './components/UserDashboard';
// import InterviewerSignUp from './components/InterviewerSignUp';
// import About from "./components/About";
// import { Provider } from 'react-redux';
// import store from './utils/store';
// function App() {


//   return (
//         <Provider store={store}>
//         <Navbar />
//         <Outlet />
//         </Provider>
//   )
// }

// const router = createBrowserRouter([{
//   path: "/",
//   element: <App />,
//   children: [
//     {
//       path: "/",
//       element: <Body />
//     },
//     {
//       path: "/about",
//       element: <About />
//     },
//     {
//       path: "/login",
//       element: <Login />
//     },
//     {
//       path: "/register/candidate",
//       element: <SignUp />
//     },
//     {
//       path: "/register/Interviewer",
//       element: <InterviewerSignUp />
//     },
//     {
//       path: "book/:id",
//       element: <Interviewer />
//     }
//   ]
// },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Interviewer from './components/UserDashboard';
import InterviewerSignUp from './components/InterviewerSignUp';
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Schedule from './components/ScheduleInterview';
import InterviewerInterface from './components/InterviewerUI/InterviewerInterface';
import Upcoming from './components/InterviewerUI/Upcoming';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/candidate" element={<SignUp />} />
          <Route path="/register/interviewer" element={<InterviewerSignUp />} />
          <Route path="/book/:id" element={<Interviewer />} />
          <Route path = "/interviewer-dahboard/:id" element = {<InterviewerInterface/>}/>
          <Route path = "/schedule/:id" element = {<Schedule/>}/>
          <Route path = "/Upcoming" element = { <Upcoming/> }/>
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
