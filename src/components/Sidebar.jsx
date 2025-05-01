import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; // Importing FontAwesome CSS

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQGtFo8gKSzLDA/company-logo_200_200/company-logo_200_200/0/1738831295293/itio_innovex_logo?e=2147483647&v=beta&t=8LkuPyv7luIhdRFFYAQz8z37qb9_Lu-NjYbdcH2X3Rc"
                    alt="Itio Innovex Logo"
                    className="logo"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#000' }}>ITIO</span>
            </div>
            <ul>
                <li><Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link></li>
                <li><Link to="/transactions"><i className="fa fa-exchange"></i> Transactions</Link></li>
                <li><Link to="/settings"><i className="fa fa-cogs"></i> Settings</Link></li>
                <li><Link to="/profile"><i className="fa fa-user"></i> Profile</Link></li>
                <li><Link to="/invoice"><i className="fa fa-file-text"></i> Invoice</Link></li>
                <li><Link to="/payment-link"><i className="fa fa-link"></i> Payment Link</Link></li>
                <li><Link to="/payment-button"><i className="fa fa-credit-card"></i> Payment Button</Link></li>
                <li><Link to="/my-business"><i className="fa fa-briefcase"></i> My Business</Link></li>
                <li><Link to="/bank-account"><i className="fa fa-bank"></i> Bank Account</Link></li>
                <li><Link to="/user"><i className="fa fa-users"></i> User</Link></li>
                <li><Link to="/success-ratio"><i className="fa fa-line-chart"></i> Success Ratio</Link></li>
                <li><Link to="/developer-page"><i className="fa fa-code"></i> Developer Page</Link></li>
                <li><Link to="/support"><i className="fa fa-life-ring"></i> Support</Link></li>
                <li><Link to="/payout"><i className="fa fa-money"></i> Payout</Link></li>
            </ul>

        </div>
    );
};

export default Sidebar;
