
import './App.css';
import Home from './Pages/Home';
import AddStudents from './Pages/AddStudents'
import BasicTooltip from './ToolTip/Delete'
import { Routes, Route } from 'react-router-dom'
import EditStudent from './Pages/EditStudent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/addStudents' element={<AddStudents/>} />
        <Route exact path='/editStudent/:id' element={<EditStudent/>} />
      </Routes>
      {/* <BasicTooltip /> */}
    </div>
  );
}

export default App;
