import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "./Sidebar";
import axios from "axios";

export default function BrandMed() {
  const brand = [
    {
      name: "Paracetamol",
      code: "PRC123",
      salt: "Paracetamol",
      batch: "BATCH001",
      price: 20.5,
    },
    {
      name: "Ibuprofen",
      code: "IBU456",
      salt: "Ibuprofen",
      batch: "BATCH002",
      price: 35.0,
    },
    {
      name: "Amoxicillin",
      code: "AMX789",
      salt: "Amoxicillin",
      batch: "BATCH003",
      price: 50.0,
    },
    {
      name: "Cetirizine",
      code: "CET101",
      salt: "Cetirizine",
      batch: "BATCH004",
      price: 15.0,
    },
    {
      name: "Aspirin",
      code: "ASP202",
      salt: "Aspirin",
      batch: "BATCH005",
      price: 25.0,
    },
  ];

  return (
    <>
      <div className="d-flex flex-row bg-white  ">
        <div>
          <Sidebar />
        </div>
        <div className="w-100">
        <h3 className="ms-2 text-decoration-underline">Branded Medicines</h3>
          <table
            className="table table-striped table-hover mt-2 ms-2 w-100"
            style={{ width: "100%", border: "2px solid black" }}
          >
            <thead >
              <tr>
                <th scope="col">name</th>
                <th scope="col">code</th>
                <th scope="col">salt</th>
                <th scope="col">batch</th>
                <th scope="col">price</th>
              </tr>
            </thead>
            <tbody>
              {brand.map((brand) => (
                <tr key={brand.name}>
                  <td>{brand.name}</td>
                  <td>{brand.code}</td>
                  <td>{brand.salt}</td>
                  <td>{brand.batch}</td>
                  <td>{brand.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
