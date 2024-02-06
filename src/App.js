import './App.css';
import SideBar from './SideBar/SideBar';
import Home from './Components/NASA_Ditigal';
import NASA from './Components/NASA';
import Mars from './Components/Mars';
import Gemini from './Components/Gemini';
import Artemis from './Components/Artemis';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <Routes onClick>
        <Route path="" element={ <Home /> } />
        <Route path="NASA" element={ <NASA /> } />
        <Route path="Mars" element={<Mars />} />
        <Route path="Gemini" element={<Gemini />} />
        <Route path="Artemis" element={<Artemis />} />
      </Routes>
    </div>
  );
}

export default App;
