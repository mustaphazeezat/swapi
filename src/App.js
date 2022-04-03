import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/header/Header";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";

function App() {
  return (
    <MovieProvider>
    <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
      
      
    </MovieProvider>
  );
}

export default App;
