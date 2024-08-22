import "./App.css";
import Header from "./Header";
import Main from "./Main";
import CardDetails from "./CardDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/devjobs-web-app" element={<Main />} />
            <Route
              path="/devjobs-web-app/cards/:id"
              element={<CardDetails />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
