import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import viewStore from "../../Images/viewStoreProfile.png";
import { jwtDecode } from "jwt-decode";

const ViewStoreProfile = () => {
  const navigate = useNavigate();
  const  openUpdateStore = (e) =>{
      navigate('/update-store');
  }

  const token = localStorage.getItem('token');
  let decodedToken=null;

  if(token){
      decodedToken = jwtDecode(token);
  }else{
      alert('Seems like you are not logged in...');
      navigate('/login');
  }

  const store={
      gst_No : decodedToken.user.store.gst_No?decodedToken.user.store.gst_No:"",
      name : decodedToken.user.store.name?decodedToken.user.store.name:"",
      latitude : decodedToken.user.store.latitude?decodedToken.user.store.latitude:"",
      longitude : decodedToken.user.store.longitude?decodedToken.user.store.longitude:"",
      pincode : decodedToken.user.store.pincode?decodedToken.user.store.pincode:"",
      address : decodedToken.user.store.address?decodedToken.user.store.address:"",
  }
  const owner = decodedToken.user.name?decodedToken.user.name:"";

  
  return (
    <div class="container rounded bg-white mt-5 mb-5 border border-2 border-dark shadow-lg">
      <div class="row">
        <div class="col-md-7 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
            src={viewStore}
              class="rounded-circle mt-5"
              width="500px"
              height="500px"
            />
           
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="text-right">Store Profile</h3>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"> <h5>Gst No.</h5></label>
                   <p>{store.gst_No}</p>
              </div>
              <div class="col-md-12 mt-2">
                <label class="labels"><h5>Name</h5></label>
                <p>{store.name}</p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels "><h5>Latitude</h5></label><p>{store.latitude}</p>        
              </div>
              <div class="col-md-12">
                <label class="labels"><h5>Longitute</h5></label><p>{store.longitude}</p>
              </div>
              <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"><h5>Pincode</h5></label><p>{store.pincode}</p>
              </div>
              <div class="col-md-12">
                <label class="labels"><h5>Address</h5></label> <p>{store.address}</p>
              </div>
              <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"><h5>Owner</h5></label><p>{owner}</p>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button" onClick={openUpdateStore}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default ViewStoreProfile;
