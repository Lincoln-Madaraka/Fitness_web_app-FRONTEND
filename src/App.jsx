import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/loginForm"
import Page from "./components/Page"

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Page/>}/>
    <Route path="/form" element={<LoginForm />} />
    </Routes>
    </BrowserRouter>
  );
      
}

export default App
