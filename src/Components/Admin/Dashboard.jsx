import React from "react";
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
import '../../CSS/admin.css';

export default function Dashboard() {
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

  return (
    <div className="d-flex flex-row">
      <div>
                      <Sidebar/>
      </div>
      <div>
      <main className="main-container">
      <div className="main-cards">
        <div
          class="btn btn-outline-info shadow-lg p-3 mb-5  rounded card"
        >
          <div className="card-inner">
            <h3 className="text-black">generic medicines</h3>
            <BsFillArchiveFill className="card_icon text-black" />
          </div>
          <h1 className="text-black">300</h1>
        </div>
        <div
          class="btn btn-outline-info shadow-lg p-3 mb-5  rounded card"
        >
          <div className="card-inner">
            <h3 className="text-black">Branded medicines</h3>
            <BsFillArchiveFill className="card_icon text-black" />
          </div>
          <h1 className="text-black ">12</h1>
        </div>
        <div
          class="btn btn-outline-info shadow-lg p-3 mb-5  rounded card"
        >
          <div className="card-inner">
            <h3 className="text-black">Requests</h3>
            <BsPeopleFill className="card_icon text-black"  />
          </div>
          <h1 className="text-black">33</h1>
        </div>
        <div
          class="btn btn-outline-info shadow-lg p-3 mb-5  rounded card"
        >
          <div className="card-inner">
            <h3 className="text-black">Stores</h3>
            <BsFillBellFill className="card_icon text-black" />
          </div>
          <h1 className="text-black">42</h1>
        </div>
      </div>

      <div className="charts">
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
      </div>
    </main>
      </div>
    </div>
    
  );
}
