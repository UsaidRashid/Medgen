import React from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'
import viewStore from "../../Images/viewStoreProfile.png";

const ViewStoreProfile = () => {
  
  return (
    <div class="container rounded bg-white mt-5 mb-5">
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
                   <p>GXA456783</p>
              </div>
              <div class="col-md-12 mt-2">
                <label class="labels"><h5>Name</h5></label>
                <p>Medgen Lelo</p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels "><h5>Latitude</h5></label><p>500</p>        
              </div>
              <div class="col-md-12">
                <label class="labels"><h5>Longitute</h5></label><p>700</p>
              </div>
              <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"><h5>Pincode</h5></label><p>282006</p>
              </div>
              <div class="col-md-12">
                <label class="labels"><h5>Address</h5></label> <p>Agra</p>
              </div>
              <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"><h5>Owner</h5></label><p>Gk Sharma</p>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
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
