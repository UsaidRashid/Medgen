import { useState } from 'react';
import '../CSS/Update.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function UpdateDetails() {
  const token = localStorage.getItem('token');
  let decodedToken=null;

  if(token){
      decodedToken = jwtDecode(token);
  }else{
      alert('Seems like you are not logged in...');
      navigate('/login');
  }
  

  const navigate=useNavigate();

  const [formData,setFormData] = useState({
    name : decodedToken.user.name? decodedToken.user.name: '',
    email : decodedToken.user.email? decodedToken.user.email: '',
    contact : decodedToken.user.contact? decodedToken.user.contact: '',
  });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value
      })
  }

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:6969/users/update',{formData,token});
          
          if(response.status===200){
            alert(response.data.message);
            const token = response.data.token;
            localStorage.removeItem('token');
            localStorage.setItem('token',token);
            navigate('/user-profile');
          }else{
            alert('Error Updating:',response.data.message);
          }

        } catch (error) {
          console.error("Error in Updating:", error);
          alert( `${error.name} -> ${error.message}`);
          if (error.response) {
            alert("Error from server: " + error.response.data.message);
          } else if (error.request) {
            alert("No response from the server");
          } else {
            alert("Error setting up the request: " + error.message);
          }
        }
  };

  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-6">
            <img
              src="image/ss.png"
              alt=""
              className="img-fluid w-100 h-600"
              id="img1"
            ></img>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-center mt-3 text-dark">
              <b>Update your profile!</b>
            </h3>
            <form className="mx-5 mb-5" onSubmit={handleSubmit} >
              <div className="form-group mt-3">
                <label className="text-dark">Name</label>
                <input
                  type="name"
                  name = 'name'
                  className="form-control border border-3 border-black p-2 border rounded-3 h3"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Email Address</label>
                <input 
                
                  type="email"
                  name = 'email'
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Contact No</label>
                <input
                  type="number"
                  name = 'contact'
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-light p-3 border rounded-5 w-50 float-centre h4 shadow-lg shadow-white bg-dark text-white"
              >
                <b>Update</b>
              </button>
            </form>
              </div>
              
            </div>
          </div>
      
    </>
  );
}
