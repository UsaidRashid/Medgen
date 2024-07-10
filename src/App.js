import './App.css';
import Footer from './Layouts/Footer';
import Navbar from './Layouts/Navbar';
import Adminresponse from './Components/Adminresponse';
import Admin from './Components/Admin';
import React from 'react';
import './App.css';
import StoreRegistrationForm from './Components/StoreRegistrationForm';
import BrandedSearch from './Components/BrandedSearch';
import GenericSearch from './Components/GenericSearch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Adminresponse/>
      <StoreRegistrationForm />
      <Admin/>
      <BrandedSearch/>
      <GenericSearch/>
      <Footer/>
    </div>
  );
}

export default App;