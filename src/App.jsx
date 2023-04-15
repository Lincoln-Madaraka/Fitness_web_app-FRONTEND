import{
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "./pages/LogIn";
import Page from "./pages/LandingPage";
import LogIn from "./pages/SignIn";
import Quiz from "./pages/Quiz";
import Recepie from "./pages/Recepie";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Page/>}/>
    <Route path="/login" element={<LogIn />}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/recepie" element={<Recepie/>}/>
    </Routes>
    </BrowserRouter>
  );
      
}

export default App;
