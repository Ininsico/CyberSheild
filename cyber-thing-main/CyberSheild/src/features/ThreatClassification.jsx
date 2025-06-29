import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThreatClassification = () => {
  const [selectedThreat, setSelectedThreat] = useState(null);

  const threats = [
    {
      id: 1,
      name: "DDoS Attack",
      description: "Distributed Denial of Service attack flooding the network",
      severity: "High",
      detectionMethod: "Traffic pattern analysis",
      mitigation: "Rate limiting, IP blocking",
      examples: ["UDP flood", "SYN flood", "HTTP flood"]
    },
    {
      id: 2,
      name: "Port Scan",
      description: "Scanning network for open ports and services",
      severity: "Medium",
      detectionMethod: "Multiple connection attempts",
      mitigation: "Firewall rules, IP blocking",
      examples: ["TCP scan", "UDP scan", "Stealth scan"]
    },
    {
      id: 3,
      name: "Brute Force",
      description: "Attempting to gain access by trying many passwords",
      severity: "High",
      detectionMethod: "Multiple failed login attempts",
      mitigation: "Account lockout, CAPTCHA",
      examples: ["SSH brute force", "RDP attacks", "Web login attempts"]
    }
  ];

  return (
    <div className="cyber-page">
      <header className="cyber-header">
        <div className="logo-container">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ff0fc">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
          </svg>
          <h1 className="logo-text">Cyber-Shield</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/threat-classification" className="nav-link active">Threat Classification</Link></li>
            <li><Link to="/threat-history" className="nav-link">Threat History</Link></li>
            <li><Link to="/mitigation-log" className="nav-link">Mitigation Log</Link></li>
          </ul>
        </nav>
      </header>

      <main className="page-content">
        <div className="page-header">
          <h1>Threat Classification</h1>
        </div>

        <div className="classification-container">
          {/* Left panel - List of threats */}
          <div className="threats-list">
            <h2>Known Threat Types</h2>
            <div className="threat-items">
              {threats.map((threat) => (
                <div
                  key={threat.id}
                  className={`threat-item ${selectedThreat?.id === threat.id ? 'active' : ''}`}
                  onClick={() => setSelectedThreat(threat)}
                >
                  <div className="threat-name">{threat.name}</div>
                  <div className={`threat-severity ${threat.severity.toLowerCase()}`}>
                    {threat.severity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel - Threat details */}
          <div className="threat-details">
            {selectedThreat ? (
              <>
                <h2>{selectedThreat.name}</h2>

                <div className="detail-section">
                  <h3>Description</h3>
                  <p>{selectedThreat.description}</p>
                </div>

                <div className="detail-section">
                  <h3>Detection Method</h3>
                  <p>{selectedThreat.detectionMethod}</p>
                </div>

                <div className="detail-section">
                  <h3>Recommended Mitigation</h3>
                  <p>{selectedThreat.mitigation}</p>
                </div>

                <div className="detail-section">
                  <h3>Examples</h3>
                  <ul className="examples-list">
                    {selectedThreat.examples.map((ex, i) => (
                      <li key={i}>{ex}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="select-threat-prompt">
                Select a threat type to view details
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Embedded Styles */}
      <style jsx>{`
        .cyber-page {
          background-color: #0a0a1a;
          color: #fff;
          min-height: 100vh;
          font-family: 'Roboto', sans-serif;
        }

        .cyber-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 5%;
          background-color: #050510;
          box-shadow: 0 0 15px #bc13fe;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo {
          height: 50px;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #0ff0fc, #bc13fe);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #0ff0fc;
          text-shadow: 0 0 10px #0ff0fc;
        }

        .page-content {
          padding: 30px 5%;
        }

        .page-header h1 {
          font-size: 2.5rem;
          color: #0ff0fc;
        }

        .classification-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 30px;
        }

        .threats-list,
        .threat-details {
          background-color: #12122a;
          border-radius: 10px;
          padding: 20px;
          border: 1px solid rgba(188, 19, 254, 0.2);
        }

        .threats-list h2,
        .threat-details h2 {
          color: #13fe5d;
          margin-top: 0;
        }

        .threat-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .threat-item {
          background-color: #050510;
          padding: 15px;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-left: 4px solid #0ff0fc;
        }

        .threat-item:hover {
          background-color: rgba(188, 19, 254, 0.1);
        }

        .threat-item.active {
          background-color: rgba(19, 254, 93, 0.1);
          border-left-color: #13fe5d;
        }

        .threat-name {
          font-weight: bold;
        }

        .threat-severity {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: capitalize;
        }

        .threat-severity.high {
          background-color: rgba(255, 0, 0, 0.2);
          color: #ff0000;
        }

        .threat-severity.medium {
          background-color: rgba(255, 204, 0, 0.2);
          color: #ffcc00;
        }

        .threat-severity.low {
          background-color: rgba(0, 255, 0, 0.2);
          color: #00ff00;
        }

        .detail-section {
          margin-bottom: 20px;
        }

        .detail-section h3 {
          color: #0ff0fc;
          margin-bottom: 8px;
        }

        .examples-list {
          padding-left: 20px;
        }

        .select-threat-prompt {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: rgba(255, 255, 255, 0.5);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default ThreatClassification;
