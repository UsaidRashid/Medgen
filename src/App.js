import './App.css';
import Footer from './Layouts/Footer';
import Navbar from './Layouts/Navbar';
import Adminresponse from './Components/Adminresponse';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Adminresponse/>
      <Footer/>
    </div>
  );
}

export default App;