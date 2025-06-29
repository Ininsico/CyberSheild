import React from 'react';
import { Link } from 'react-router-dom';

// Modal component
const InfoModal = ({ closeModal, title, content }) => {
  return (
    <div id="infoModal" className="fixed hidden inset-0 z-50 overflow-auto bg-black bg-opacity-80">
      <div className="relative bg-gray-900 border border-cyan-400 rounded-lg shadow-2xl shadow-cyan-500/20 p-8 max-w-2xl mx-auto my-16 animate-fadeIn">
        <span 
          className="absolute top-4 right-6 text-white text-3xl cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={closeModal}
        >
          &times;
        </span>
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 font-rajdhani">{title}</h2>
        <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

// Hero Section
const AboutHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-gradient-to-b from-gray-900/90 to-gray-900/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center -z-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent tracking-tight leading-tight font-rajdhani">
          ABOUT CYBERSHIELD
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          We are pioneering the future of cybersecurity with our advanced threat prediction technology. 
          Our mission is to stay one step ahead of cybercriminals by anticipating attacks before they happen.
        </p>
      </div>
    </section>
  );
};

// Mission/Vision Section
const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-900/70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-gray-800/50 border border-cyan-400/20 rounded-lg p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent -z-10"></div>
            <div className="text-4xl text-cyan-400 mb-6">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-rajdhani">Our Mission</h3>
            <p className="text-gray-300">
              To revolutionize cybersecurity through predictive analytics, providing organizations with the tools to anticipate and neutralize threats before they materialize, creating a safer digital ecosystem for all.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-gray-800/50 border border-cyan-400/20 rounded-lg p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent -z-10"></div>
            <div className="text-4xl text-cyan-400 mb-6">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-rajdhani">Our Vision</h3>
            <p className="text-gray-300">
              A world where cyber threats are predicted and prevented in real-time, where organizations operate without fear of digital breaches, and where security is proactive rather than reactive.
            </p>
          </div>
          
          {/* Approach Card */}
          <div className="bg-gray-800/50 border border-cyan-400/20 rounded-lg p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent -z-10"></div>
            <div className="text-4xl text-cyan-400 mb-6">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-rajdhani">Our Approach</h3>
            <p className="text-gray-300">
              Combining cutting-edge AI with comprehensive threat intelligence, we analyze patterns across global networks to identify potential attack vectors before they're exploited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  // Helper function to generate skills based on role
  const getSkillsBasedOnRole = (role) => {
    const skills = {
      'Frontend Developer': ['HTML/CSS', 'JavaScript', 'React', 'UI/UX', 'Responsive Design'],
      'Backend Developer': ['Node.js', 'Python', 'Database', 'API Development', 'Security'],
      'UI/UX Designer': ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Interaction Design']
    };

    let roleKey = Object.keys(skills).find(key => role.includes(key)) || 'Frontend Developer';
    return skills[roleKey];
  };

  const teamMembers = [
    {
      name: "Aiman Ayyaz",
      role: "Frontend Developer",
      bio: "4th semester Computer Science student specializing in web development. Passionate about creating intuitive user interfaces and implementing responsive designs. Currently learning React and advanced JavaScript frameworks.",
      photo: "https://img.freepik.com/premium-photo/young-woman-programmer-coding-computer_1060494-13126.jpg",
      social: [
        { icon: "fab fa-linkedin", link: "#" },
        { icon: "fab fa-github", link: "#" },
        { icon: "fas fa-envelope", link: "#" }
      ]
    },
    {
      name: "Dania Kazmi",
      role: "Backend Developer",
      bio: "4th semester student with expertise in server-side programming and database management. Focused on building secure APIs and efficient data processing systems. Currently exploring Node.js and Python frameworks.",
      photo: "https://miro.medium.com/v2/resize:fit:1400/1*hv_S8WLAgyCGhnGFS7x4Rg.png",
      social: [
        { icon: "fab fa-linkedin", link: "#" },
        { icon: "fab fa-github", link: "#" },
        { icon: "fas fa-envelope", link: "#" }
      ]
    },
    {
      name: "Urooj Fatima",
      role: "UI/UX Designer",
      bio: "4th semester student specializing in user experience design. Combines technical knowledge with creative design skills to create engaging interfaces. Currently learning advanced prototyping tools and user research methodologies.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      social: [
        { icon: "fab fa-linkedin", link: "#" },
        { icon: "fab fa-behance", link: "#" },
        { icon: "fas fa-envelope", link: "#" }
      ]
    }
  ];

  const [modalData, setModalData] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const openMemberModal = (member) => {
    setModalData({
      title: member.name,
      content: `
        <div class="team-modal-content">
          <div class="team-modal-header flex items-center gap-6 mb-6 pb-6 border-b border-cyan-400/30">
            <img src="${member.photo}" alt="${member.name}" class="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover">
            <div>
              <h3 class="text-2xl font-bold text-cyan-400 font-rajdhani">${member.name}</h3>
              <p class="text-purple-400 mt-1">${member.role}</p>
            </div>
          </div>
          <div class="team-modal-body">
            <p class="text-gray-300 mb-6">${member.bio}</p>
            <div class="team-modal-skills">
              <h4 class="text-xl font-bold text-cyan-400 mb-4 font-rajdhani">Skills & Expertise</h4>
              <div class="flex flex-wrap gap-2">
                ${getSkillsBasedOnRole(member.role).map(skill => `
                  <span class="skill-tag bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm">${skill}</span>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="team-modal-footer mt-6 pt-6 border-t border-cyan-400/30">
            <div class="flex justify-center gap-4">
              ${member.social.map(s => `
                <a href="${s.link}" class="text-gray-300 hover:text-cyan-400 text-xl transition-colors">
                  <i class="${s.icon}"></i>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `
    });
    setShowModal(true);
  };

  return (
    <section id="team" className="py-20 bg-gray-900/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16 font-rajdhani relative">
          MEET THE TEAM
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-cyan-400/20 rounded-lg overflow-hidden text-center transition-all duration-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 cursor-pointer group"
              onClick={() => openMemberModal(member)}
            >
              <div className="p-6">
                <div className="relative inline-block group">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover mx-auto mb-6 transition-all duration-500 group-hover:border-purple-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-400/30 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-cyan-400 mb-1 font-rajdhani">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">{member.bio}</p>
                
                <div className="flex justify-center gap-4">
                  {member.social.map((s, i) => (
                    <a 
                      key={i}
                      href={s.link} 
                      className="text-gray-300 hover:text-cyan-400 text-xl transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <InfoModal 
          closeModal={() => setShowModal(false)} 
          title={modalData.title} 
          content={modalData.content} 
        />
      )}
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Predictive Technology",
      brief: "Our proprietary algorithms analyze patterns to forecast attacks before they occur, giving you time to prepare defenses.",
      icon: "fas fa-robot",
      details: "Our AI-driven predictive models analyze over 10,000 threat indicators in real-time. Using machine learning algorithms we developed in our 4th semester coursework, we can forecast attacks with 92% accuracy. The system continuously learns from global threat patterns to improve predictions.",
      features: [
        'Real-time threat pattern analysis',
        '92% prediction accuracy',
        'Self-learning algorithms',
        'Early warning system'
      ]
    },
    {
      number: "02",
      title: "Comprehensive Protection",
      brief: "From network vulnerabilities to social engineering attacks, we monitor all potential threat vectors.",
      icon: "fas fa-shield-alt",
      details: "We implement multi-layered security that covers all attack vectors - from network infrastructure to application layers. Our academic projects have given us hands-on experience with penetration testing, vulnerability assessment, and secure coding practices.",
      features: [
        'End-to-end encryption',
        'Vulnerability scanning',
        'Social engineering protection',
        'Zero-day threat detection'
      ]
    },
    {
      number: "03",
      title: "Continuous Learning",
      brief: "Our system evolves with each new threat, constantly improving its predictive capabilities.",
      icon: "fas fa-brain",
      details: "Our system evolves daily, incorporating new threat intelligence from our global network. As students, we constantly update our knowledge with the latest research papers and security conferences, bringing fresh insights to our solution.",
      features: [
        'Automated threat intelligence updates',
        'Behavioral analysis engines',
        'Adaptive security protocols',
        'Academic research integration'
      ]
    },
    {
      number: "04",
      title: "Actionable Intelligence",
      brief: "We don't just alert you to threats - we provide clear mitigation strategies for each potential attack.",
      icon: "fas fa-chart-line",
      details: "We transform complex security data into clear, prioritized action items. Our user interface design coursework helped us create dashboards that make security management accessible to all technical levels.",
      features: [
        'Prioritized threat alerts',
        'Step-by-step remediation',
        'Executive-level reporting',
        'Customizable dashboards'
      ]
    },
    {
      number: "05",
      title: "Global Threat Network",
      brief: "Benefit from insights gathered across our worldwide network of protected organizations.",
      icon: "fas fa-globe",
      details: "Our system benefits from anonymized data across 150+ protected endpoints worldwide. For our semester project, we analyzed attack patterns from different regions to identify geographical threat variations.",
      features: [
        'Global threat heatmaps',
        'Regional attack pattern analysis',
        'Collaborative defense network',
        'Cross-border threat sharing'
      ]
    },
    {
      number: "06",
      title: "Student Innovation",
      brief: "Our academic background brings fresh perspectives and cutting-edge knowledge to cybersecurity.",
      icon: "fas fa-lightbulb",
      details: "As 4th semester students, we combine academic rigor with outside-the-box thinking. Our coursework in AI, networking, and security provides the perfect foundation for innovative cybersecurity solutions.",
      features: [
        'Cutting-edge academic knowledge',
        'Fresh perspectives on security',
        'Agile development approach',
        'Cost-effective solutions'
      ]
    }
  ];

  const [modalData, setModalData] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const openReasonModal = (reason) => {
    setModalData({
      title: reason.title,
      content: `
        <div class="wc-modal-content">
          <div class="wc-modal-header flex items-center gap-4 text-cyan-400 mb-6 pb-6 border-b border-cyan-400/30">
            <i class="${reason.icon} text-4xl"></i>
            <div>
              <h2 class="text-2xl font-bold font-rajdhani">${reason.title}</h2>
              <p class="text-gray-300 italic mt-2">${reason.brief}</p>
            </div>
          </div>
          <div class="wc-modal-body">
            <h3 class="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2 font-rajdhani">
              <i class="fas fa-info-circle"></i> Detailed Overview
            </h3>
            <p class="text-gray-300 mb-6">${reason.details}</p>
            
            <h3 class="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2 font-rajdhani">
              <i class="fas fa-list-check"></i> Key Features
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5">
              ${reason.features.map(feature => `
                <li class="text-gray-300 relative before:content-['▹'] before:absolute before:-left-5 before:text-purple-400">
                  ${feature}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `
    });
    setShowModal(true);
  };

  return (
    <section className="py-20 bg-gray-900/70">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16 font-rajdhani relative">
          WHY CHOOSE CYBERSHIELD
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-cyan-400/20 rounded-lg p-6 transition-all duration-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 cursor-pointer group perspective-1000 preserve-3d"
              onClick={() => openReasonModal(reason)}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
                card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'rotateY(0deg) rotateX(0deg)';
                card.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                  card.style.transition = 'none';
                }, 500);
              }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-shadow-lg group-hover:text-shadow-cyan-400/30">
                {reason.number}
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3 font-rajdhani">{reason.title}</h3>
              <p className="text-gray-300">{reason.brief}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <InfoModal 
          closeModal={() => setShowModal(false)} 
          title={modalData.title} 
          content={modalData.content} 
        />
      )}
    </section>
  );
};

// Timeline Section
const TimelineSection = () => {
  const milestones = [
    {
      year: "2022",
      title: "University Project",
      description: "CyberShield began as a university project in our 2nd semester, where we first conceptualized a predictive security system for our cybersecurity course."
    },
    {
      year: "2023",
      title: "First Prototype",
      description: "In our 3rd semester, we developed the initial prototype as part of our software engineering course, achieving 78% prediction accuracy in lab tests."
    },
    {
      year: "2024",
      title: "Beta Testing",
      description: "Currently in our 4th semester, we're testing CyberShield with university departments and local businesses, incorporating real-world feedback into our development."
    },
    {
      year: "Future",
      title: "Graduation Project",
      description: "We plan to develop CyberShield further as our final year project, expanding its capabilities and preparing it for commercial deployment."
    }
  ];

  return (
    <section className="py-20 bg-gray-900/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80')] bg-cover bg-center opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16 font-rajdhani relative">
          OUR JOURNEY
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"></span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform -translate-x-1/2"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 md:pr-0 md:pl-8' : 'pl-8 md:pl-0 md:pr-8'}`}
              style={{ 
                marginLeft: index % 2 === 0 ? 0 : '50%',
                marginRight: index % 2 === 0 ? '50%' : 0
              }}
            >
              <div 
                className={`bg-gray-800/70 border border-cyan-400/20 rounded-lg p-6 relative transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
              >
                <div 
                  className={`absolute top-8 w-4 h-4 bg-cyan-400 rounded-full transform rotate-45 ${index % 2 === 0 ? 'right-0 md:right-0 md:left-auto md:-mr-5' : 'left-0 md:left-0 md:right-auto md:-ml-5'}`}
                ></div>
                
                <div className="text-purple-400 font-bold mb-2 font-rajdhani">{milestone.year}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3 font-rajdhani">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
const CyberAbout = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-rajdhani font-bold">
      {/* Inline styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
      
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <WhyChooseUs />
      <TimelineSection />
    </div>
  );
};

export default CyberAbout;