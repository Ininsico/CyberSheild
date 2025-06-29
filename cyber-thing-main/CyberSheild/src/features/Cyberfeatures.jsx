import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import Footer from '../Homepage/Footer';
import Header from '../Homepage/Header';
const CyberFeatures = () => {
    Chart.register(...registerables);
    const [currentPage, setCurrentPage] = useState('home');
    const navigate = useNavigate();
    const [features] = useState([
        {
            id: 'real-time-monitoring',
            name: "Real-time Monitoring",
            description: "Continuously monitor network traffic to detect potential cyber threats as they occur.",
            details: "Our real-time monitoring system analyzes network packets, connections, and behavior patterns as they happen. Using advanced algorithms, we can detect anomalies that may indicate cyber attacks. The system provides live dashboards with traffic visualization and immediate alerts when suspicious activity is detected.",
            technologies: ["WebSockets", "Node.js", "Packet Analysis", "Machine Learning"],
            examples: [
                "Live traffic graphs showing packet volume",
                "Instant detection of port scanning activity",
                "Real-time alerting for DDoS attacks"
            ]
        },
        {
            id: 'admin-control',
            name: "Admin Control",
            description: "Provide administrators with tools to manage and oversee the system effectively.",
            details: "The admin control panel gives system administrators complete control over the security system. Features include user management, role-based access control, system configuration, and audit logging. Admins can customize detection thresholds, configure automated responses, and review system activity.",
            technologies: ["React", "Redux", "JWT Authentication", "RBAC"],
            examples: [
                "User management interface",
                "Role-based permission system",
                "System configuration dashboard"
            ]
        },
        {
            id: 'scalable-design',
            name: "Scalable Design",
            description: "Our architecture adapts to varying network sizes and traffic volumes with ease.",
            details: "The system is built with microservices architecture that allows horizontal scaling. You can deploy additional instances of detection engines during high traffic periods. The database uses sharding to distribute load, and our caching layer ensures performance remains consistent even under heavy attack.",
            technologies: ["Docker", "Kubernetes", "MongoDB Sharding", "Redis"],
            examples: [
                "Automatic scaling during DDoS attacks",
                "Load-balanced detection engines",
                "Distributed database architecture"
            ]
        },
        {
            id: 'threat-classification',
            name: "Threat Classification",
            description: "Categorize identified threats into types for precise and informed responses.",
            details: "Our machine learning models classify threats into categories like DDoS, Brute Force, Port Scan, etc. The system uses signature-based detection for known threats and behavioral analysis for zero-day attacks. Classification rules can be customized for your specific environment.",
            technologies: ["TensorFlow", "Pattern Matching", "Behavioral Analysis"],
            examples: [
                "DDoS vs. normal traffic classification",
                "Brute force attempt detection",
                "Port scan pattern recognition"
            ]
        },
        {
            id: 'alert-mechanism',
            name: "Alert Mechanism",
            description: "Generate timely alerts to promptly notify administrators of detected cyber attacks.",
            details: "The alert system supports multiple notification channels including email, SMS, Slack, and webhooks. Alerts are prioritized by severity (Critical, Warning, Info). You can configure escalation policies and quiet hours to reduce alert fatigue.",
            technologies: ["Webhooks", "SMTP", "Twilio API", "Slack API"],
            examples: [
                "Email alerts for critical threats",
                "SMS notifications for after-hours attacks",
                "Slack integration for team collaboration"
            ]
        },
        {
            id: 'mitigation-actions',
            name: "Mitigation Actions",
            description: "Execute response strategies to mitigate impact of identified threats.",
            details: "The system can automatically execute mitigation actions based on threat type and severity. Actions include IP blocking, rate limiting, firewall rule updates, and traffic rerouting. Manual override is always available, and all actions are logged for audit purposes.",
            technologies: ["iptables", "Cloudflare API", "AWS WAF", "Custom Scripts"],
            examples: [
                "Automatic IP blocking for brute force attacks",
                "Rate limiting during DDoS",
                "Firewall rule updates for port scans"
            ]
        }
    ]);

    const [threatHistory] = useState([
        { time: "14:23:01", type: "DDoS", ip: "192.168.1.44", action: "IP Blocked", status: "Success" },
        { time: "14:27:45", type: "Port Scan", ip: "10.0.0.12", action: "Alert Sent", status: "Retried" },
        { time: "14:32:10", type: "Brute Force", ip: "172.16.0.23", action: "Firewall Rule", status: "Failed" },
        { time: "14:35:22", type: "Bot", ip: "203.0.113.8", action: "IP Blocked", status: "Success" },
        { time: "15:10:22", type: "DDoS", ip: "192.168.1.105", action: "Rate Limited", status: "Success" },
        { time: "15:45:18", type: "Port Scan", ip: "10.0.0.56", action: "IP Blocked", status: "Success" },
        { time: "16:22:37", type: "Brute Force", ip: "172.16.0.42", action: "Account Locked", status: "Success" }
    ]);

    const [alerts] = useState([
        { type: "DDoS", message: "DDoS attack detected from multiple sources", time: "12:21 PM", severity: "critical" },
        { type: "Port Scan", message: "Port scan detected from 10.0.0.12", time: "12:15 PM", severity: "warning" },
        { type: "Botnet", message: "Botnet activity detected", time: "11:55 AM", severity: "warning" },
        { type: "Brute Force", message: "Multiple failed login attempts", time: "11:30 AM", severity: "warning" }
    ]);

    const [threatFilter, setThreatFilter] = useState('all');
    const [threatSearch, setThreatSearch] = useState('');

    useEffect(() => {
        if (currentPage === 'dashboard') {
            initializeDashboard();
        }
    }, [currentPage]);

    const showPage = (pageId) => {
        setCurrentPage(pageId);
        window.scrollTo(0, 0);
    };

    const scrollToFeatures = () => {
        const featuresSection = document.getElementById('features-section');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [selectedFeature, setSelectedFeature] = useState(null);

    const initializeDashboard = () => {
        // Initialize traffic chart
        const trafficCtx = document.getElementById('trafficChart');
        if (trafficCtx) {
            new Chart(trafficCtx, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
                    datasets: [{
                        label: 'Packets/sec',
                        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 1000) + 500),
                        borderColor: 'rgba(19, 254, 93, 0.8)',
                        backgroundColor: 'rgba(19, 254, 93, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#aaa'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#aaa'
                            }
                        }
                    }
                }
            });
        }

        // Initialize threats chart
        const threatsCtx = document.getElementById('threatsChart');
        if (threatsCtx) {
            new Chart(threatsCtx, {
                type: 'doughnut',
                data: {
                    labels: ['DDoS', 'Port Scan', 'Brute Force', 'Botnet'],
                    datasets: [{
                        data: [12, 19, 8, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(75, 192, 192, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                color: '#fff'
                            }
                        }
                    }
                }
            });
        }
    };

    const filteredThreatHistory = threatHistory.filter(threat => {
        if (threatFilter !== 'all' && !threat.type.toLowerCase().includes(threatFilter)) {
            return false;
        }

        if (threatSearch) {
            const searchTerm = threatSearch.toLowerCase();
            return (
                threat.type.toLowerCase().includes(searchTerm) ||
                threat.ip.toLowerCase().includes(searchTerm) ||
                threat.action.toLowerCase().includes(searchTerm)
            );
        }

        return true;
    });

    const selectedFeatureData = features.find(f => f.id === selectedFeature);

    const handleFeatureClick = (featureId) => {
        const routeMap = {
            'real-time-monitoring': '/realtimemonitoring',
            'admin-control': '/admincontrol',
            'scalable-design': '/scalabledesign',
            'threat-classification': '/threatclassification',
            'alert-mechanism': '/alertmechanism',
            'mitigation-actions': '/mitigationactions'
        };

        if (routeMap[featureId]) {
            navigate(routeMap[featureId]);
        }
    };

    return (
        <div className="cyber-app">
            {/* Header */}
            <Header />

            <div id="page-container">
                {currentPage === 'home' && (
                    <div id="home-page">

                        <section className="hero-section">
                            <div className="hero-content">
                                <h1 className="hero-title">Advanced Cyber Threat Monitoring</h1>
                                <p className="hero-subtitle">Protect your digital assets with our real-time threat detection system that identifies and mitigates DDoS attacks, brute force attempts, port scans, and other cyber threats before they impact your operations.</p>
                                <div className="hero-buttons">
                                    <button className="cta-button" onClick={() => showPage('dashboard')}>Live Dashboard</button>
                                    <button className="cta-button" onClick={scrollToFeatures}>Explore Features</button>
                                </div>
                            </div>
                        </section>

                        <section className="stats-section">
                            <div className="container">
                                <div className="stats-row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="stat-item">
                                            <div className="stat-number">24/7</div>
                                            <div className="stat-label">Monitoring</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="stat-item">
                                            <div className="stat-number">99.9%</div>
                                            <div className="stat-label">Detection Rate</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="stat-item">
                                            <div className="stat-number">50ms</div>
                                            <div className="stat-label">Response Time</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="stat-item">
                                            <div className="stat-number">1000+</div>
                                            <div className="stat-label">Threats Blocked</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="features-section" id="features-section">
                            <div className="section-title">
                                <h2>Powerful Security Features</h2>
                                <p>Our comprehensive suite of cybersecurity tools provides complete protection for your digital infrastructure</p>
                            </div>

                            <div className="features-container">
                                {features.map(feature => (
                                    <div key={feature.id} className="feature-card">
                                        <div className="feature-icon">{getIconForFeature(feature.id)}</div>
                                        <h3>{feature.name}</h3>
                                        <p>{feature.description}</p>
                                        <button
                                            className="learn-more-btn"
                                            onClick={() => handleFeatureClick(feature.id)}
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>

            <Footer />
            <style jsx global>{`
                :root {
                    --neon-blue: #0ff0fc;
                    --neon-purple: #bc13fe;
                    --neon-green: #13fe5d;
                    --dark-bg: #0a0a1a;
                    --darker-bg: #050510;
                    --card-bg: #12122a;
                }
                
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                body {
                    background-color: var(--dark-bg);
                    color: #fff;
                    font-family: 'Roboto', sans-serif;
                    overflow-x: hidden;
                }
                
                /* Header Styles */
                .cyber-header {
                    position: sticky;
                    top: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 5%;
                    background-color: var(--darker-bg);
                    box-shadow: 0 0 15px var(--neon-purple);
                    z-index: 1000;
                }
                
                .logo-container {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .logo {
                    height: 50px;
                    filter: drop-shadow(0 0 5px var(--neon-blue));
                }
                
                .logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    text-shadow: 0 0 10px rgba(188, 19, 254, 0.5);
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
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: var(--neon-blue);
                    text-shadow: 0 0 10px var(--neon-blue));
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -5px;
                    left: 0;
                    background-color: var(--neon-purple);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                /* Hero Section */
                .hero-section {
                    position: relative;
                    height: 90vh;
                    min-height: 600px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    background: linear-gradient(rgba(5, 5, 16, 0.9), rgba(10, 10, 26, 0.7)), 
                                url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center;
                    background-size: cover;
                    padding: 0 2rem;
                }
                
                .hero-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }
                
                .hero-title {
                    font-size: 4.5rem;
                    margin-bottom: 1.5rem;
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--neon-green));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    text-shadow: 0 0 20px rgba(188, 19, 254, 0.5);
                    font-weight: 800;
                    letter-spacing: 1px;
                    line-height: 1.2;
                }
                
                .hero-subtitle {
                    font-size: 1.5rem;
                    color: rgba(255, 255, 255, 0.9);
                    max-width: 800px;
                    margin: 0 auto 3rem;
                    line-height: 1.6;
                }
                
                .hero-buttons {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                .cta-button {
                    display: inline-block;
                    background: linear-gradient(90deg, var(--neon-purple), var(--neon-blue));
                    color: white;
                    padding: 15px 40px;
                    border-radius: 50px;
                    font-weight: bold;
                    text-decoration: none;
                    font-size: 1.1rem;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(188, 19, 254, 0.4);
                    text-transform: uppercase;
                    margin: 0 10px;
                    border: none;
                    cursor: pointer;
                }
                
                .cta-button:hover {
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-green));
                    box-shadow: 0 10px 25px rgba(19, 254, 93, 0.4);
                    transform: translateY(-3px);
                    color: white;
                }
                
                /* Stats Section */
                .stats-section {
                    background-color: var(--darker-bg);
                    padding: 80px 0;
                    border-top: 1px solid rgba(188, 19, 254, 0.2);
                    border-bottom: 1px solid rgba(188, 19, 254, 0.2);
                }
                .stats-row {
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping */
    justify-content: space-between;
    width: 100%;
}
    .stat-col {
    flex: 1;
    min-width: 0; /* Prevent flex items from growing beyond container */
    padding: 0 15px;
}
                .stat-item {
                    text-align: center;
                    padding: 20px;
                }
                
                .stat-number {
                    font-size: 3.5rem;
                    font-weight: 700;
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-green));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 10px;
                }
                
                .stat-label {
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.7);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                /* Features Section */
                .features-section {
                    padding: 100px 0;
                    background-color: var(--dark-bg);
                }
                
                .section-title {
                    text-align: center;
                    margin-bottom: 80px;
                }
                
                .section-title h2 {
                    font-size: 2.8rem;
                    margin-bottom: 20px;
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: 700;
                }
                
                .section-title p {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.7);
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                
                .features-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .feature-card {
                    background-color: var(--card-bg);
                    border-radius: 15px;
                    padding: 30px;
                    transition: all 0.4s ease;
                    border: 1px solid rgba(188, 19, 254, 0.1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                .feature-card::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    z-index: -1;
                    background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple), var(--neon-green));
                    background-size: 400%;
                    border-radius: 15px;
                    opacity: 0;
                    transition: 0.5s;
                }
                
                .feature-card:hover::before {
                    opacity: 0.7;
                    animation: animate 8s linear infinite;
                }
                
                @keyframes animate {
                    0% {
                        background-position: 0 0;
                    }
                    50% {
                        background-position: 400% 0;
                    }
                    100% {
                        background-position: 0 0;
                    }
                }
                
                .feature-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                    border-color: var(--neon-blue);
                }
                
                .feature-icon {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    color: var(--neon-blue);
                }
                
                .feature-card h3 {
                    font-size: 1.8rem;
                    margin-bottom: 15px;
                    color: #fff;
                    font-weight: 600;
                }
                
                .feature-card p {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 25px;
                    line-height: 1.7;
                    flex-grow: 1;
                }
                
                .learn-more-btn {
                    background: linear-gradient(90deg, var(--neon-purple), var(--neon-blue));
                    border: none;
                    color: white;
                    padding: 12px 25px;
                    border-radius: 50px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    align-self: flex-start;
                    margin-top: auto;
                    text-decoration: none;
                    display: inline-block;
                }
                
                .learn-more-btn:hover {
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-green));
                    box-shadow: 0 5px 15px rgba(19, 254, 93, 0.3);
                    transform: translateY(-2px);
                    color: white;
                }
                
                /* Feature Detail Page */
                .feature-detail-container {
                    padding: 80px 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .feature-detail-card {
                    background-color: var(--card-bg);
                    border-radius: 15px;
                    padding: 50px;
                    border: 1px solid var(--neon-purple);
                    box-shadow: 0 0 30px rgba(188, 19, 254, 0.2);
                }
                
                .feature-title {
                    color: var(--neon-blue);
                    margin-bottom: 40px;
                    text-align: center;
                    font-size: 2.5rem;
                    font-weight: 700;
                }
                
                .back-btn {
                    display: inline-block;
                    margin-top: 40px;
                    background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
                    color: white;
                    padding: 12px 30px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: all 0.3s;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .back-btn:hover {
                    background: linear-gradient(90deg, var(--neon-purple), var(--neon-blue));
                    box-shadow: 0 5px 20px rgba(188, 19, 254, 0.4);
                    transform: translateY(-2px);
                    color: white;
                }
                
                /* Dashboard Styles */
                .dashboard-container {
                    padding: 50px 20px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                
                .dashboard-title {
                    margin-bottom: 3rem;
                    text-align: center;
                    color: var(--neon-blue);
                }
                
                .stat-card {
                    background-color: var(--card-bg);
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 30px;
                    border-left: 5px solid var(--neon-blue);
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                }
                
                .stat-card h3 {
                    color: var(--neon-green);
                    margin-bottom: 20px;
                    font-size: 1.5rem;
                }
                
                .alert-card {
                    background-color: var(--card-bg);
                    border-radius: 10px;
                    padding: 20px;
                    margin-bottom: 20px;
                    border-left: 5px solid var(--neon-purple);
                    transition: all 0.3s;
                }
                
                .alert-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }
                
                .alert-card.critical {
                    border-left-color: #ff0000;
                }
                
                .alert-card.warning {
                    border-left-color: #ffcc00;
                }
                
                .alert-card.info {
                    border-left-color: var(--neon-blue);
                }
                
                .alert-header {
                    display: flex;
                    justify-content: space-between;
                }
                
                /* Threat History Table */
                .threat-table {
                    width: 100%;
                    color: #fff;
                    border-collapse: collapse;
                }
                
                .threat-table th {
                    background-color: var(--darker-bg);
                    padding: 12px;
                    text-align: left;
                }
                
                .threat-table td {
                    padding: 12px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .threat-table tr:hover {
                    background-color: rgba(255, 255, 255, 0.05);
                }
                
                .status-success {
                    color: var(--neon-green);
                }
                
                .status-failed {
                    color: #ff0000;
                }
                
                .status-retried {
                    color: #ffcc00;
                }
                
                /* Form Controls */
                .form-select {
                    background-color: #121212;
                    color: #fff;
                    border: 1px solid #444;
                    border-radius: 4px;
                    padding: 8px 12px;
                    width: 100%;
                }
                
                .form-control {
                    background-color: #121212;
                    color: #fff;
                    border: 1px solid #444;
                    border-radius: 4px;
                    padding: 8px 12px;
                    width: 100%;
                }
                
                /* Footer */
                .footer {
                    background-color: var(--darker-bg);
                    padding: 50px 0 30px;
                    text-align: center;
                    border-top: 1px solid var(--neon-purple);
                }
                
                .footer-links {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 30px;
                }
                
                .footer-link {
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0 15px;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                
                .footer-link:hover {
                    color: var(--neon-blue);
                }
                
                .footer-text {
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0;
                    font-size: 0.9rem;
                }
                
                .tech-badge {
                    display: inline-block;
                    background-color: rgba(19, 254, 93, 0.1);
                    color: var(--neon-green);
                    padding: 5px 15px;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    margin: 5px;
                    border: 1px solid var(--neon-green);
                }
                
                /* Responsive adjustments */
                @media (max-width: 1200px) {
                    .hero-title {
                        font-size: 3.5rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.3rem;
                    }
                }
                
                @media (max-width: 992px) {
                    .hero-section {
                        height: auto;
                        padding: 100px 20px;
                    }
                    
                    .features-container {
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    }
                }
                
                @media (max-width: 768px) {
                    .cyber-header {
                        flex-direction: column;
                        padding: 15px;
                    }
                    
                    .logo-container {
                        margin-bottom: 15px;
                    }
                    
                    .nav-list {
                        gap: 15px;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    
                    .hero-title {
                        font-size: 2.8rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.1rem;
                    }
                    
                    .cta-button {
                        display: block;
                        margin: 15px auto;
                        max-width: 250px;
                    }
                    
                    .section-title h2 {
                        font-size: 2.2rem;
                    }
                    
                    .feature-detail-card {
                        padding: 30px;
                    }
                }
                
                @media (max-width: 576px) {
                    .hero-title {
                        font-size: 2.2rem;
                    }
                    
                    .features-container {
                        grid-template-columns: 1fr;
                    }
                    
                    .feature-card {
                        padding: 25px;
                    }
                    
                    .feature-detail-container {
                        padding: 30px 15px;
                    }
                }
            `}</style>
        </div>
    );
};

// Helper function to get icons for features
const getIconForFeature = (featureId) => {
    const icons = {
        'real-time-monitoring': '🔍',
        'admin-control': '⚙️',
        'scalable-design': '📈',
        'threat-classification': '🏷️',
        'alert-mechanism': '🚨',
        'mitigation-actions': '🛡️'
    };
    return icons[featureId] || '✨';
};

export default CyberFeatures;