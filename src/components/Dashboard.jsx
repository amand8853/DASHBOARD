import React, { useState } from 'react';
import '../App.css';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    YAxis,
    XAxis,
    CartesianGrid
} from 'recharts';


import { FaSearch, FaBell, FaRegCopy, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import HeaderInner from './HeaderInner';

const pieData = [
    { name: 'Electronics', value: 33 },
    { name: 'Sporting Goods', value: 29.9 },
    { name: 'Health and Careness', value: 22.2 },
    { name: 'Fashion', value: 16.6 },
];
const data = [
    { name: "Jan", value: 80000 },
    { name: "Feb", value: 95000 },
    { name: "Mar", value: 70000 },
    { name: "Apr", value: 105000 },
    { name: "May", value: 85000 },
    { name: "Jun", value: 115000 },
    { name: "Jul", value: 120000 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        console.log("object")

    };
    return (
        <>
            <HeaderInner />
            <div className="container">
                <div className="left-column">

                    <div className="stats-row">
                        <div className="stat-card customers">
                            <div className="stat-top">
                                <div className="icon-bg">
                                    <span className="emoji" style={{ fontSize: '24px' }}>👥</span>

                                </div>
                                <div className="title-section">
                                    <p>Total Customers</p>
                                    <span className="dots">⋮</span>
                                </div>
                            </div>
                            <h2 className="stat-value">2,000</h2>
                            <div className="stat-bottom positive">
                                <span className="amount">+25000</span>
                            </div>
                        </div>

                        <div className="stat-card income">
                            <div className="stat-top">
                                <div className="icon-bg income-icon">
                                    <span className="emoji" style={{ fontWeight: 'bold', fontSize: '24px' }}>↙</span>

                                </div>
                                <div className="title-section">
                                    <p>Total Income</p>
                                    <span className="dots">⋮</span>
                                </div>
                            </div>
                            <h2 className="stat-value">2,000</h2>
                            <div className="stat-bottom positive">
                                <span className="amount">+$25000</span>
                            </div>
                        </div>

                        <div className="stat-card expense">
                            <div className="stat-top">
                                <div className="icon-bg expense-icon">
                                    <span className="emoji" style={{ fontWeight: 'bold', fontSize: '24px' }}>↗</span>
                                </div>
                                <div className="title-section">
                                    <p>Total Expense</p>
                                    <span className="dots">⋮</span>
                                </div>
                            </div>
                            <h2 className="stat-value">2,000</h2>
                            <div className="stat-bottom negative">
                                <span className="amount">-$25000</span>
                            </div>
                        </div>
                    </div>



                    {/* Line Chart Section */}
                    <div className="chart-section">
                        <div className="chart-header">
                            <h3>Total Collection</h3>
                            <button className="dropdown-btn">Monthly ▼</button>
                        </div>

                        <div className="balance-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h2 style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>$120,000</h2>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: "#e0f5e9", padding: "3px 8px", borderRadius: "10px" }}>
                                <span style={{ color: "#2ecc71", fontWeight: "bold", fontSize: "14px" }}>32%</span>
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        color: "#2ecc71",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        marginLeft: "5px",
                                        cursor: "pointer"
                                    }}
                                >
                                    ▼
                                </button>
                            </div>
                        </div>



                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data}>
                                <defs>
                                    <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#9b59b6" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#9b59b6" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" hide />
                                <YAxis hide />
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8e44ad"
                                    strokeWidth={3}
                                    dot={{ stroke: '#8e44ad', strokeWidth: 2, r: 5, fill: '#fff' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                        <p style={{ fontSize: "14px" }}>
                            Your total balance of this month compared to the last month from all of your contacts.
                        </p>
                    </div>

                    {/* Transaction Sections */}
                    <div className="transaction-section">
                        <div className="frequent">
                            <h4>Frequent Transactions</h4>
                            <p>Your most used contacts</p>
                            <div className="frequent-avatars">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
                                <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="User 2" />
                                <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="User 3" />
                                <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="User 4" />
                            </div>
                            <button className="report-btn">Get Detailed Report</button>
                        </div>


                        <div className="transaction-table">
                            <div className="table-header">
                                <h4>Transaction</h4>
                                <div>
                                    <button className="btn">Print</button>
                                    <button className="btn">Share</button>
                                </div>
                            </div>
                            <div className="table-header">
                                <div className="table-cell">
                                    <strong>TransID</strong>
                                    <span>Reference</span>
                                </div>
                                <div className="table-cell">
                                    <strong>Bill Amt</strong>
                                    <span>Trans Amt</span>
                                </div>
                                <div className="table-cell">
                                    <strong>FullName</strong>
                                    <span>Bill Email</span>
                                </div>
                                <div className="table-cell">
                                    <strong>UPA</strong>
                                    <span>CCNo</span>
                                </div>
                                <div className="table-cell">
                                    <strong>MOP</strong>
                                    <span>Trans Status</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="right-column">

                    <div className="header-profile">
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="Profile"
                            className="header-avatar"
                        />
                        <div className="profile-text">
                            <h4>Kaylynn Calzoni</h4>
                            <p>Gold User</p>
                        </div>
                        <div className="profile-arrow">
                            <FaChevronDown />
                        </div>
                    </div>

                    <div className="box terminal">
                        <h4>Payment Terminal</h4>
                        <input type="text" placeholder="Amount to Pay" />
                        <button>➡</button>
                        <div className="notifications">
                            <p>🔔 Notifications - 0</p>
                            <p>📩 Unread Message : 0</p>
                            <p>📬 Read Message : 0</p>
                            <p>🔄 Total Transaction :</p>
                        </div>
                    </div>

                    <div className="box invoice">
                        <h4>Generate Invoice</h4>
                        <p>
                            Send your customers an invoice with a link to pay online and a pdf.
                            Accept card, bank transfers, upi and more.
                        </p>
                        <button className="generate-btn">🧾 Generate</button>
                    </div>

                    <div className="box sales">
                        <div className="sales-header">
                            <h4>Sales Volume</h4>
                            <select>
                                <option>Location</option>
                                <option>India</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={55}
                                    fill="#8884d8"

                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard
