import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home";
import PhotoDetailPage from "./routes/photoDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/photo/:rovername" element={<PhotoDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
