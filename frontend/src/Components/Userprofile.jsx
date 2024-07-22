import React from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';

const Userprofile = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    let decodedToken=null;

    if(token){
        decodedToken = jwtDecode(token);
    }else{
        alert('Seems like you are not logged in...');
        navigate('/login');
    }
    

    const handleEdit = (e) => {
        e.preventDefault();
        navigate('/user-profile-update');
    }
  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-7 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
           
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"> Name</label>
                { decodedToken!==null &&   <p>{decodedToken.name}</p>}
              </div>
              <div class="col-md-12">
                <label class="labels">User name</label>
                { decodedToken!==null &&   <p>{decodedToken.username}</p>}
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Email ID</label>
                { decodedToken!==null &&   <p>{decodedToken.email}</p>}
              </div>
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                { decodedToken!==null &&   <p>{decodedToken.contact}</p>}
              </div>

              <div class="mt-5 text-center">
                <button onClick={handleEdit} class="btn btn-primary profile-button" type="button">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Userprofile;
