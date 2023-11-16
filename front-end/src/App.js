// Date: 2021-09-05
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
