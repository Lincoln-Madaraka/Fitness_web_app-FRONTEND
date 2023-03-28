import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "./components/LoginForm/loginForm"
// import Page from "./components/Page"

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
    </BrowserRouter>
  );
      
}

export default App
