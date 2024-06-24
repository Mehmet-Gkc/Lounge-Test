import "./App.css";
import PageLayout from "./components/PageLayout/PageLayout";
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
