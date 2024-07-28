import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });
  
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value
      })
    }
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        console.log(formData);
  
        const response = await axios.post('http://localhost:6969/users/signup',formData);
        
  
        if( response.status===200){
            alert(response.data.message);
            const token = response.data.token;
            localStorage.setItem('token',token);
            navigate("/");
        }else{
            alert('There was a problem in signing up the user....',response.data.message);
            navigate('/login')
        }      
  
      } catch (error) {
          console.error("Error in Registering:", error);
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
    
    <section>
      <div className="mx-5 my-5">
        <div className="row">
        <div className="col-md-6">
            <img src="image/login.png" className='w-100 h-100' alt="" />
          </div>
          <div className="col-md-6 shadow-lg mb-3">
            <h1 className='text-center mt-3 '><b>Welcome</b></h1>
            <h5 className='text-center mt-3 '><b>Login into your account</b></h5>
            <form className="mx-5 mb-5 mt-5 " onSubmit={handleSubmit}>
  
  <div className="form-group mt-3">
    <label >Username</label>
    <input type="name" className="form-control mb-1"  name='username' value={formData.username} onChange={handleChange}/>
  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control mb-1"   name='password'value={formData.password} onChange={handleChange} />
  </div>

  
  <button
                type="submit"
                className="mt-2 bg-light p-3 border rounded-3  float-centre  shadow-lg shadow-white bg-dark text-white"
              >
                <b>Login</b>
              </button>
              <h4 className="text-center mt-3 text-black">
                 Don't have an account?
                 <b>
                   <Link to="/signup">Signup</Link>
                 </b>
               </h4>
  
</form>
          </div>
          
        </div>
          
          
      </div>
    </section>
    </>
  )
}

export default Login;
