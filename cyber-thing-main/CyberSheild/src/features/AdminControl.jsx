import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminControl = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User", email: "admin@example.com", role: "Administrator", lastLogin: "2023-06-15 14:30" },
    { id: 2, name: "Security Analyst", email: "analyst@example.com", role: "Analyst", lastLogin: "2023-06-15 10:15" },
    { id: 3, name: "View Only", email: "viewer@example.com", role: "Viewer", lastLogin: "2023-06-14 09:45" }
  ]);

  const [alertThreshold, setAlertThreshold] = useState(5);
  const [autoBlockIPs, setAutoBlockIPs] = useState(true);
  const [notificationMethod, setNotificationMethod] = useState("Email");
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Viewer" });

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const newId = Math.max(...users.map(u => u.id)) + 1;
      setUsers([...users, {
        ...newUser,
        id: newId,
        lastLogin: new Date().toISOString().split('T')[0] + " " + new Date().toLocaleTimeString().slice(0, 5)
      }]);
      setNewUser({ name: "", email: "", role: "Viewer" });
      setIsAddingUser(false);
    }
  };

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
                <Link to="/admincontrol" className="text-cyan-400 font-semibold">
                  Admin Control
                </Link>
              </li>
              <li>
                <Link to="/threathistory" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">Admin Control Panel</h1>
            <p className="text-purple-400">System administration and configuration</p>
          </div>
          <button 
            onClick={() => setIsAddingUser(true)}
            className="bg-gradient-to-r from-purple-500 to-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
          >
            Add New User
          </button>
        </div>

        {/* Add User Modal */}
        {isAddingUser && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 border border-cyan-400 rounded-lg p-6 w-full max-w-md animate-fadeIn">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Add New User</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-cyan-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    className="w-full bg-gray-700 border border-purple-500 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="w-full bg-gray-700 border border-purple-500 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 mb-2">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    className="w-full bg-gray-700 border border-purple-500 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="Administrator">Administrator</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Viewer">Viewer</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsAddingUser(false)}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddUser}
                  className="px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded-md hover:bg-cyan-300 transition-colors"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Management */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg border border-purple-500 shadow-lg shadow-purple-500/10 overflow-hidden">
            <div className="p-4 border-b border-purple-500">
              <h2 className="text-xl font-bold text-green-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                User Management
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-cyan-400">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Role</th>
                    <th className="p-4 text-left">Last Login</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                      <td className="p-4">{user.name}</td>
                      <td className="p-4 text-purple-300">{user.email}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          user.role === "Administrator" ? "bg-purple-500 text-white" :
                          user.role === "Analyst" ? "bg-cyan-500 text-gray-900" :
                          "bg-gray-600 text-white"
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400">{user.lastLogin}</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-1 text-red-400 hover:text-red-300 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Configuration */}
          <div className="bg-gray-800 rounded-lg border border-purple-500 shadow-lg shadow-purple-500/10 p-6">
            <h2 className="text-xl font-bold text-green-400 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              System Configuration
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-cyan-400 mb-2">Alert Threshold</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={alertThreshold}
                    onChange={(e) => setAlertThreshold(e.target.value)}
                    className="w-full accent-purple-500"
                  />
                  <span className="text-purple-400 font-bold w-8 text-center">{alertThreshold}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-cyan-400">Auto-Block IPs</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoBlockIPs}
                    onChange={() => setAutoBlockIPs(!autoBlockIPs)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div>
                <label className="block text-cyan-400 mb-2">Notification Method</label>
                <select
                  value={notificationMethod}
                  onChange={(e) => setNotificationMethod(e.target.value)}
                  className="w-full bg-gray-700 border border-purple-500 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="Email">Email</option>
                  <option value="SMS">SMS</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300">
                Save Configuration
              </button>
            </div>
          </div>
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AdminControl;