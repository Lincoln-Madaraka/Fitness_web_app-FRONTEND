import{
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginForm from "./pages/LogIn"
import Page from "./pages/LandingPage"
import Register from "./pages/SignIn"

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

export default App;
