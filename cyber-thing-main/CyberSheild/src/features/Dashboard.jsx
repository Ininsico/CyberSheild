import { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns'; 

const Dashboard = () => {
    const trafficChartRef = useRef(null);
    const threatsChartRef = useRef(null);
    const attackTimelineRef = useRef(null);

    const trafficCanvasRef = useRef(null);
    const threatsCanvasRef = useRef(null);
    const attackTimelineCanvasRef = useRef(null);

    const [threatLevel, setThreatLevel] = useState('HIGH');
    const [ongoingAttacks, setOngoingAttacks] = useState(['DDoS', 'PORT SCAN', 'BRUTE FORCE', 'SQL INJECTION']);
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'CRITICAL', message: 'DDoS attack detected', time: new Date().toLocaleTimeString() },
        { id: 2, type: 'WARNING', message: 'Port scanning activity', time: new Date().toLocaleTimeString() }
    ]);
    const [systemStatus, setSystemStatus] = useState({
        cpu: 42,
        memory: 68,
        network: 5600,
        threatsBlocked: 1284
    });

    const threatTypes = {
        'DDoS': { color: '#FF2A2A', desc: 'Distributed Denial of Service' },
        'MALWARE': { color: '#FF7A2A', desc: 'Malicious Software' },
        'PHISHING': { color: '#13FE5D', desc: 'Phishing Attempt' },
        'ZERO-DAY': { color: '#2A7AFF', desc: 'Zero-Day Exploit' },
        'BRUTE FORCE': { color: '#FF2ADD', desc: 'Brute Force Attack' },
        'SQL INJECTION': { color: '#2AFFD4', desc: 'SQL Injection' },
        'PORT SCAN': { color: '#F3FF2A', desc: 'Port Scanning' },
        'MITM': { color: '#AA2AFF', desc: 'Man-in-the-Middle' }
    };

    const generateAttackData = () => {
        const attackTypes = Object.keys(threatTypes);
        const attackCounts = {};

        attackTypes.forEach(type => {
            attackCounts[type] = Math.floor(Math.random() * 50);
        });

        return attackCounts;
    };

    const generateTrafficData = () => {
        return Array.from({ length: 24 }, () => Math.floor(Math.random() * 10000));
    };

    const simulateVulnerability = () => {
        const attackTypes = Object.keys(threatTypes);
        const randomAttack = attackTypes[Math.floor(Math.random() * attackTypes.length)];

        const newAttacks = [...ongoingAttacks];
        if (newAttacks.length >= 6) newAttacks.shift();
        if (!newAttacks.includes(randomAttack)) {
            newAttacks.push(randomAttack);
            setOngoingAttacks(newAttacks);
        }

        const alertTypes = ['CRITICAL', 'WARNING', 'NOTICE'];
        const newAlert = {
            id: Date.now(),
            type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
            message: `${randomAttack} ${Math.random() > 0.5 ? 'detected' : 'attempt'}`,
            time: new Date().toLocaleTimeString()
        };

        setAlerts(prev => {
            const newAlerts = [...prev, newAlert];
            return newAlerts.slice(-5); 
        });
        const levels = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
        setThreatLevel(levels[Math.floor(Math.random() * levels.length)]);

        setSystemStatus({
            cpu: Math.min(100, Math.max(10, systemStatus.cpu + (Math.random() * 20 - 10))),
            memory: Math.min(100, Math.max(10, systemStatus.memory + (Math.random() * 20 - 10))),
            network: Math.max(1000, systemStatus.network + (Math.random() * 2000 - 1000)),
            threatsBlocked: systemStatus.threatsBlocked + Math.floor(Math.random() * 10)
        });

        updateCharts();
    };

    const updateCharts = () => {
      
        if (trafficChartRef.current) {
            trafficChartRef.current.data.datasets[0].data = generateTrafficData();
            trafficChartRef.current.update();
        }

        if (threatsChartRef.current) {
            const attackData = generateAttackData();
            threatsChartRef.current.data.labels = Object.keys(attackData);
            threatsChartRef.current.data.datasets[0].data = Object.values(attackData);
            threatsChartRef.current.data.datasets[0].backgroundColor = Object.keys(attackData).map(
                attack => threatTypes[attack]?.color || '#13FE5D'
            );
            threatsChartRef.current.update();
        }

        if (attackTimelineRef.current) {
            attackTimelineRef.current.data.datasets[0].data = Array.from({ length: 12 }, (_, i) => ({
                x: Date.now() - (11 - i) * 5 * 60 * 1000,
                y: Math.floor(Math.random() * 100)
            }));
            attackTimelineRef.current.update();
        }
    };

    useEffect(() => {
        initCharts();

        const interval = setInterval(simulateVulnerability, 5000);

        return () => {
            clearInterval(interval);
            destroyCharts();
        };
    }, []);

    const destroyCharts = () => {
        if (trafficChartRef.current) {
            trafficChartRef.current.destroy();
            trafficChartRef.current = null;
        }
        if (threatsChartRef.current) {
            threatsChartRef.current.destroy();
            threatsChartRef.current = null;
        }
        if (attackTimelineRef.current) {
            attackTimelineRef.current.destroy();
            attackTimelineRef.current = null;
        }
    };

    const initCharts = () => {
        destroyCharts();

        if (trafficCanvasRef.current) {
            trafficChartRef.current = new Chart(trafficCanvasRef.current, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
                    datasets: [{
                        label: 'PACKETS/SEC',
                        data: generateTrafficData(),
                        borderColor: '#13FE5D',
                        backgroundColor: 'rgba(19, 254, 93, 0.1)',
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: true
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
                            backgroundColor: '#121212',
                            titleColor: '#13FE5D',
                            bodyColor: '#FFFFFF',
                            borderColor: '#13FE5D',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: '#13FE5D' }
                        },
                        x: {
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: '#13FE5D' }
                        }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }

        if (threatsCanvasRef.current) {
            const attackData = generateAttackData();
            threatsChartRef.current = new Chart(threatsCanvasRef.current, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(attackData),
                    datasets: [{
                        data: Object.values(attackData),
                        backgroundColor: Object.keys(attackData).map(
                            attack => threatTypes[attack]?.color || '#13FE5D'
                        ),
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                color: '#13FE5D',
                                font: { weight: 'bold' },
                                padding: 20,
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = Math.round((value / total) * 100);
                                    return `${label}: ${value} (${percentage}%) - ${threatTypes[context.label]?.desc || ''}`;
                                }
                            },
                            backgroundColor: '#121212',
                            titleColor: '#13FE5D',
                            bodyColor: '#FFFFFF',
                            borderColor: '#13FE5D',
                            borderWidth: 1
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    cutout: '70%'
                }
            });
        }

        if (attackTimelineCanvasRef.current) {
            attackTimelineRef.current = new Chart(attackTimelineCanvasRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'ATTACK INTENSITY',
                        data: Array.from({ length: 12 }, (_, i) => ({
                            x: Date.now() - (11 - i) * 5 * 60 * 1000,
                            y: Math.floor(Math.random() * 100)
                        })),
                        borderColor: '#FF2A2A',
                        backgroundColor: 'rgba(255, 42, 42, 0.1)',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 0
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
                            callbacks: {
                                title: function (context) {
                                    return new Date(context[0].parsed.x).toLocaleTimeString();
                                },
                                label: function (context) {
                                    return `Intensity: ${context.parsed.y}`;
                                }
                            },
                            backgroundColor: '#121212',
                            titleColor: '#13FE5D',
                            bodyColor: '#FFFFFF',
                            borderColor: '#13FE5D',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: '#FF2A2A' }
                        },
                        x: {
                            type: 'time',
                            time: {
                                unit: 'minute',
                                displayFormats: {
                                    minute: 'HH:mm'
                                },
                                tooltipFormat: 'HH:mm'
                            },
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            ticks: { color: '#FF2A2A' }
                        }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }
    };

    const getThreatLevelColor = () => {
        switch (threatLevel) {
            case 'LOW': return '#13FE5D';
            case 'MEDIUM': return '#F3FF2A';
            case 'HIGH': return '#FF7A2A';
            case 'CRITICAL': return '#FF2A2A';
            default: return '#13FE5D';
        }
    };

    const styles = {
        page: {
            backgroundColor: '#0A0A0A',
            color: '#13FE5D',
            padding: '20px',
            fontFamily: "'Courier New', monospace",
            minHeight: '100vh'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #13FE5D',
            paddingBottom: '10px',
            marginBottom: '20px'
        },
        title: {
            margin: 0,
            fontSize: '2rem',
            letterSpacing: '2px'
        },
        statusBar: {
            display: 'flex',
            gap: '20px'
        },
        statusItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        statusValue: {
            fontSize: '1.2rem',
            fontWeight: 'bold'
        },
        statusLabel: {
            fontSize: '0.8rem',
            opacity: 0.8
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginTop: '20px'
        },
        card: {
            backgroundColor: '#121212',
            padding: '20px',
            border: '2px solid #13FE5D',
            borderRadius: '0',
            boxShadow: '0 0 15px rgba(19, 254, 93, 0.1)',
            transition: 'all 0.3s ease'
        },
        cardHover: {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 20px rgba(19, 254, 93, 0.3)'
        },
        largeCard: {
            gridColumn: 'span 2'
        },
        chartContainer: {
            height: '300px',
            position: 'relative'
        },
        threatLevel: {
            fontSize: '3rem',
            textAlign: 'center',
            margin: '20px 0',
            fontWeight: 'bold',
            textShadow: '0 0 10px currentColor'
        },
        attackList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        attackItem: {
            padding: '10px',
            borderBottom: '1px solid rgba(255, 42, 42, 0.5)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s ease'
        },
        attackType: {
            color: '#FF2A2A',
            fontWeight: 'bold'
        },
        alertItem: {
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#1A1A1A',
            borderLeft: '5px solid',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        alertCritical: {
            borderLeftColor: '#FF2A2A',
            boxShadow: '0 0 15px rgba(255, 42, 42, 0.3)'
        },
        alertWarning: {
            borderLeftColor: '#F3FF2A',
            boxShadow: '0 0 15px rgba(243, 255, 42, 0.3)'
        },
        alertNotice: {
            borderLeftColor: '#2A7AFF',
            boxShadow: '0 0 15px rgba(42, 122, 255, 0.3)'
        },
        alertPulse: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(255,42,42,0) 0%, rgba(255,42,42,0.1) 50%, rgba(255,42,42,0) 100%)',
            animation: 'pulse 2s infinite'
        },
        alertHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '5px'
        },
        alertTime: {
            color: '#2A7AFF',
            fontSize: '0.9rem'
        },
        '@keyframes pulse': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' }
        }
    };

    const getAlertStyle = (type) => {
        switch (type) {
            case 'CRITICAL': return { ...styles.alertItem, ...styles.alertCritical };
            case 'WARNING': return { ...styles.alertItem, ...styles.alertWarning };
            default: return { ...styles.alertItem, ...styles.alertNotice };
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.title}>SECURITY DASHBOARD</h1>
                <div style={styles.statusBar}>
                    <div style={styles.statusItem}>
                        <div style={styles.statusValue}>{systemStatus.cpu.toFixed(0)}%</div>
                        <div style={styles.statusLabel}>CPU</div>
                    </div>
                    <div style={styles.statusItem}>
                        <div style={styles.statusValue}>{systemStatus.memory.toFixed(0)}%</div>
                        <div style={styles.statusLabel}>MEM</div>
                    </div>
                    <div style={styles.statusItem}>
                        <div style={styles.statusValue}>{(systemStatus.network / 1000).toFixed(1)}GB</div>
                        <div style={styles.statusLabel}>NET</div>
                    </div>
                    <div style={styles.statusItem}>
                        <div style={styles.statusValue}>{systemStatus.threatsBlocked}</div>
                        <div style={styles.statusLabel}>BLOCKED</div>
                    </div>
                </div>
            </div>

            <div style={styles.grid}>
                <div style={{ ...styles.card, ...styles.largeCard }}>
                    <h3>NETWORK TRAFFIC</h3>
                    <div style={styles.chartContainer}>
                        <canvas ref={trafficCanvasRef} id="trafficChart"></canvas>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3>THREAT DISTRIBUTION</h3>
                    <div style={styles.chartContainer}>
                        <canvas ref={threatsCanvasRef} id="threatsChart"></canvas>
                    </div>
                </div>
                <div style={styles.card}>
                    <h3>THREAT LEVEL</h3>
                    <div style={{ ...styles.threatLevel, color: getThreatLevelColor() }}>
                        {threatLevel}
                        {threatLevel === 'CRITICAL' && <div style={styles.alertPulse}></div>}
                    </div>
                </div>

                <div style={styles.card}>
                    <h3>ONGOING ATTACKS</h3>
                    <ul style={styles.attackList}>
                        {ongoingAttacks.map((attack, i) => (
                            <li key={i} style={styles.attackItem}>
                                <span style={styles.attackType}>{attack}</span>
                                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                                    {threatTypes[attack]?.desc || 'Unknown threat'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ ...styles.card, ...styles.largeCard }}>
                    <h3>ATTACK TIMELINE</h3>
                    <div style={styles.chartContainer}>
                        <canvas ref={attackTimelineCanvasRef} id="attackTimeline"></canvas>
                    </div>
                </div>

                <div style={{ ...styles.card, ...styles.largeCard }}>
                    <h3>ALERTS</h3>
                    <div>
                        {alerts.map(alert => (
                            <div key={alert.id} style={getAlertStyle(alert.type)}>
                                {alert.type === 'CRITICAL' && <div style={styles.alertPulse}></div>}
                                <div style={styles.alertHeader}>
                                    <div style={{ color: getAlertStyle(alert.type).borderLeftColor, fontWeight: 'bold' }}>
                                        {alert.type}
                                    </div>
                                    <div style={styles.alertTime}>{alert.time}</div>
                                </div>
                                <div>{alert.message}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;