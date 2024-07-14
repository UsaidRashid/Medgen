import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Footer from './Components/Layouts/Footer';
import Navbar from './Components/Layouts/Navbar';
import Adminresponse from './Components/Admin/Adminresponse';
import Adminstore from './Components/Admin/Adminstore';
import Admin from './Components/Admin/Admin';
import StoreRegistrationForm from './Components/StoreRegistrationForm';
import BrandedSearch from './Components/BrandedSearch';
import GenericSearch from './Components/GenericSearch';
import GenericCompareList from './Components/GenericCompareList';
import BrandedCompareList from './Components/BrandedCompareList';
import Homepage from './Components/Homepage';
import Medilo from './Components/Medilo';
import ComparePage from './Components/ComparePage';
import RequestForm from './Components/RequestForm';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Storelocator from './Components/Storelocator';
import Requests from './Components/Admin/Requests';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import FAQ from './Components/FAQ';

export default function App(){
return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/medilo' element={<Medilo/>}> </Route>
          <Route path='/branded-search' element={<BrandedSearch/>}></Route>
          <Route path='/generic-search' element={<GenericSearch/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/response' element={<Adminresponse/>}></Route>
          <Route path='/admin/store' element={<Adminstore/>}></Route>
          <Route path='/admin/requests' element={<Requests/>}></Route>
          <Route path='/store-locator' element={<Storelocator/>}></Route>
          <Route path='/store-registration-form' element={<StoreRegistrationForm/>}></Route>
          <Route path='/compare-medicines' element={<ComparePage/>}></Route>
          <Route path='/user-request-form' element={<RequestForm/>}></Route>
          <Route path='/branded-compare-list' element={<BrandedCompareList/>}></Route>
          <Route path='/generic-compare-list' element={<GenericCompareList/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='/faq' element={<FAQ/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}