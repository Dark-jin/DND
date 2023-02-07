import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Main } from "./pages";
import KakaoShareButton from "./components/KakoShareButton";
import Dragtest from "./pages/Dragtest";
import AddDnd from "./pages/AddDnd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/KakaoShareButton" element={<KakaoShareButton />} />
      <Route path="/DragTest" element={<Dragtest />} />
      <Route path="/AddDnd" element={<AddDnd />} />
    </Routes>
  );
}

export default App;
