import './App.css';
import Footer from './Layouts/Footer';
import Navbar from './Layouts/Navbar';
import Adminresponse from './Components/Adminresponse';
import Admin from './Components/Admin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Adminresponse/>
      <Footer/>
      <Admin/>
    </div>
  );
}

export default App;