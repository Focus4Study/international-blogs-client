import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite';
import AuthProvider from './context/AuthProvider.jsx';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CustomProvider>
        <RouterProvider router={router} />
      </CustomProvider>
    </AuthProvider>
  </React.StrictMode>,
)
