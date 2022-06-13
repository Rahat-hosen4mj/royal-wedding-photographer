import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Booking from './Pages/Booking/Booking/Booking';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';




function App() {
  return (
    <div className="App">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      
       
        <Route path='/service/:serviceId' element={<ServiceDetail />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        }></Route>
         
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
