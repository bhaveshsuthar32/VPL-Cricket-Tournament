// // import React from 'react';
// import Sidebar from "../../components/Sidebar";
// import Header from '../../components/Header';

// export default function Dashboard() {
//   return (
//     <>
//       <div className="">
//         <Sidebar />
//         <Header />
// <div>
// Dashboard hello user
// </div>
//       </div>
//     </>
//   );
// }



import { useEffect, useState } from "react";
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
import { LineChart, Line } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Group,
  Users,
  ShoppingCart,
  Activity,
} from "lucide-react";
import Sidebar from "../../components/Header";
import Header from "../../components/Sidebar";
import { getAdvertiser, getFoodSP, getTeam, getUser } from "../../../../api";

const data = [
  { name: "Jan", sales: 4000, profit: 2400 },
  { name: "Feb", sales: 3000, profit: 1398 },
  { name: "Mar", sales: 2000, profit: 9800 },
  { name: "Apr", sales: 2780, profit: 3908 },
  { name: "May", sales: 1890, profit: 4800 },
  { name: "Jun", sales: 2390, profit: 3800 },
];

const pieData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StatCard = ({ title, value, change, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <Icon className="text-blue-500" size={24} />
    </div>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
    <p
      className={`flex items-center ${
        change >= 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      {change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      <span className="ml-1">{Math.abs(change)}%</span>
    </p>
  </div>
);

export default function Dashboard() {
  const [advertisers, setAdvertisers] = useState([]);
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  const getFormData = async () => {
    try {
      const newAdvertiser = await getAdvertiser();
      const newUser = await getUser();
      const newTeam = await getTeam();
      const newSponsor = await getFoodSP();

      setAdvertisers(newAdvertiser.data);
      setUsers(newUser.data);
      setTeams(newTeam.data);
      setSponsors(newSponsor.data);
    } catch (error) {
      console.log("Error :- ", error);
    }
  };

  useEffect(() => {
    getFormData();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* <div className="flex h-screen bg-gray-100"> */}
      <Sidebar />
      <Header />
      <div className="flex-1 flex flex-col overflow-hidden sm:ml-64">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Dashboard
            </h1>

            <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Users"
                value={users.length}
                change={12.5}
                icon={Users}
              />
              <StatCard
                title="Teams"
                value={teams.length}
                change={-2.3}
                icon={Group}
              />
              <StatCard
                title="Sponsors"
                value={sponsors.length}
                change={5.7}
                icon={ShoppingCart}
              />
              <StatCard
                title="Advertisers"
                value={advertisers.length}
                change={0.8}
                icon={Activity}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                    <Bar dataKey="profit" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Monthly Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                    <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  Product Distribution
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap">$123.45</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#12346</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Jane Smith
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">$67.89</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
