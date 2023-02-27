import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Main } from './pages';
import Dragtest from './pages/Dragtest';
import AddDnd from './pages/AddDnd';
import TodoDnd from './pages/TodoDnd';
import Menu from './pages/Menu';
import ImageUpload from './pages/ImageUpload';

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/DragTest" element={<Dragtest />} />
         <Route path="/AddDnd" element={<AddDnd />} />
         <Route path="/TodoDnd" element={<TodoDnd />} />
         <Route path="/Menu" element={<Menu />} />
         <Route path="/ImageUpload" element={<ImageUpload />} />
      </Routes>
   );
}

export default App;
