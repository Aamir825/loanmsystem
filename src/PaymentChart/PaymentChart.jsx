import React from 'react'
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const PaymentChart = () => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
        { month: 'January', income: 4000, expenses: 2400 },
        { month: 'February', income: 3000, expenses: 1398 },
        { month: 'March', income: 2000, expenses: 9800 },
        { month: 'April', income: 2780, expenses: 3908 },
        { month: 'May', income: 1890, expenses: 4800 },
        { month: 'June', income: 2390, expenses: 3800 },
        { month: 'July', income: 3490, expenses: 4300 },
    ];
  return (
    <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="income" fill="#8884d8" label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
                
                <Line type="monotone" dataKey="expenses" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
  )
}

export default PaymentChart