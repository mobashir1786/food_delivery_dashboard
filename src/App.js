
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import SideMenu from './components/sidemenu/SideMenu';
import Dashboard from './components/dashboard/Dashboard';
import FoodList from './components/foodlist/FoodList';
import Orderlist from './components/orderlist/Orderlist';
import AddNewFood from './components/addnewfood/AddNewFood';
import InvoiceList from './components/invoicelist/InvoiceList';

function App() {
  const [side, setSide] = useState("flex")
  let cookie = document.cookie;
  const handleSideBar = () => {
    if (side === "flex") {
      setSide("none");
    } else {
      setSide("flex");
    }

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="homecontent">
          {
            cookie ? <SideMenu visible={{ side, setSide }} /> : null
          }
          <Routes>
            <Route path='/' element={cookie ? <Dashboard visible={{ side, setSide, handleSideBar }} /> : <Login />} />
            <Route path='/foodlist' element={<FoodList visible={{ side, setSide, handleSideBar }} />} />
            <Route path='/orderlist' element={<Orderlist visible={{ side, setSide, handleSideBar }} />} />
            <Route path='/addnewfood' element={<AddNewFood visible={{ side, setSide, handleSideBar }} />} />
            <Route path='/invoicelist' element={<InvoiceList visible={{ side, setSide, handleSideBar }} />} />
            {/* <Route  path='/' element={}/> */}
            {/* <Route  path='/' element={}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
