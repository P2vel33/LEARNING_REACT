import "./styles/App.css";
import Posts from "./pages/Posts";
import { Routes, Route, BrowserRouter } from "react-router";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
