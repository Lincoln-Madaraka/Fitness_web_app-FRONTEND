import{
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginForm from "./pages/LogIn"
import Page from "./pages/LandingPage"
import Register from "./pages/SignIn"
import Quiz from "./pages/Quiz"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Page/>}/>
    <Route path="/form" element={<LoginForm />}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    </Routes>
    </BrowserRouter>
  );
      
}

export default App;
