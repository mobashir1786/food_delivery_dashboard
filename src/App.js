
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
