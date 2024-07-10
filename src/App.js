import './App.css';
import Footer from './Layouts/Footer';
import Navbar from './Layouts/Navbar';
import Adminresponse from './Components/Adminresponse';
import Admin from './Components/Admin';
import React from 'react';
import './App.css';
import StoreRegistrationForm from './Components/StoreRegistrationForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Adminresponse/>
      <StoreRegistrationForm />
      <Admin/>
      <Footer/>
    </div>
  );
}

export default App;