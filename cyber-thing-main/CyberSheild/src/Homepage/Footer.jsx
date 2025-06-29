import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define keyframes as style tags
  const KeyframeStyles = () => (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        
        @keyframes subtleGlow {
          0% { text-shadow: 0 0 8px rgba(11, 240, 252, 0.3); }
          50% { text-shadow: 0 0 12px rgba(11, 240, 252, 0.5); }
          100% { text-shadow: 0 0 8px rgba(11, 240, 252, 0.3); }
        }
        
        @keyframes smoothPulse {
          0%, 100% { opacity: 0.95; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-subtle-glow {
          animation: subtleGlow 4s ease-in-out infinite;
        }
        
        .animate-smooth-pulse {
          animation: smoothPulse 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .hover\:scale-cyber:hover {
          transform: scale(1.05);
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}
    </style>
  );

  return (
    <footer 
      id="contact" 
      className="relative bg-gray-900 border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700
      }}
    >
      <KeyframeStyles />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMEg1MFY1MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDExLDI0MCwyNTIsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 animate-float">
            <h3 className="text-cyan-400 text-2xl tracking-wider animate-subtle-glow">
              CyberShield
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced threat prediction and mitigation system developed by 4th semester Computer Science students.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-cyan-400 hover:scale-cyber transition-all duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 hover:scale-cyber transition-all duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 hover:scale-cyber transition-all duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 text-xl mb-4 tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "#team", label: "Our Team", onClick: () => scrollToSection('team') },
                { path: "#contact", label: "Contact", onClick: () => scrollToSection('contact') }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-400 mr-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-purple-400 text-xl mb-4 tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Security Reports', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-400 mr-2 rounded-full animate-smooth-pulse"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-green-400 text-xl tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { icon: 'map-marker-alt', text: 'University Computer Science Dept' },
                { icon: 'phone', text: '+92 300 1234567' },
                { icon: 'envelope', text: 'cybershield@university.edu' },
                { icon: 'clock', text: 'Available during semester' }
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <i className={`fas fa-${item.icon} mt-1 mr-3 text-green-400 w-4 group-hover:text-cyan-400 transition-colors duration-300`}></i>
                  <span className="group-hover:text-green-400 transition-colors duration-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs tracking-widest">
            &copy; {new Date().getFullYear()} CYBERSHIELD STUDENT PROJECT. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;