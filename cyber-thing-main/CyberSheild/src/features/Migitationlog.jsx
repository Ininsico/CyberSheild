import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MitigationLog = () => {
 
  const initialLogs = [
    { id: 1, time: '14:23:01', attackType: 'DDoS', sourceIP: '192.168.1.444', actionTaken: 'IP Blocked', status: 'Success' },
    { id: 2, time: '14:27:45', attackType: 'Port Scan', sourceIP: '10.0.0.12', actionTaken: 'Alert Sent to Admin', status: 'Retried' },
    { id: 3, time: '14:32:10', attackType: 'Brute Force', sourceIP: '172.16.0.23', actionTaken: 'Firewall Rule Added', status: 'Failed' },
    { id: 4, time: '14:35:22', attackType: 'Bot', sourceIP: '203.0.113.8', actionTaken: 'IP Blocked', status: 'Success' },
  ];

  const [logs, setLogs] = useState(initialLogs);
  const [nodes, setNodes] = useState(8);
  const [isScaling, setIsScaling] = useState(false);
  const [isAddingNode, setIsAddingNode] = useState(false);
  const [systemLoad, setSystemLoad] = useState(42);

  const attackTypes = ['DDoS', 'Port Scan', 'Brute Force', 'SQL Injection', 'XSS', 'Bot', 'Phishing', 'Malware'];

  const actions = ['IP Blocked', 'Firewall Rule Added', 'Alert Sent to Admin', 'Traffic Throttled', 'User Notified'];

  const statuses = ['Success', 'Failed', 'Retried', 'Pending'];

  const generateRandomIP = () => {
    return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  };

  const addRandomLog = () => {
    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      attackType: attackTypes[Math.floor(Math.random() * attackTypes.length)],
      sourceIP: generateRandomIP(),
      actionTaken: actions[Math.floor(Math.random() * actions.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)]
    };

    setLogs(prev => [newLog, ...prev.slice(0, 9)]);
  };

  const handleScaleUp = () => {
    if (isScaling) return;

    setIsScaling(true);
    setSystemLoad(prev => Math.max(0, prev - 15));

    setTimeout(() => {
      setIsScaling(false);
    }, 1000);
  };

  const handleAddNode = () => {
    if (isAddingNode) return;

    setIsAddingNode(true);
    setNodes(prev => prev + 1);
    setSystemLoad(prev => Math.max(0, prev - 8));

    setTimeout(() => {
      setIsAddingNode(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        addRandomLog();
      }

      setSystemLoad(prev => {
        const change = Math.floor(Math.random() * 10) - 3; 
        return Math.min(100, Math.max(0, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
     
      <header className="bg-gray-800 border-b border-cyan-400/20 rounded-t-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-lg">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cyber-Shield</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/scalabledesign" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">Scalable Design</Link>
              </li>
              <li>
                <Link to="/threathistory" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">Threat History</Link>
              </li>
              <li>
                <Link to="/mitigationactions" className="px-3 py-2 rounded-md bg-gray-700 text-cyan-400 font-medium">Mitigation Log</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

     
      <main className="container mx-auto mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
    
          <div className="flex-1">
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">Mitigation Log</h2>
                <div className="flex space-x-2">
                  <button
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors flex items-center"
                    onClick={addRandomLog}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Simulate Attack
                  </button>
                  <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors">
                    Download CSV
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors"
                    onClick={() => setLogs([])}
                  >
                    Clear Logs
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Attack Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Source IP</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action Taken</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {logs.map((log) => (
                      <tr
                        key={log.id}
                        className={`hover:bg-gray-750 transition-colors ${log.status === 'Success' ? 'border-l-4 border-l-green-500' :
                            log.status === 'Failed' ? 'border-l-4 border-l-red-500' :
                              log.status === 'Retried' ? 'border-l-4 border-l-yellow-500' : ''
                          }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{log.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{log.attackType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-400 font-mono">{log.sourceIP}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{log.actionTaken}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${log.status === 'Success' ? 'bg-green-900 text-green-200' :
                              log.status === 'Failed' ? 'bg-red-900 text-red-200' :
                                log.status === 'Retried' ? 'bg-yellow-900 text-yellow-200' :
                                  'bg-gray-700 text-gray-200'
                            }`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">System Controls</h3>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Nodes Active</span>
                  <span className="text-white font-medium">{nodes}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="h-2 rounded-full bg-cyan-500"
                    style={{ width: `${(nodes / 12) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">System Load</span>
                  <span className="text-white font-medium">{systemLoad}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${systemLoad > 80 ? 'bg-red-500' :
                        systemLoad > 60 ? 'bg-yellow-500' :
                          'bg-green-500'
                      }`}
                    style={{ width: `${systemLoad}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleScaleUp}
                  disabled={isScaling}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all ${isScaling ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'
                    } ${isScaling ? 'animate-pulse' : ''}`}
                >
                  {isScaling ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scaling...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                      </svg>
                      Scale Up Resources
                    </>
                  )}
                </button>

                <button
                  onClick={handleAddNode}
                  disabled={isAddingNode}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all ${isAddingNode ? 'bg-green-800' : 'bg-green-600 hover:bg-green-700'
                    } ${isAddingNode ? 'animate-pulse' : ''}`}
                >
                  {isAddingNode ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      Add New Node
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Changes</h4>
                <div className="space-y-2">
                  {logs.slice(0, 3).map(log => (
                    <div key={log.id} className="text-xs text-gray-400 flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full mt-1 mr-2 ${log.status === 'Success' ? 'bg-green-500' :
                          log.status === 'Failed' ? 'bg-red-500' :
                            'bg-yellow-500'
                        }`}></span>
                      <div>
                        <div>{log.attackType} from {log.sourceIP}</div>
                        <div className="text-gray-500">{log.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MitigationLog;