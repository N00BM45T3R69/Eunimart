import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/view' element={<Table/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
