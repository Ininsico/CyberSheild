import { useEffect, useRef } from 'react';

const Hero = () => {
    const splashRef = useRef(null);
    const lightningContainerRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const splashScreen = splashRef.current;
        const lightningContainer = lightningContainerRef.current;
        const logo = logoRef.current;

        const createLightning = () => {
            const rayCount = 8;
            const containerSize = Math.max(window.innerWidth, window.innerHeight);
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const angles = [45, 135, 225, 315, 30, 150, 210, 330];

            for (let i = 0; i < rayCount; i++) {
                const ray = document.createElement('div');
                const angle = angles[i];
                const radians = angle * (Math.PI / 180);
                const rayLength = containerSize * 0.8;
                const rayWidth = 2 + Math.random() * 2;

                Object.assign(ray.style, {
                    position: 'absolute',
                    width: `${rayWidth}px`,
                    height: '0',
                    left: `${centerX}px`,
                    top: `${centerY}px`,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'top center',
                    opacity: '0',
                    zIndex: '1',
                    background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#0ff0fc' : '#bc13fe'
                        }, transparent)`,
                    filter: 'drop-shadow(0 0 5px #0ff0fc)',
                    animation: `lightning-strike 1s ${i * 0.15}s forwards`,
                });
                ray.style.setProperty('--ray-length', `${rayLength}px`);
                lightningContainer.appendChild(ray);
            }
        };

        createLightning();

        setTimeout(() => {
            Object.assign(logo.style, {
                animation: 'logo-appear 1s forwards, logo-pulse 2s infinite 1s',
            });
        }, 8 * 0.15 * 1000);

        setTimeout(() => {
            Object.assign(splashScreen.style, {
                animation: 'fade-out 0.5s forwards',
            });
        }, 8 * 0.15 * 1000 + 2000);
    }, []);

    return (
        <>
            <div
                ref={splashRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#050510',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                    overflow: 'hidden',
                }}
            >
                <div
                    ref={lightningContainerRef}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <svg
                        ref={logoRef}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#0ff0fc"
                        style={{
                            position: 'absolute',
                            width: '150px',
                            height: '150px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) scale(0)',
                            opacity: '0',
                            zIndex: '2',
                            filter: 'drop-shadow(0 0 20px #bc13fe)',
                            transition: 'all 0.5s ease',
                        }}
                    >
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
                    </svg>
                </div>
            </div>

            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '80px 10%',
                    position: 'relative',
                    overflow: 'hidden',
                    margin: '0 auto',
                    maxWidth: '100%',
                    textAlign: 'center',
                    background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `
              url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="%231b8be066" d="M30 100a70 70 0 1 1 140 0 70 70 0 1 1-140 0"/></svg>') center/cover no-repeat,
              url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="%237a00ff22" d="M100 30a70 70 0 1 1 0 140 70 70 0 1 1 0-140"/></svg>') center/cover no-repeat`,
                        opacity: '0.8',
                        animation: 'pulse 15s infinite alternate',
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `
              linear-gradient(rgba(11, 240, 252, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(11, 240, 252, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        animation: 'gridMove 20s linear infinite',
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: '#0ff0fc',
                        top: '10%',
                        left: '5%',
                        filter: 'blur(30px)',
                        opacity: '0.6',
                        animation: 'float 15s infinite ease-in-out',
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: '#bc13fe',
                        bottom: '5%',
                        right: '10%',
                        filter: 'blur(30px)',
                        opacity: '0.6',
                        animation: 'float 15s infinite ease-in-out 3s',
                    }}
                ></div>

                <div
                    style={{
                        maxWidth: '800px',
                        zIndex: '2',
                        animation: 'fadeInLeft 1s ease-out',
                    }}
                >
                    <div
                        style={{
                            background: 'rgba(5, 5, 16, 0.8)',
                            padding: '40px 30px',
                            borderRadius: '10px',
                            marginBottom: '40px',
                            border: '1px solid #0ff0fc',
                            boxShadow: '0 0 30px rgba(11, 240, 252, 0.3)',
                            backdropFilter: 'blur(5px)',
                            position: 'relative',
                            overflow: 'hidden',
                            transformStyle: 'preserve-3d',
                            transition: 'all 0.5s ease',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '-2px',
                                left: '-2px',
                                right: '-2px',
                                bottom: '-2px',
                                background: 'linear-gradient(45deg, #0ff0fc, #bc13fe, #0ff0fc)',
                                zIndex: '-1',
                                borderRadius: '12px',
                                opacity: '0.7',
                                animation: 'hologram 3s linear infinite',
                            }}
                        ></div>
                        <div
                            style={{
                                position: 'absolute',
                                color: 'rgba(11, 240, 252, 0.2)',
                                fontFamily: 'monospace',
                                fontSize: '12px',
                                lineHeight: '1.4',
                                whiteSpace: 'pre',
                                animation: 'scrollBinary 20s linear infinite',
                                zIndex: '-1',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                pointerEvents: 'none',
                            }}
                        >
                            01001000 01100001 01100011 01101011 00100000 01010000 01110010 01101111 01110100 01100101 01100011 01110100 00100000<br />
                            01010011 01111001 01110011 01110100 01100101 01101101 00100000 01000001 01100011 01110100 01101001 01110110 01100001 01110100 01100101 01100100<br />
                            01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001 00100000 01010000 01110010 01101111 01110100 01101111 01100011 01101111 01101100 01110011<br />
                            01001000 01100001 01100011 01101011 00100000 01010000 01110010 01101111 01110100 01100101 01100011 01110100 00100000<br />
                            01010011 01111001 01110011 01110100 01100101 01101101 00100000 01000001 01100011 01110100 01101001 01110110 01100001 01110100 01100101 01100100<br />
                            01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001 00100000 01010000 01110010 01101111 01110100 01101111 01100011 01101111 01101100 01110011
                        </div>

                        <span
                            style={{
                                display: 'block',
                                fontSize: '3.5rem',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: '700',
                                letterSpacing: '3px',
                                marginBottom: '10px',
                                color: '#0ff0fc',
                                textShadow: '0 0 10px #0ff0fc, 0 0 20px rgba(11, 240, 252, 0.5)',
                                position: 'relative',
                                animation: 'textGlow 2s ease-in-out infinite alternate',
                            }}
                        >
                            REAL-TIME
                        </span>
                        <span
                            style={{
                                display: 'block',
                                fontSize: '3rem',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: '700',
                                letterSpacing: '2px',
                                color: '#bc13fe',
                                textShadow: '0 0 10px #bc13fe, 0 0 20px rgba(122, 0, 255, 0.5)',
                                position: 'relative',
                                animation: 'textGlowPurple 2s ease-in-out infinite alternate-reverse',
                            }}
                        >
                            CYBERATTACK PREDICTION
                        </span>
                    </div>

                    <p
                        style={{
                            fontSize: '1.2rem',
                            marginBottom: '30px',
                            lineHeight: '1.6',
                            color: '#fff',
                            textShadow: '0 0 5px rgba(255, 255, 255, 0.2)',
                            fontFamily: "'Rajdhani', sans-serif",
                        }}
                    >
                        Advanced AI-powered platform that detects, predicts, and mitigates cyber threats
                        in real-time before they impact your systems.
                    </p>

                    <a
                        href="/features"
                        style={{
                            display: 'inline-block',
                            padding: '15px 35px',
                            background: 'linear-gradient(45deg, #0ff0fc, #bc13fe)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '30px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            fontFamily: "'Rajdhani', sans-serif",
                            letterSpacing: '1px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 0 15px rgba(11, 240, 252, 0.5)',
                            textDecoration: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: '1',
                        }}
                    >
                        VIEW FEATURES
                    </a>
                </div>
                <style>
                    {`
            @keyframes lightning-strike {
              0% { height: 0; opacity: 0; }
              10% { opacity: 1; }
              50% { height: var(--ray-length); opacity: 0.8; }
              100% { height: 0; opacity: 0; }
            }
            
            @keyframes logo-appear {
              0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
              50% { opacity: 1; filter: drop-shadow(0 0 30px #bc13fe); }
              100% { transform: translate(-50%, -50%) scale(1); opacity: 1; filter: drop-shadow(0 0 15px #bc13fe); }
            }
            
            @keyframes logo-pulse {
              0% { filter: drop-shadow(0 0 15px #bc13fe); }
              50% { filter: drop-shadow(0 0 30px #bc13fe); }
              100% { filter: drop-shadow(0 0 15px #bc13fe); }
            }
            
            @keyframes fade-out {
              to { opacity: 0; visibility: hidden; }
            }
            
            @keyframes fade-in {
              to { opacity: 1; }
            }
            
            @keyframes fadeInLeft {
              from { opacity: 0; transform: translateX(-50px); }
              to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.1); opacity: 0.5; }
              100% { transform: scale(1); opacity: 0.8; }
            }
            
            @keyframes float {
              0% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
              100% { transform: translateY(0) rotate(0deg); }
            }
            
            @keyframes gridMove {
              0% { background-position: 0 0; }
              100% { background-position: 50px 50px; }
            }
            
            @keyframes hologram {
              0% { opacity: 0.3; }
              50% { opacity: 0.7; }
              100% { opacity: 0.3; }
            }
            
            @keyframes scrollBinary {
              0% { transform: translateY(0); }
              100% { transform: translateY(-100%); }
            }
            
            @keyframes textGlow {
              0% { text-shadow: 0 0 10px #0ff0fc, 0 0 20px rgba(11, 240, 252, 0.5); }
              100% { text-shadow: 0 0 15px #0ff0fc, 0 0 30px rgba(11, 240, 252, 0.8); }
            }
            
            @keyframes textGlowPurple {
              0% { text-shadow: 0 0 10px #bc13fe, 0 0 20px rgba(122, 0, 255, 0.5); }
              100% { text-shadow: 0 0 15px #bc13fe, 0 0 30px rgba(122, 0, 255, 0.8); }
            }
          `}
                </style>
            </section>
        </>
    );
};

export default Hero;