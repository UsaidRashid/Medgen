import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "./Sidebar";
import axios from "axios";

export default function Storedetails() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:6969/admin/fetch-stores"
        );
        const { stores } = response.data;
        setStores(stores);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  });

  return (
    <>
      <div className="d-flex flex-row bg-white">
        <div>
          <Sidebar />
        </div>

        <div>
          <table
            className="table table-striped table-hover"
            style={{ width: "100%", border: "2px solid black" }}
          >
            <thead className="mt-5 mb-5">
              <tr>
                <th scope="col">gst_No</th>

                <th scope="col">name</th>
                <th scope="col">latitude</th>
                <th scope="col">longitude</th>
                <th scope="col">pincode</th>
                <th scope="col">address</th>
                <th scope="col">owner name</th>
                <th scope="col">owner contact</th>
                <th scope="col">owner email</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store.gst_No}>
                  <td>{store.gst_No}</td>
                  <td>{store.name}</td>
                  <td>{store.latitude}</td>
                  <td>{store.longitude}</td>
                  <td>{store.pincode}</td>
                  <td>{store.address}</td>
                  <td>{store.owner ? store.owner.name : ""}</td>
                  <td>{store.owner ? store.owner.contact : ""}</td>
                  <td>{store.owner ? store.owner.email : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
