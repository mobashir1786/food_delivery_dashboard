
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
