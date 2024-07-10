import React from 'react'
import { BsFillArchiveFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
    const data = [
        {
          name: 'med A',
          month1: 4000,
          month2: 2400,
          amt: 2400,
        },
        {
          name: 'med B',
          month1: 3000,
          month2: 1398,
          amt: 2210,
        },
        {
          name: 'med C',
          month1: 2000,
          month2: 9800,
          amt: 2290,
        },
        {
          name: 'med D',
          month1: 2780,
          month2: 3908,
          amt: 2000,
        },
        {
          name: 'med E',
          month1: 1890,
          month2: 4800,
          amt: 2181,
        },
        {
          name: 'med F',
          month1: 2390,
          month2: 3800,
          amt: 2500,
        },
        {
          name: 'med G',
          month1: 3490,
          month2: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>generic medicines</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Branded medicines</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Requests</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Stores</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
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
  )
}
