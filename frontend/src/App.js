import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";

import AdminAuthentication from "./Components/Admin/AdminAuthentication";
import AdminDashboard from "./Components/Admin/Dashboard";
import Adminstore from "./Components/Admin/Storedetails";
import Requests from "./Components/Admin/Requests";
import AddMedicine from "./Components/Admin/AddMedicine";
import AddBrandedMedicine from "./Components/Admin/AddBrandedMedicine";
import AddGenericMedicine from "./Components/Admin/AddGenericMedicine";

import StoreRegistrationForm from "./Components/Vendors/StoreRegistrationForm";
import Storelocator from "./Components/Vendors/Storelocator";
import UpdateStore from "./Components/Vendors/UpdateStore";
import ViewStoreProfile from "./Components/Vendors/ViewStoreProfile";
import ViewSingleStore from "./Components/Vendors/ViewSingleStore";

import Medilo from "./Components/Medilo/Medilo";
import Choose from "./Components/Medilo/Choose";
import Choose2 from "./Components/Medilo/Choose2";
import BrandedSearch from "./Components/Medilo/BrandedSearch";
import GenericSearch from "./Components/Medilo/GenericSearch";
import GenericCompareList from "./Components/Medilo/GenericCompareList";
import BrandedCompareList from "./Components/Medilo/BrandedCompareList";
import RequestForm from "./Components/Medilo/RequestForm";
import MedicineNotFound from "./Components/Medilo/MedicineNotFound";
import G2BComparePage from "./Components/Medilo/G2BComparePage";
import B2GComparePage from "./Components/Medilo/B2GComparePage";

import Homepage from "./Components/Homepage";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Userprofile from "./Components/Userprofile";
import UpdateDetails from "./Components/UserProfileUpdate";

import ProtectedRoute from "./Components/Layouts/ProtectedRoute";
import SuperProtectedRoute from "./Components/Layouts/SuperProtectedRoute";

import Services from "./Components/ExtraPages/Services";
import AboutUs from "./Components/ExtraPages/AboutUs";
import ContactUs from "./Components/ExtraPages/ContactUs";
import FAQ from "./Components/ExtraPages/FAQ";
import BrandMed from "./Components/Admin/BrandMedicines";
import GenericMed from "./Components/Admin/GenericMedicines";
import StoreRequests from "./Components/Admin/StoreRequests";
import GenericSaltSearch from "./Components/Medilo/GenericSaltSearch";
import BrandSaltSearch from "./Components/Medilo/BrandSaltSearch";
import GenericResults from "./Components/Medilo/GenericResults";
import BrandResults from "./Components/Medilo/BrandResults";
import Error404 from "./Components/Layouts/Error404";

export default function App() {
  const Appcontent = () => {
    const location = useLocation();
    const showNavFoot =
      location.pathname.startsWith("/admin") ||
      location.pathname === "/login" ||
      location.pathname === "/signup";

    return (
      <div>
        {!showNavFoot && <Navbar />}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route
            path="/medilo"
            element={
              <ProtectedRoute>
                <Medilo />
              </ProtectedRoute>
            }
          >
            {" "}
          </Route>
          <Route
            path="/choose"
            element={
              <ProtectedRoute>
                <Choose />
              </ProtectedRoute>
            }
          >
            {" "}
          </Route>
          <Route
            path="/choose-2"
            element={
              <ProtectedRoute>
                <Choose2 />
              </ProtectedRoute>
            }
          >
            {" "}
          </Route>
          <Route
            path="/branded-search"
            element={
              <ProtectedRoute>
                <BrandedSearch />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/generic-search"
            element={
              <ProtectedRoute>
                <GenericSearch />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/generic-salt-search"
            element={
              <ProtectedRoute>
                <GenericSaltSearch />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/brand-salt-search"
            element={
              <ProtectedRoute>
                <BrandSaltSearch />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/compare-generic-medicine"
            element={
              <ProtectedRoute>
                <G2BComparePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/compare-brand-medicine"
            element={
              <ProtectedRoute>
                <B2GComparePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/user-request-form"
            element={
              <ProtectedRoute>
                <RequestForm />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/branded-compare-list"
            element={
              <ProtectedRoute>
                <BrandedCompareList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/generic-compare-list"
            element={
              <ProtectedRoute>
                <GenericCompareList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/generic-results"
            element={
              <ProtectedRoute>
                <GenericResults />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/brand-results"
            element={
              <ProtectedRoute>
                <BrandResults />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/medicine-not-found"
            element={
              <ProtectedRoute>
                <MedicineNotFound />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/user-profile"
            element={
              <ProtectedRoute>
                <Userprofile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/user-profile-update"
            element={
              <ProtectedRoute>
                <UpdateDetails />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/admin">
            <Route path="" element={<AdminAuthentication />}></Route>
            <Route
              path="dashboard"
              element={
                <SuperProtectedRoute>
                  <AdminDashboard />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="add-medicine"
              element={
                <SuperProtectedRoute>
                  <AddMedicine />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="add-branded-medicine"
              element={
                <SuperProtectedRoute>
                  <AddBrandedMedicine />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="add-generic-medicine"
              element={
                <SuperProtectedRoute>
                  <AddGenericMedicine />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="stores"
              element={
                <SuperProtectedRoute>
                  <Adminstore />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="requests"
              element={
                <SuperProtectedRoute>
                  <Requests />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="brand-medicines"
              element={
                <SuperProtectedRoute>
                  <BrandMed />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="generic-medicines"
              element={
                <SuperProtectedRoute>
                  <GenericMed />
                </SuperProtectedRoute>
              }
            ></Route>
            <Route
              path="store-requests"
              element={
                <SuperProtectedRoute>
                  <StoreRequests />
                </SuperProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="/store-locator"
            element={
              <ProtectedRoute>
                <Storelocator />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/store-registration-form"
            element={
              <ProtectedRoute>
                <StoreRegistrationForm />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/update-store"
            element={
              <ProtectedRoute>
                <UpdateStore />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/view-store-profile"
            element={
              <ProtectedRoute>
                <ViewStoreProfile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/view-single-store"
            element={
              <ProtectedRoute>
                <ViewSingleStore />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/services" element={<Services />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
        {!showNavFoot && <Footer />}
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Appcontent />
      </Router>
    </div>
  );
}
