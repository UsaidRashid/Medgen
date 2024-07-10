import React from 'react';
import './App.css';
import Footer from './Layouts/Footer';
import Navbar from './Layouts/Navbar';
import Adminresponse from './Components/Adminresponse';
import Admin from './Components/Admin';
import StoreRegistrationForm from './Components/StoreRegistrationForm';
import BrandedSearch from './Components/BrandedSearch';
import GenericSearch from './Components/GenericSearch';
import Homepage from './Components/Homepage';
import Medilo from './Components/Medilo';
import ComparePage from './Components/ComparePage';
import Signup from './Components/Signup';
import Login from './Components/Login';

export default function App(){
return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <Footer/>
    </div>
  );
}