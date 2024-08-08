import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BsFillArchiveFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "./Sidebar";
import "../../CSS/admin.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const data = [
    {
      name: "med A",
      month1: 4000,
      month2: 2400,
      amt: 2400,
    },
    {
      name: "med B",
      month1: 3000,
      month2: 1398,
      amt: 2210,
    },
    {
      name: "med C",
      month1: 2000,
      month2: 9800,
      amt: 2290,
    },
    {
      name: "med D",
      month1: 2780,
      month2: 3908,
      amt: 2000,
    },
    {
      name: "med E",
      month1: 1890,
      month2: 4800,
      amt: 2181,
    },
    {
      name: "med F",
      month1: 2390,
      month2: 3800,
      amt: 2500,
    },
    {
      name: "med G",
      month1: 3490,
      month2: 4300,
      amt: 2100,
    },
  ];

  const [gencnt, setGencnt] = useState(0);
  const [brandcnt, setBrandcnt] = useState(0);
  const [reqcnt, setReqcnt] = useState(0);
  const [storecnt, setStorecnt] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/admin/fetch-dashboard"
        );
        const { genCnt, brandCnt, reqCnt, storeCnt } = response.data;
        setGencnt(genCnt);
        setBrandcnt(brandCnt);
        setReqcnt(reqCnt);
        setStorecnt(storeCnt);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  });

  const openRequests = (e) => {
    navigate("/admin/requests");
  };

  const openStores = (e) => {
    navigate("/admin/stores");
  };

  const openBrandMedicines = (e) => {
    navigate("/admin/brand-medicines");
  };

  const openGenericMedicines = (e) => {
    navigate("/admin/generic-medicines");
  };

  return (
    <div className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div>
        <main className="main-container">
          <div className="main-cards">
            <div
              className="btn btn-outline-info p-3 rounded card "
              onClick={openGenericMedicines}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="text-black">Generic Medicines</h3>
                <BsFillArchiveFill className="card_icon text-black" />
                <h1 className="text-black">{gencnt}</h1>
              </div>
            </div>
            <div
              className="btn btn-outline-info p-3 rounded card"
              onClick={openBrandMedicines}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="text-black">Brand Medicines</h3>
                <BsFillArchiveFill className="card_icon text-black" />
                <h1 className="text-black">{brandcnt}</h1>
              </div>
            </div>
            <div
              className="btn btn-outline-info p-3 rounded card"
              onClick={openRequests}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="text-black">Requests</h3>
                <BsPeopleFill className="card_icon text-black" />
                <h1 className="text-black">{reqcnt}</h1>
              </div>
            </div>
            <div
              className="btn btn-outline-info p-3 rounded card"
              onClick={openStores}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="text-black">Stores</h3>
                <BsFillBellFill className="card_icon text-black" />
                <h1 className="text-black">{storecnt}</h1>
              </div>
            </div>
          </div>

          {/* <div className="charts" style={{ marginLeft: "10rem" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="month1" fill="#8884d8" />
                <Bar dataKey="month2" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div> */}
        </main>
      </div>
    </div>
  );
}
