
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  let cookie = document.cookie;
  // console.log(cookie);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={cookie ? <Home /> : <Login />} />
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
