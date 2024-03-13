import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ResultsPage from "./components/pages/ResultsPage";
import AlignmentPage from "./components/pages/AlignmentPage";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { useEffect } from "react";
import { fetchUser } from "./redux/actions/user";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/test/alignment" element={<AlignmentPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
