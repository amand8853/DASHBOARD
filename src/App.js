import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Transactions from './components/Transactions';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        {<Header toggleSidebar={toggleSidebar} />}
        <div className="main">
          {sidebarOpen && <Sidebar />}
          <div className={`content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
