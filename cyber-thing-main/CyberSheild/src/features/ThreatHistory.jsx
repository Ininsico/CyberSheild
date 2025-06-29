import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThreatHistory = () => {
  const [filter, setFilter] = useState('All Types');
  const [search, setSearch] = useState('');

  const threats = [
    { time: "14:21 PM", type: "DDoS", status: "Mitigated" },
    { time: "14:36 AM", type: "Port Scan", status: "Mitigated" },
    { time: "14:36 AM", type: "Port Scan", status: "Under Investigation" },
    { time: "15:10 AM", type: "Brute Force", status: "Mitigated" },
    { time: "15:40 AM", type: "Port Scan", status: "Mitigated" },
    { time: "15:40 AM", type: "Brute Force", status: "Under Investigation" },
    { time: "13:37 PM", type: "Brute Force", status: "Mitigated" },
    { time: "13:37 PM", type: "Brute Force", status: "Mitigated" }
  ];

  const filteredThreats = threats.filter(threat => {
    if (filter !== 'All Types' && threat.type !== filter) return false;
    if (search && !threat.type.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="bg-black bg-opacity-80 border-b border-purple-500 shadow-lg shadow-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-900">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Cyber-Shield
            </h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/realtimemonitoring" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Real-time Monitoring
                </Link>
              </li>
              <li>
                <Link to="/threathistory" className="text-cyan-400 font-semibold">
                  Threat History
                </Link>
              </li>
              <li>
                <Link to="/mitigationactions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Mitigation Log
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">THREAT HISTORY</h1>
          <p className="text-purple-400 mb-6">Semester Project - Real-Time Cyber Attack Prediction System</p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="appearance-none bg-gray-800 border border-purple-500 rounded-md py-2 pl-4 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                >
                  <option value="All Types">All Types</option>
                  <option value="DDoS">DDoS</option>
                  <option value="Port Scan">Port Scan</option>
                  <option value="Brute Force">Brute Force</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-800 border border-purple-500 rounded-md py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Table */}
        <div className="bg-gray-800 rounded-lg border border-purple-500 overflow-hidden shadow-lg shadow-purple-500/10">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-900 px-6 py-4 border-b border-purple-500">
            <div className="col-span-3 font-bold text-cyan-400">Time</div>
            <div className="col-span-6 font-bold text-cyan-400">Type</div>
            <div className="col-span-3 font-bold text-cyan-400">Status</div>
          </div>

          {/* Table Rows */}
          {filteredThreats.map((threat, index) => (
            <div
              key={index}
              className="grid grid-cols-12 px-6 py-4 border-b border-gray-700 hover:bg-gray-700 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <div className="col-span-3 text-gray-300">{threat.time}</div>
              <div className="col-span-6 font-medium">{threat.type}</div>
              <div className={`col-span-3 ${threat.status === "Mitigated" ? "text-green-400" :
                  threat.status === "Under Investigation" ? "text-yellow-400" :
                    "text-white"
                }`}>
                <span className="inline-flex items-center">
                  {threat.status}
                  {threat.status === "Mitigated" && (
                    <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  )}
                  {threat.status === "Under Investigation" && (
                    <span className="ml-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  )}
                </span>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredThreats.length === 0 && (
            <div className="p-6 text-center text-gray-400">
              No threats found matching your criteria
            </div>
          )}
        </div>
      </main>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(5%, 5%) rotate(5deg);
          }
          50% {
            transform: translate(0, 10%) rotate(0deg);
          }
          75% {
            transform: translate(-5%, 5%) rotate(-5deg);
          }
        }
        
        body {
          background-color: #111827;
        }
      `}</style>
    </div>
  );
};

export default ThreatHistory;