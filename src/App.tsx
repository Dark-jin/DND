import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Main } from './pages';
import Dragtest from './pages/Dragtest';
import AddDnd from './pages/AddDnd';
import TodoDnd from './pages/TodoDnd';

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/DragTest" element={<Dragtest />} />
         <Route path="/AddDnd" element={<AddDnd />} />
         <Route path="/TodoDnd" element={<TodoDnd />} />
      </Routes>
   );
}

export default App;
