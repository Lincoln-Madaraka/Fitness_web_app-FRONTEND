import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "./pages/Register";
import Page from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Quiz from "./pages/Quiz/Quiz";
import Recepie from "./pages/Recepie";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReciperDisplay from "./pages/ReciperDisplay";
import ARecepie from "./pages/ARecepie";

function App() {

  return (
    <Provider store={store} >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/recepie" element={<Recepie />} />
          <Route path="/recepies" element={<ReciperDisplay />} />
          <Route path="/recepie/:id" element={<ARecepie />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );

}

export default App;
