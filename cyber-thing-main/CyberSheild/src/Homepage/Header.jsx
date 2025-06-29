import { Link } from 'react-router-dom';

const Header = () => {
    // Internal CSS for custom font and animations
    const styles = `
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap');
        
        .cyber-font {
            font-family: 'Rajdhani', sans-serif;
            font-weight: 700;
        }
        
        @keyframes cyber-pulse {
            0%, 100% {
                text-shadow: 0 0 8px rgba(59, 130, 246, 0.7);
            }
            50% {
                text-shadow: 0 0 15px rgba(59, 130, 246, 0.9);
            }
        }
        
        .nav-underline::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(90deg, #3b82f6, #93c5fd);
            transition: width 0.3s ease;
        }
        
        .nav-underline:hover::after {
            width: 100%;
        }
        
        .cyber-btn {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .cyber-btn:hover {
            transform: translateY(-2px);
        }
        
        .cyber-btn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to bottom right,
                rgba(59, 130, 246, 0.3),
                rgba(147, 197, 253, 0.1),
                transparent
            );
            transform: rotate(30deg);
            transition: all 0.5s ease;
        }
        
        .cyber-btn:hover::before {
            left: 100%;
        }
    `;

    const LogoIcon = () => (
        <svg 
            className="h-10 w-10" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="#3b82f6"
            style={{ filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.7))' }}
        >
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
        </svg>
    );

    return (
        <>
            <style>{styles}</style>
            <header className="sticky top-0 z-50 bg-gray-900/95 border-b border-gray-800 backdrop-blur-lg">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <Link to="/" className="flex items-center space-x-3 group">
                            <LogoIcon />
                            <h1 className="text-xl cyber-font text-blue-400 tracking-tighter group-hover:animate-cyber-pulse">
                                CYBER<span className="text-blue-300">SHIELD</span>
                            </h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-10">
                            <div className="flex items-center space-x-8">
                                <Link 
                                    to="/" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative nav-underline cyber-font"
                                >
                                    HOME
                                </Link>
                                <Link 
                                    to="/about" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative nav-underline cyber-font"
                                >
                                    ABOUT
                                </Link>
                                <Link 
                                    to="/features" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative nav-underline cyber-font"
                                >
                                    FEATURES
                                </Link>
                                <Link 
                                    to="/futures" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative nav-underline cyber-font"
                                >
                                    FUTURE
                                </Link>
                            </div>

                            <div className="flex items-center space-x-5">
                                <Link 
                                    to="/dashboard" 
                                    className="cyber-btn px-5 py-2.5 cyber-font text-blue-400 border-2 border-blue-400 rounded-full hover:bg-blue-400/10 hover:border-blue-300"
                                >
                                    DASHBOARD
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="cyber-btn px-5 py-2.5 cyber-font text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400"
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile menu button (would need JS to implement) */}
                        <button className="md:hidden text-gray-400 hover:text-blue-400 transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;