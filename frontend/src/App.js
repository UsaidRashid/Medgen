import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Footer from './Components/Layouts/Footer';
import Navbar from './Components/Layouts/Navbar';

import Admin from './Components/Admin/Dashboard';
import Adminstore from './Components/Admin/Storedetails';
import Requests from './Components/Admin/Requests';
import AddMedicine from './Components/Admin/AddMedicine';

import StoreRegistrationForm from './Components/Vendors/StoreRegistrationForm';
import Storelocator from './Components/Vendors/Storelocator';

import BrandedSearch from './Components/Medilo/BrandedSearch';
import GenericSearch from './Components/Medilo/GenericSearch';
import GenericCompareList from './Components/Medilo/GenericCompareList';
import BrandedCompareList from './Components/Medilo/BrandedCompareList';
import Medilo from './Components/Medilo/Medilo';
import ComparePage from './Components/Medilo/ComparePage';
import RequestForm from './Components/Medilo/RequestForm';

import Homepage from './Components/Homepage';

import Signup from './Components/Signup';
import Login from './Components/Login';

import Services from './Components/ExtraPages/Services';
import AboutUs from './Components/ExtraPages/AboutUs';
import ContactUs from './Components/ExtraPages/ContactUs';
import FAQ from './Components/ExtraPages/FAQ';
import ProtectedRoute from './Components/Layouts/ProtectedRoute';

export default function App(){
return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<Homepage/>}></Route>
          
          <Route path='/medilo' element={<ProtectedRoute><Medilo/></ProtectedRoute>}> </Route>
          <Route path='/branded-search' element={<ProtectedRoute><BrandedSearch/></ProtectedRoute>}></Route>
          <Route path='/generic-search' element={<ProtectedRoute><GenericSearch/></ProtectedRoute>}></Route>
          <Route path='/compare-medicines' element={<ProtectedRoute><ComparePage/></ProtectedRoute>}></Route>
          <Route path='/user-request-form' element={<ProtectedRoute><RequestForm/></ProtectedRoute>}></Route>
          <Route path='/branded-compare-list' element={<ProtectedRoute><BrandedCompareList/></ProtectedRoute>}></Route>
          <Route path='/generic-compare-list' element={<ProtectedRoute><GenericCompareList/></ProtectedRoute>}></Route>


          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

          <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>
          <Route path='/admin/response' element={<ProtectedRoute><AddMedicine/></ProtectedRoute>}></Route>
          <Route path='/admin/store' element={<ProtectedRoute><Adminstore/></ProtectedRoute>}></Route>
          <Route path='/admin/requests' element={<ProtectedRoute><Requests/></ProtectedRoute>}></Route>

          <Route path='/store-locator' element={<ProtectedRoute><Storelocator/></ProtectedRoute>}></Route>
          <Route path='/store-registration-form' element={<ProtectedRoute><StoreRegistrationForm/></ProtectedRoute>}></Route>
          
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='/faq' element={<FAQ/>}></Route>
          
         </Routes>
      <Footer/>
      </Router>
    </div>
  );
}