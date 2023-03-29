import{
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/loginForm"
import Page from "./components/home/Page"
import Register from "./components/LoginForm/Register"
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Page/>}/>
    <Route path="/form" element={<LoginForm />}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
      
}

export default App
