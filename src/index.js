import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import About from "./Componts/Pages/About";
import Home from "./Componts/Pages/Home";
import Service from "./Componts/Pages/Service";
import ErrorPage from "./Componts/ErrorPage";
import MainLoyout from "./Componts/MainLoyout";
import Blog from "./Componts/Pages/Blog";
import Contact from "./Componts/Pages/Contact";

// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <MainLoyout/>,
//     //errorElement: <ErrorPage />,

//     children: [
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/service',
//         element:<Service/>
//       },
//       {
//         path:'*',
//         element:<ErrorPage/>
//       },
//       {
//         path:'/blog',
//         element:<Blog/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ],
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));



root
  .render
  // <React.StrictMode>
  //   <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>
  (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainLoyout />}>
    <Route index element={<Home></Home>} />
    <Route path="*" element={<ErrorPage></ErrorPage>} />
    <Route path="/about" element={<About></About>} />
    <Route path="/service" element={<Service></Service>} />
    <Route path="/blog" element={<Blog></Blog>} />
    <Route path="/contact" element={<Contact></Contact>} />

    </Route>
  </Routes>
</BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
