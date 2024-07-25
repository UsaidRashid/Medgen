import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "./Sidebar";
import axios from "axios";

export default function GenericMed() {
   const gen = [
        {
            "name": "Generic Paracetamol",
            "code": "GPRC123",
            "salt": "Paracetamol",
            "batch": "GBATCH001",
            "price": 10.0
        },
        {
            "name": "Generic Ibuprofen",
            "code": "GIBU456",
            "salt": "Ibuprofen",
            "batch": "GBATCH002",
            "price": 18.0
        },
        {
            "name": "Generic Amoxicillin",
            "code": "GAMX789",
            "salt": "Amoxicillin",
            "batch": "GBATCH003",
            "price": 25.0
        },
        {
            "name": "Generic Cetirizine",
            "code": "GCET101",
            "salt": "Cetirizine",
            "batch": "GBATCH004",
            "price": 8.0
        },
        {
            "name": "Generic Aspirin",
            "code": "GASP202",
            "salt": "Aspirin",
            "batch": "GBATCH005",
            "price": 12.0
        }
    ]
    

  return (
    <>
      <div className="d-flex flex-row bg-white  ">
        <div>
          <Sidebar />
        </div>
        <div className="w-100">
        <h3 className="ms-2 text-decoration-underline">Generic Medicines</h3>
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
              {gen.map((brand) => (
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
