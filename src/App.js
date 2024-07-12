import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './Components/Layouts/Footer';
import Navbar from './Components/Layouts/Navbar';
import Adminresponse from './Components/Admin/Adminresponse';
import Adminstore from './Components/Admin/Adminstore';
import Admin from './Components/Admin/Admin';
import StoreRegistrationForm from './Components/StoreRegistrationForm';
import BrandedSearch from './Components/BrandedSearch';
import GenericSearch from './Components/GenericSearch';
import GenericCompare from './Components/GenericCompare';
import Homepage from './Components/Homepage';
import Medilo from './Components/Medilo';
import ComparePage from './Components/ComparePage';
import RequestForm from './Components/RequestForm';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Storelocator from './Components/Storelocator';

export default function App(){
return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/medilo' element={<Medilo/>}></Route>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/branded-search' element={<BrandedSearch/>}></Route>
          <Route path='/generic-search' element={<GenericSearch/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin-response' element={<Adminresponse/>}></Route>
          <Route path='/admin-store' element={<Adminstore/>}></Route>
          <Route path='/store-registration-form' element={<StoreRegistrationForm/>}></Route>
          <Route path='/compare-medicines' element={<ComparePage/>}></Route>
          <Route path='/user-request-form' element={<RequestForm/>}></Route>
          <Route path='/store-locator' element={<Storelocator/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}