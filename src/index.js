import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
const Rot=()=>{
  return<div>
      <App/>
  </div>
}

const valuer=createBrowserRouter([
  {
      path:"/",
      element:<App/>
  },{
      path:"/App2",
      element:<App2/>
  },{
    path:"/App3",
    element:<App3/>
},{
  path:"/App4",
  element:<App4/>
}
])
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={valuer}>
<Rot/>
  </RouterProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
