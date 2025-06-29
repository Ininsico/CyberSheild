import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CyberpunkAuthPortal = () => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [glitchEffect, setGlitchEffect] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Only one valid user for demo purposes
    const validCredentials = {
        username: 'admin',
        password: 'admin123'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsAuthenticating(true);
        setGlitchEffect(true);
        setError('');

        // Mock network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            if (isLoginView) {
                // Check credentials
                if (username !== validCredentials.username || password !== validCredentials.password) {
                    throw new Error('Invalid credentials - try admin/admin123');
                }
                
                console.log('Authentication successful');
                navigate('/loggedindashboard');
            } else {
                throw new Error('Registration disabled in demo mode');
            }
        } catch (err) {
            setError(err.message);
            console.error('Authentication error:', err);
        } finally {
            setIsAuthenticating(false);
            setGlitchEffect(false);
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setError('');
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 500);
    };

    return (
        <div className="cyberpunk-container">
            <div className={`terminal ${glitchEffect ? 'glitch' : ''}`}>
                <div className="terminal-header">
                    <div className="header-buttons">
                        <span className="header-button red"></span>
                        <span className="header-button yellow"></span>
                        <span className="header-button green"></span>
                    </div>
                    <div className="header-title">
                        {isLoginView ? '// ACCESS TERMINAL' : '// REGISTRATION DISABLED'}
                    </div>
                </div>

                <div className="terminal-body">
                    <div className="scanline"></div>
                    <div className="prompt-line">
                        <span className="prompt-sign">$</span>
                        <span className="prompt-text">initiate {isLoginView ? 'login' : 'registration'} sequence</span>
                    </div>

                    {error && (
                        <div className="error-message">
                            <span className="error-sign">!</span> {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">USER_ID:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="cyber-input"
                                placeholder="Enter admin"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">ENCRYPTION_KEY:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="cyber-input"
                                placeholder="Enter admin123"
                            />
                        </div>

                        <button type="submit" className="cyber-button" disabled={isAuthenticating}>
                            {isAuthenticating ? (
                                <span className="authenticating">
                                    <span className="blink">_</span>AUTHENTICATING<span className="dots"></span>
                                </span>
                            ) : (
                                <span>{isLoginView ? 'ACCESS SYSTEM' : 'REGISTER USER'}</span>
                            )}
                        </button>
                    </form>

                    <div className="toggle-view">
                        <button onClick={toggleView} className="cyber-link">
                            {isLoginView ? 'VIEW REGISTRATION (DISABLED)' : 'BACK TO LOGIN'}
                        </button>
                    </div>
                </div>

                <div className="terminal-footer">
                    <div className="status-bar">
                        <span className="status-item">STATUS: {isAuthenticating ? 'PROCESSING' : 'READY'}</span>
                        <span className="status-item">MODE: DEMO</span>
                        <span className="status-item">v2.4.7</span>
                    </div>
                </div>
            </div>

            <div className="cyberpunk-overlay"></div>

            <style jsx>{`
                :root {
                    --neon-pink: #ff2a6d;
                    --neon-blue: #05d9e8;
                    --neon-purple: #d300c5;
                    --dark-bg: #0d0221;
                    --terminal-bg: #0a001a;
                    --text-color: #d1f7ff;
                    --glow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue);
                }
                
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                body {
                    background-color: var(--dark-bg);
                    font-family: 'Courier New', monospace;
                    color: var(--text-color);
                    overflow: hidden;
                }
                
                .cyberpunk-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: var(--dark-bg);
                    position: relative;
                    overflow: hidden;
                }
                
                .cyberpunk-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                        linear-gradient(0deg, transparent 95%, var(--neon-pink) 100%),
                        linear-gradient(90deg, transparent 95%, var(--neon-blue) 100%);
                    background-size: 20px 20px;
                    opacity: 0.1;
                    pointer-events: none;
                    z-index: 0;
                }
                
                .terminal {
                    width: 400px;
                    background-color: var(--terminal-bg);
                    border: 1px solid var(--neon-blue);
                    box-shadow: 0 0 15px var(--neon-blue), 0 0 5px var(--neon-blue) inset;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                
                .terminal.glitch {
                    animation: glitch 0.5s linear infinite;
                }
                
                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }
                
                .terminal-header {
                    padding: 10px 15px;
                    background-color: rgba(5, 217, 232, 0.1);
                    border-bottom: 1px solid var(--neon-blue);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .header-buttons {
                    display: flex;
                    gap: 8px;
                }
                
                .header-button {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 1px solid;
                }
                
                .header-button.red {
                    background-color: #ff5e5e;
                    border-color: #ff2a2a;
                }
                
                .header-button.yellow {
                    background-color: #ffff5e;
                    border-color: #ffff2a;
                }
                
                .header-button.green {
                    background-color: #5eff5e;
                    border-color: #2aff2a;
                }
                
                .header-title {
                    color: var(--neon-blue);
                    font-weight: bold;
                    text-shadow: var(--glow);
                    letter-spacing: 1px;
                }
                
                .terminal-body {
                    padding: 20px;
                    position: relative;
                }
                
                .scanline {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        to bottom,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.03) 50%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    pointer-events: none;
                    animation: scan 8s linear infinite;
                    z-index: 1;
                }
                
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                
                .prompt-line {
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                }
                
                .prompt-sign {
                    color: var(--neon-pink);
                    margin-right: 8px;
                    font-weight: bold;
                }
                
                .prompt-text {
                    color: var(--neon-blue);
                    text-shadow: var(--glow);
                }
                
                .input-group {
                    margin-bottom: 15px;
                }
                
                .input-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: var(--neon-blue);
                    font-size: 14px;
                    text-shadow: var(--glow);
                }
                
                .cyber-input {
                    width: 100%;
                    padding: 10px;
                    background-color: rgba(5, 217, 232, 0.1);
                    border: 1px solid var(--neon-blue);
                    color: var(--text-color);
                    font-family: 'Courier New', monospace;
                    outline: none;
                    transition: all 0.3s;
                }
                
                .cyber-input:focus {
                    box-shadow: 0 0 10px var(--neon-blue);
                    border-color: var(--neon-pink);
                }
                
                .cyber-input::placeholder {
                    color: rgba(209, 247, 255, 0.5);
                }
                
                .cyber-button {
                    width: 100%;
                    padding: 12px;
                    margin-top: 20px;
                    background-color: transparent;
                    border: 1px solid var(--neon-pink);
                    color: var(--neon-pink);
                    font-family: 'Courier New', monospace;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                
                .cyber-button:hover {
                    background-color: rgba(255, 42, 109, 0.1);
                    box-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
                }
                
                .cyber-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                
                .authenticating {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .blink {
                    animation: blink 1s step-end infinite;
                }
                
                .dots::after {
                    content: '';
                    animation: dots 1.5s steps(5, end) infinite;
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                @keyframes dots {
                    0% { content: ''; }
                    20% { content: '.'; }
                    40% { content: '..'; }
                    60% { content: '...'; }
                    80%, 100% { content: ''; }
                }
                
                .toggle-view {
                    margin-top: 20px;
                    text-align: center;
                    font-size: 14px;
                    color: var(--text-color);
                }
                
                .cyber-link {
                    background: none;
                    border: none;
                    color: var(--neon-blue);
                    text-decoration: underline;
                    cursor: pointer;
                    font-family: 'Courier New', monospace;
                    font-size: 14px;
                }
                
                .cyber-link:hover {
                    text-shadow: var(--glow);
                }
                
                .terminal-footer {
                    padding: 8px 15px;
                    background-color: rgba(5, 217, 232, 0.1);
                    border-top: 1px solid var(--neon-blue);
                    font-size: 12px;
                }
                
                .status-bar {
                    display: flex;
                    justify-content: space-between;
                }
                
                .status-item {
                    color: var(--neon-blue);
                }
                
                .error-message {
                    color: var(--neon-pink);
                    margin-bottom: 15px;
                    padding: 8px;
                    background-color: rgba(255, 42, 109, 0.1);
                    border-left: 3px solid var(--neon-pink);
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }
                
                .error-sign {
                    font-weight: bold;
                    margin-right: 8px;
                    color: var(--neon-pink);
                }
            `}</style>
        </div>
    );
};

export default CyberpunkAuthPortal;