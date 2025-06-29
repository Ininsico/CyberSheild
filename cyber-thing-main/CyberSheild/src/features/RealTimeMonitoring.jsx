import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RealTimeMonitoring = () => {
  const [networkTraffic, setNetworkTraffic] = useState([]);
  const [alerts, setAlerts] = useState([
    { type: "Port Scan", time: "1:25 PM", severity: "high" },
    { type: "Brute Force", time: "1:12 PM", severity: "medium" },
    { type: "Botnet", time: "12:45 PM", severity: "critical" }
  ]);
  const [threatLevel, setThreatLevel] = useState("medium");
  const [ongoingAttacks, setOngoingAttacks] = useState(["DDoS"]);
  const [packetCount, setPacketCount] = useState(2537);
  const chartRef = useRef(null);

  const generateTrafficData = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const baseValue = Math.floor(Math.random() * 50) + 50;
      const spike = Math.random() > 0.9 ? Math.floor(Math.random() * 200) + 100 : 0;
      return baseValue + spike;
    });
  };

  useEffect(() => {
    const trafficCtx = document.getElementById('trafficChart');
    
    if (trafficCtx && !chartRef.current) {
      chartRef.current = new Chart(trafficCtx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 12 }, (_, i) => `${i * 5}`),
          datasets: [{
            label: 'Packets/sec',
            data: generateTrafficData(),
            borderColor: 'rgba(19, 254, 93, 0.8)',
            backgroundColor: 'rgba(19, 254, 93, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            legend: { display: false },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(10, 10, 26, 0.9)',
              titleColor: '#0ff0fc',
              bodyColor: '#ffffff',
              borderColor: '#bc13fe',
              borderWidth: 1,
              padding: 10
            }
          },
          scales: {
            y: { 
              beginAtZero: true, 
              grid: { 
                color: 'rgba(255, 255, 255, 0.1)',
                drawBorder: false
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)'
              }
            },
            x: { 
              grid: { 
                color: 'rgba(255, 255, 255, 0.1)',
                drawBorder: false
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)'
              }
            }
          }
        }
      });
    }

    const interval = setInterval(() => {
      if (chartRef.current) {
        const newData = generateTrafficData();
        chartRef.current.data.datasets[0].data = newData;
        chartRef.current.update();
        
        const newCount = newData.reduce((a, b) => a + b, 0);
        setPacketCount(newCount);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  const simulateAttack = (type) => {
    const severities = ["low", "medium", "high", "critical"];
    const severity = severities[Math.floor(Math.random() * severities.length)];
    
    const newAlert = {
      type: type,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      severity: severity
    };
    
    setAlerts([newAlert, ...alerts.slice(0, 9)]);
    
    if (severity === "critical") setThreatLevel("critical");
    else if (severity === "high" && threatLevel !== "critical") setThreatLevel("high");
    
    if (!ongoingAttacks.includes(type)) {
      setOngoingAttacks([...ongoingAttacks, type]);
    }
    
    if (type === "DDoS") {
      setTimeout(() => {
        setOngoingAttacks(ongoingAttacks.filter(a => a !== "DDoS"));
      }, 30000);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical": return "bg-red-600 border-red-400";
      case "high": return "bg-orange-500 border-orange-400";
      case "medium": return "bg-yellow-500 border-yellow-400";
      case "low": return "bg-green-500 border-green-400";
      default: return "bg-purple-500 border-purple-400";
    }
  };

  const getThreatLevelColor = () => {
    switch (threatLevel) {
      case "critical": return "text-red-400";
      case "high": return "text-orange-400";
      case "medium": return "text-yellow-400";
      case "low": return "text-green-400";
      default: return "text-purple-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 shadow-lg shadow-purple-500/10 px-4 py-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <svg className="h-10 w-10 text-cyan-400 filter drop-shadow-[0_0_5px_rgba(11,227,242,0.5)]" 
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
          </svg>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Cyber-Shield
          </h1>
        </div>
        
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            <li>
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/real-time-monitoring" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300">
                Real-time Monitoring
              </Link>
            </li>
            <li>
              <Link to="/threat-history" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Threat History
              </Link>
            </li>
            <li>
              <Link to="/mitigation-log" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Mitigation Log
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
     
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Real-time Monitoring
          </h1>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => simulateAttack('DDoS')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-md hover:from-cyan-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              Simulate DDoS
            </button>
            <button 
              onClick={() => simulateAttack('Port Scan')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-md hover:from-cyan-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              Simulate Port Scan
            </button>
            <button 
              onClick={() => simulateAttack('Malware')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-md hover:from-cyan-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              Simulate Malware
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Network Traffic</h2>
            <div className="bg-gray-900 rounded-lg p-4 h-80">
              <canvas id="trafficChart" className="w-full h-full"></canvas>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">THREAT LEVEL</h3>
              <div className={`text-3xl font-bold ${getThreatLevelColor()} mb-1`}>
                {threatLevel.charAt(0).toUpperCase() + threatLevel.slice(1)}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-3">
                <div 
                  className={`h-2.5 rounded-full ${
                    threatLevel === "critical" ? "bg-red-500" :
                    threatLevel === "high" ? "bg-orange-500" :
                    threatLevel === "medium" ? "bg-yellow-500" : "bg-green-500"
                  }`}
                  style={{
                    width: `${ 
                      threatLevel === "critical" ? "100%" :
                      threatLevel === "high" ? "75%" :
                      threatLevel === "medium" ? "50%" : "25%"
                    }`
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 text-center">ONGOING ATTACKS</h3>
              <div className="space-y-2">
                {ongoingAttacks.length > 0 ? (
                  ongoingAttacks.map((attack, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-900/50 px-4 py-2 rounded-md">
                      <span className="font-medium">{attack}</span>
                      <span className="text-red-400 text-sm font-mono">Active</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-400">No active attacks</div>
                )}
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">NETWORK PACKETS</h3>
              <div className="text-3xl font-bold text-white mb-1">
                {packetCount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">per second</div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-800 rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Alert Notifications</h2>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-4 rounded-lg bg-gray-900 border-l-4 ${
                    alert.severity === "critical" ? "border-red-500" :
                    alert.severity === "high" ? "border-orange-500" :
                    alert.severity === "medium" ? "border-yellow-500" : "border-green-500"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      alert.severity === "critical" ? "bg-red-500 animate-pulse" :
                      alert.severity === "high" ? "bg-orange-500" :
                      alert.severity === "medium" ? "bg-yellow-500" : "bg-green-500"
                    }`}></div>
                    <div>
                      <div className="font-bold">{alert.type} detected</div>
                      <div className="text-sm text-gray-400">{alert.time}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.severity === "critical" ? "bg-red-900/50 text-red-300" :
                    alert.severity === "high" ? "bg-orange-900/50 text-orange-300" :
                    alert.severity === "medium" ? "bg-yellow-900/50 text-yellow-300" : "bg-green-900/50 text-green-300"
                  }`}>
                    {alert.severity.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RealTimeMonitoring;