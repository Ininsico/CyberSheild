import { useState, useEffect } from 'react';

const CyberThreatVisualization = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredAttack, setHoveredAttack] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const cards = document.querySelectorAll('.three-d-card');

    const handleMouseMove = (e, card) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      card.style.transition = 'all 0.5s ease';
      setTimeout(() => {
        card.style.transition = 'none';
      }, 500);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Real-Time Attack Monitoring',
      description: 'Our system detects threats as they emerge, providing instant alerts'
    },
    {
      image: 'https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg',
      title: 'Global Threat Map',
      description: 'Visual representation of cyber attacks happening worldwide'
    },
    {
      image: 'https://media.istockphoto.com/id/2111473301/photo/a-person-is-typing-on-a-laptop-with-the-word-ddos-on-the-screen.jpg?s=612x612&w=0&k=20&c=03XGlszADus8m4iaAfpkFhsnbZDEjseF2loWhpnLC6Q=',
      title: 'Predictive Analytics',
      description: 'AI algorithms predict potential attack vectors before they\'re exploited'
    }
  ];

  const threatCards = [
    {
      frontImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Malware Attacks',
      description: 'Visualization of how malware infiltrates systems and spreads across networks.',
      threatType: 'malware'
    },
    {
      frontImage: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Phishing Schemes',
      description: '3D model showing how phishing attacks trick users into revealing sensitive data.',
      threatType: 'phishing'
    },
    {
      frontImage: 'https://cdn.open-pr.com/W/5/W517570375_g.jpg',
      title: 'DDoS Attacks',
      description: 'Interactive visualization of distributed denial-of-service attack patterns.',
      threatType: 'ddos'
    }
  ];

  const recentAttacks = [
    {
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'SolarWinds Attack',
      shortDesc: 'Sophisticated supply chain attack that compromised numerous government and corporate networks through software updates.',
      longDesc: 'Discovered in December 2020, this attack affected over 18,000 organizations worldwide by compromising the SolarWinds Orion software update mechanism.',
      impact: 'Estimated $100 million in damages, compromised US government agencies.',
      threatType: 'solarwinds'
    },
    {
      image: 'https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Colonial Pipeline Attack',
      shortDesc: 'Ransomware attack that disrupted fuel supplies across the U.S. East Coast, highlighting vulnerabilities in critical infrastructure.',
      longDesc: 'May 2021 attack by DarkSide ransomware group that led to widespread fuel shortages and a $4.4 million ransom payment.',
      impact: '5,500 miles of pipeline shut down, affecting 45% of East Coast fuel supply.',
      threatType: 'colonial'
    },
    {
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'JBS Ransomware Attack',
      shortDesc: 'Attack on the world\'s largest meat processor that disrupted food supply chains globally, resulting in an $11 million ransom payment.',
      longDesc: 'June 2021 attack attributed to REvil ransomware group that affected operations in Australia, Canada, and the United States.',
      impact: 'Temporary shutdown of 9 U.S. beef plants accounting for 25% of American capacity.',
      threatType: 'jbs'
    }
  ];

  const threatContent = {
    malware: `
      <h3 style="color: var(--neon-blue); margin-bottom: 20px;">Malware Attack Analysis</h3>
      <p style="margin-bottom: 15px;">Malware, short for malicious software, is any software intentionally designed to cause damage to a computer, server, client, or computer network.</p>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Common Types:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;"><strong>Viruses:</strong> Attach to clean files and infect other clean files</li>
        <li style="margin-bottom: 8px;"><strong>Trojans:</strong> Disguised as legitimate software</li>
        <li style="margin-bottom: 8px;"><strong>Spyware:</strong> Steals your internet usage data</li>
        <li style="margin-bottom: 8px;"><strong>Ransomware:</strong> Locks your files until you pay a ransom</li>
        <li style="margin-bottom: 8px;"><strong>Worms:</strong> Infect entire networks of devices</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Protection Measures:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;">Install reputable antivirus and anti-malware software</li>
        <li style="margin-bottom: 8px;">Keep all systems and software updated</li>
        <li style="margin-bottom: 8px;">Be cautious with email attachments and downloads</li>
        <li style="margin-bottom: 8px;">Use a firewall to monitor network traffic</li>
        <li style="margin-bottom: 8px;">Implement least privilege access controls</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Our Detection Methods:</h4>
      <p style="margin-bottom: 15px;">Our AI system uses behavior-based detection to identify malware by analyzing patterns of activity rather than relying solely on signature databases. This allows us to detect zero-day threats that haven't been seen before.</p>
    `,
    phishing: `
      <h3 style="color: var(--neon-blue); margin-bottom: 20px;">Phishing Attack Analysis</h3>
      <p style="margin-bottom: 15px;">Phishing is a cybercrime in which targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data.</p>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Common Techniques:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;"><strong>Email Phishing:</strong> Mass emails pretending to be from reputable companies</li>
        <li style="margin-bottom: 8px;"><strong>Spear Phishing:</strong> Targeted attacks against specific individuals</li>
        <li style="margin-bottom: 8px;"><strong>Whaling:</strong> Targeting high-profile employees like CEOs</li>
        <li style="margin-bottom: 8px;"><strong>Vishing:</strong> Voice phishing using phone calls</li>
        <li style="margin-bottom: 8px;"><strong>Smishing:</strong> SMS text message phishing</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Protection Measures:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;">Verify sender email addresses carefully</li>
        <li style="margin-bottom: 8px;">Hover over links to see actual URLs before clicking</li>
        <li style="margin-bottom: 8px;">Never provide sensitive information via email or phone</li>
        <li style="margin-bottom: 8px;">Use multi-factor authentication</li>
        <li style="margin-bottom: 8px;">Report suspicious messages to your IT department</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Our Detection Methods:</h4>
      <p style="margin-bottom: 15px;">Our system analyzes email headers, content, and embedded links using natural language processing and machine learning to detect phishing attempts with 99.2% accuracy, even for sophisticated spear phishing campaigns.</p>
    `,
    ddos: `
      <h3 style="color: var(--neon-blue); margin-bottom: 20px;">DDoS Attack Analysis</h3>
      <p style="margin-bottom: 15px;">A Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt normal traffic of a targeted server, service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.</p>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Common Types:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;"><strong>Volume-Based Attacks:</strong> Overwhelm bandwidth (UDP floods, ICMP floods)</li>
        <li style="margin-bottom: 8px;"><strong>Protocol Attacks:</strong> Exploit server resources (SYN floods, Ping of Death)</li>
        <li style="margin-bottom: 8px;"><strong>Application Layer Attacks:</strong> Target web applications (HTTP floods, Slowloris)</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Protection Measures:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;">Implement network redundancy and load balancing</li>
        <li style="margin-bottom: 8px;">Use DDoS protection services</li>
        <li style="margin-bottom: 8px;">Configure firewalls and routers to reject bogus traffic</li>
        <li style="margin-bottom: 8px;">Monitor network traffic for unusual patterns</li>
        <li style="margin-bottom: 8px;">Have an incident response plan in place</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Our Detection Methods:</h4>
      <p style="margin-bottom: 15px;">Our system uses advanced traffic analysis to distinguish between legitimate and malicious traffic patterns. We can detect and mitigate DDoS attacks within seconds by analyzing packet attributes, traffic rates, and behavioral patterns across our global network of sensors.</p>
    `,
    solarwinds: `
      <h3 style="color: var(--neon-blue); margin-bottom: 20px;">SolarWinds Supply Chain Attack</h3>
      <p style="margin-bottom: 15px;">The SolarWinds hack was a sophisticated supply chain attack discovered in December 2020 that compromised the Orion software updates to distribute malware to approximately 18,000 customers.</p>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Attack Details:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;"><strong>Method:</strong> Compromised software build system to insert backdoor</li>
        <li style="margin-bottom: 8px;"><strong>Malware Used:</strong> SUNBURST backdoor</li>
        <li style="margin-bottom: 8px;"><strong>Duration:</strong> Active from March to December 2020</li>
        <li style="margin-bottom: 8px;"><strong>Targets:</strong> Government agencies and Fortune 500 companies</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Impact:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;">Compromised multiple US government agencies</li>
        <li style="margin-bottom: 8px;">Estimated $100 million in damages</li>
        <li style="margin-bottom: 8px;">Exposed vulnerabilities in software supply chains</li>
        <li style="margin-bottom: 8px;">Led to major cybersecurity policy changes</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Lessons Learned:</h4>
      <p style="margin-bottom: 15px;">This attack demonstrated the critical need for software supply chain security, including code signing, build system protection, and thorough vetting of third-party components. Our platform now includes supply chain monitoring to detect similar attacks.</p>
    `,
    colonial: `
      <h3 style="color: var(--neon-blue); margin-bottom: 20px;">Colonial Pipeline Ransomware Attack</h3>
      <p style="margin-bottom: 15px;">The Colonial Pipeline ransomware attack in May 2021 was a cyberattack against the Colonial Pipeline Company that led to widespread disruption in the supply of gasoline, jet fuel, and other petroleum products in the southeastern United States.</p>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Attack Details:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;"><strong>Method:</strong> Compromised VPN account with stolen password</li>
        <li style="margin-bottom: 8px;"><strong>Ransomware:</strong> DarkSide variant</li>
        <li style="margin-bottom: 8px;"><strong>Payment:</strong> $4.4 million in Bitcoin (partially recovered)</li>
        <li style="margin-bottom: 8px;"><strong>Duration:</strong> Pipeline shut down for 6 days</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Impact:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;">5,500 miles of pipeline affected</li>
        <li style="margin-bottom: 8px;">45% of East Coast fuel supply disrupted</li>
        <li style="margin-bottom: 8px;">Widespread fuel shortages and panic buying</li>
        <li style="margin-bottom: 8px;">Led to emergency declarations in several states</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Lessons Learned:</h4>
      <p style="margin-bottom: 15px;">This attack highlighted the vulnerability of critical infrastructure to ransomware and the importance of securing remote access systems. Our platform now includes specialized monitoring for industrial control systems and critical infrastructure networks.</p>
    `,
    jbs: `
      <h3 style="color: var(--neon-blue); margin-bottom: 20px;">JBS Ransomware Attack</h3>
      <p style="margin-bottom: 15px;">The JBS ransomware attack in June 2021 targeted JBS USA, the American subsidiary of the world's largest meat processing company, leading to shutdowns at plants across the United States, Australia, and Canada.</p>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Attack Details:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;"><strong>Method:</strong> Likely phishing email leading to network compromise</li>
        <li style="margin-bottom: 8px;"><strong>Ransomware:</strong> REvil (Sodinokibi) variant</li>
        <li style="margin-bottom: 8px;"><strong>Payment:</strong> $11 million in Bitcoin</li>
        <li style="margin-bottom: 8px;"><strong>Duration:</strong> Operations affected for several days</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Impact:</h4>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 8px;">9 U.S. beef plants shut down (25% of capacity)</li>
        <li style="margin-bottom: 8px;">Global meat supply chain disruptions</li>
        <li style="margin-bottom: 8px;">Significant financial losses</li>
        <li style="margin-bottom: 8px;">Highlighted food sector vulnerabilities</li>
      </ul>
      
      <h4 style="color: var(--neon-purple); margin: 20px 0 10px;">Lessons Learned:</h4>
      <p style="margin-bottom: 15px;">This attack demonstrated how ransomware can disrupt essential supply chains and the importance of having robust backup systems and incident response plans. Our platform now includes specialized monitoring for food and agriculture sector threats.</p>
    `
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleTestSubmit = () => {
    const answers = {
      q1: 'b',
      q2: 'c',
      q3: 'c'
    };

    let correct = 0;
    for (const question in answers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answers[question]) {
        correct++;
      }
    }

    setScore(correct);
    setTestSubmitted(true);
  };

  const openThreatModal = (threatType) => {
    setModalContent(threatContent[threatType]);
    setIsModalOpen(true);
  };

  const styles = {
    root: {
      '--neon-blue': '#0ff0fc',
      '--neon-purple': '#bc13fe',
      '--dark-bg': '#0a0a20',
      '--darker-bg': '#050510',
      '--text-color': '#e0e0ff',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: 'var(--dark-bg)',
      color: 'var(--text-color)',
      overflowX: 'hidden',
      lineHeight: 1.6
    },
    sectionTitle: {
      fontSize: '2.5rem',
      marginBottom: '50px',
      color: 'var(--neon-blue)',
      textShadow: '0 0 10px var(--neon-blue)',
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center',
      width: '100%'
    },
    sectionTitleAfter: {
      content: '""',
      position: 'absolute',
      width: '50%',
      height: '3px',
      bottom: '-10px',
      left: '25%',
      background: 'linear-gradient(90deg, transparent, var(--neon-purple), transparent)'
    },
    factText: {
      fontSize: '1.2rem',
      marginBottom: '30px',
      textAlign: 'center',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    carouselContainer: {
      position: 'relative',
      maxWidth: '1200px',
      margin: '40px auto',
      overflow: 'hidden',
      borderRadius: '10px',
      boxShadow: '0 0 30px rgba(11, 240, 252, 0.3)'
    },
    carouselSlides: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      height: '400px',
      transform: `translateX(-${currentSlide * 100}%)`
    },
    carouselSlide: {
      minWidth: '100%',
      position: 'relative'
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    carouselCaption: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(5, 5, 16, 0.8)',
      padding: '20px',
      textAlign: 'center'
    },
    carouselCaptionH3: {
      color: 'var(--neon-blue)',
      marginBottom: '10px'
    },
    carouselCaptionP: {
      fontSize: '1.1rem'
    },
    carouselNav: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      transform: 'translateY(-50%)',
      zIndex: 10
    },
    carouselNavButton: {
      background: 'rgba(11, 240, 252, 0.5)',
      border: 'none',
      color: 'white',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '1.5rem',
      transition: 'all 0.3s ease'
    },
    carouselNavButtonHover: {
      background: 'var(--neon-blue)'
    },
    carouselIndicators: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(11, 240, 252, 0.3)',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeIndicator: {
      background: 'var(--neon-blue)',
      transform: 'scale(1.2)'
    },
    threeDContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '40px',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    threeDCard: {
      width: '350px',
      height: '350px',
      perspective: '1000px'
    },
    threeDInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d'
    },
    threeDCardHover: {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0, 240, 255, 0.3)'
    },
    threeDNumber: {
      transition: 'all 0.3s ease',
    },
    threeDNumberHover: {
      transform: 'scale(1.2)',
      textShadow: '0 0 10px var(--neon-blue)'
    },
    threeDInnerHover: {
      transform: 'rotateY(180deg)'
    },
    attackCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 10px 20px rgba(0, 240, 255, 0.1)'
    },
    memberPhoto: {
      filter: 'grayscale(20%)',
      transition: 'all 0.3s ease'
    },
    memberPhotoHover: {
      filter: 'grayscale(0%)',
      transform: 'scale(1.05)'
    },
    threeDFront: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 0 20px rgba(11, 240, 252, 0.3)',
      backgroundColor: 'var(--darker-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--neon-blue)'
    },
    threeDBack: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 0 20px rgba(11, 240, 252, 0.3)',
      backgroundColor: 'var(--darker-bg)',
      transform: 'rotateY(180deg)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '1px solid var(--neon-purple)'
    },
    threeDImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    threeDBackH3: {
      color: 'var(--neon-blue)',
      marginBottom: '15px'
    },
    learnMore: {
      color: 'var(--neon-purple)',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-block',
      marginTop: '10px',
      transition: 'all 0.3s ease'
    },
    learnMoreHover: {
      color: 'var(--neon-blue)',
      textShadow: '0 0 10px rgba(11, 240, 252, 0.5)'
    },
    factCard: {
      background: 'rgba(10, 10, 40, 0.7)',
      borderRadius: '10px',
      padding: '30px',
      margin: '20px auto',
      maxWidth: '1200px',
      border: '1px solid rgba(11, 240, 252, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      textAlign: 'left'
    },
    factCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(11, 240, 252, 0.2)',
      border: '1px solid var(--neon-blue)'
    },
    factImage: {
      width: '300px',
      height: '200px',
      borderRadius: '8px',
      objectFit: 'cover',
      boxShadow: '0 0 20px rgba(11, 240, 252, 0.3)',
      border: '1px solid var(--neon-purple)'
    },
    factContent: {
      flex: 1
    },
    factTitle: {
      fontSize: '1.8rem',
      color: 'var(--neon-purple)',
      marginBottom: '20px'
    },
    attackList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '40px'
    },
    attackCard: {
      background: 'rgba(20, 20, 60, 0.7)',
      borderRadius: '8px',
      padding: 0,
      width: '350px',
      border: '1px solid var(--neon-blue)',
      boxShadow: '0 0 10px rgba(11, 240, 252, 0.3)',
      transition: 'all 0.3s ease',
      perspective: '1000px',
      position: 'relative',
      height: '400px'
    },
    attackCardInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d'
    },
    attackCardFront: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'var(--darker-bg)'
    },
    attackCardBack: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'var(--darker-bg)',
      transform: 'rotateY(180deg)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '1px solid var(--neon-purple)'
    },
    attackCardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderBottom: '2px solid var(--neon-purple)'
    },
    attackCardFrontContent: {
      padding: '20px'
    },
    attackName: {
      fontSize: '1.5rem',
      color: 'var(--neon-blue)',
      marginBottom: '15px'
    },
    attackDesc: {
      fontSize: '1rem',
      marginBottom: '20px',
      lineHeight: 1.6
    },
    safetyTest: {
      margin: '50px auto 0',
      padding: '40px',
      background: 'linear-gradient(135deg, rgba(11, 240, 252, 0.1), rgba(188, 19, 254, 0.1))',
      borderRadius: '10px',
      maxWidth: '1200px',
      border: '1px solid var(--neon-blue)',
      boxShadow: '0 0 30px rgba(11, 240, 252, 0.2)',
      textAlign: 'center'
    },

    testContainer: {
      display: isTestStarted ? 'block' : 'none',
      marginTop: '30px',
      textAlign: 'left'
    },
    testQuestion: {
      marginBottom: '20px',
      padding: '15px',
      background: 'rgba(10, 10, 40, 0.5)',
      borderRadius: '8px',
      borderLeft: '3px solid var(--neon-purple)'
    },
    testOptions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    testOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    },
    testButton: {
      padding: '12px 30px',
      background: 'transparent',
      color: 'var(--neon-blue)',
      border: '1px solid var(--neon-blue)',
      borderRadius: '30px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '15px',
      fontWeight: 'bold'
    },
    testButtonHover: {
      background: 'var(--neon-blue)',
      color: 'var(--darker-bg)',
      boxShadow: '0 0 25px var(--neon-blue)'
    },
    testResults: {
      display: testSubmitted ? 'block' : 'none',
      marginTop: '30px',
      padding: '20px',
      background: 'rgba(10, 10, 40, 0.7)',
      borderRadius: '8px',
      border: '1px solid var(--neon-purple)'
    },
    securityMeter: {
      height: '20px',
      background: 'rgba(10, 10, 40, 0.9)',
      borderRadius: '10px',
      margin: '20px 0',
      overflow: 'hidden',
      border: '1px solid var(--neon-blue)'
    },
    meterFill: {
      height: '100%',
      background: 'linear-gradient(90deg, var(--neon-purple), var(--neon-blue))',
      width: `${(score / 3) * 100}%`,
      transition: 'width 1s ease'
    },
    recommendations: {
      textAlign: 'left',
      marginTop: '20px'
    },
    recommendation: {
      marginBottom: '10px',
      paddingLeft: '20px',
      position: 'relative'
    },
    recommendationBefore: {
      content: '"→"',
      position: 'absolute',
      left: 0,
      color: 'var(--neon-purple)'
    },
    modal: {
      display: isModalOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 2000,
      overflowY: 'auto'
    },
    modalContent: {
      backgroundColor: 'var(--darker-bg)',
      margin: '5% auto',
      padding: '30px',
      border: '1px solid var(--neon-blue)',
      borderRadius: '10px',
      width: '80%',
      maxWidth: '900px',
      boxShadow: '0 0 30px var(--neon-purple)',
      position: 'relative'
    },
    closeModal: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      fontSize: '1.8rem',
      color: 'var(--neon-blue)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    closeModalHover: {
      color: 'var(--neon-purple)',
      transform: 'rotate(90deg)'
    },
    modalTitle: {
      color: 'var(--neon-blue)',
      marginBottom: '20px',
      fontSize: '2rem'
    },
    ctaButton: {
      display: 'inline-block',
      padding: '15px 35px',
      background: 'linear-gradient(45deg, var(--neon-blue), var(--neon-purple))',
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
      zIndex: 1,
        '&:hover': {  
        transform: 'translateY(-3px)',
        boxShadow: '0 0 25px rgba(11, 240, 252, 0.8)',
        letterSpacing: '1.5px',
      },
      '&::before': {  
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        transition: '0.5s',
        zIndex: -1,
      },
      '&:hover::before': {  
        left: '100%',
      },
    },
    ctaButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 0 25px rgba(11, 240, 252, 0.8)',
      letterSpacing: '1.5px'
    }
  };

  return (
    <div style={styles.root}>

      <section style={{ padding: '80px 5%', backgroundColor: 'var(--darker-bg)', textAlign: 'center', margin: '0 auto', maxWidth: '100%' }}>
        <h2 style={styles.sectionTitle}>Cyber Threat Visualization</h2>
        <p style={styles.factText}>Every 39 seconds, a new cyber attack occurs. Explore our threat visualization carousel.</p>
        <div style={styles.carouselContainer}>
          <div style={styles.carouselSlides}>
            {slides.map((slide, index) => (
              <div key={index} style={styles.carouselSlide}>
                <img src={slide.image} alt={slide.title} style={styles.carouselImage} />
                <div style={styles.carouselCaption}>
                  <h3 style={styles.carouselCaptionH3}>{slide.title}</h3>
                  <p style={styles.carouselCaptionP}>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.carouselNav}>
            <button
              style={styles.carouselNavButton}
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              style={styles.carouselNavButton}
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div style={styles.carouselIndicators}>
            {slides.map((_, index) => (
              <span
                key={index}
                style={{
                  ...styles.indicator,
                  ...(index === currentSlide ? styles.activeIndicator : {})
                }}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: 'var(--dark-bg)' }}>
        <h2 style={styles.sectionTitle}>3D Threat Visualization</h2>
        <p style={styles.factText}>Interactive 3D models showing different types of cyber threats</p>

        <div style={styles.threeDContainer}>
          {threatCards.map((card, index) => (
            <div
              key={index}
              style={{
                ...styles.threeDCard,
                ...(hoveredCard === index ? styles.threeDCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                ...styles.threeDInner,
                ...(hoveredCard === index ? styles.threeDInnerHover : {})
              }}>
                <div style={styles.threeDFront}>
                  <img src={card.frontImage} alt={card.title} style={styles.threeDImage} />
                </div>
                <div style={styles.threeDBack}>
                  <h3 style={styles.threeDBackH3}>{card.title}</h3>
                  <p>{card.description}</p>
                  <a
                    href="#"
                    style={styles.learnMore}
                    onClick={(e) => {
                      e.preventDefault();
                      openThreatModal(card.threatType);
                    }}
                  >
                    Detailed Analysis
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: 'var(--darker-bg)', textAlign: 'center' }}>
        <h2 style={styles.sectionTitle}>Cyber Threat Intelligence</h2>

        <div style={styles.factCard}>
          <img
            src="https://1602894.fs1.hubspotusercontent-na1.net/hub/1602894/hubfs/136726612_m_normal_none%20%281%29%20%281%29.webp?width=1170&name=136726612_m_normal_none%20%281%29%20%281%29.webp"
            alt="Cyber Attack Statistics"
            style={styles.factImage}
          />
          <div style={styles.factContent}>
            <h3 style={styles.factTitle}>DID YOU KNOW?</h3>
            <p style={styles.factText}>
              Cybercrime damages are predicted to cost the world $10.5 trillion annually by 2025.
              Our AI system analyzes over 1 million threat indicators per second, detecting
              anomalies with 99.8% accuracy before they become breaches.
            </p>
            <p style={styles.factText}>
              The average time to identify a breach is 207 days. Our predictive algorithms
              reduce this to milliseconds, giving you the critical advantage against attackers.
            </p>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Recent Cyber Attacks</h2>

        <div style={styles.attackList}>
          {recentAttacks.map((attack, index) => (
            <div
              key={index}
              style={{
                ...styles.attackCard,
                ...(hoveredAttack === index ? styles.attackCardHover : {})
              }}
              onMouseEnter={() => setHoveredAttack(index)}
              onMouseLeave={() => setHoveredAttack(null)}
            >
              <div style={styles.attackCardInner}>
                <div style={styles.attackCardFront}>
                  <img src={attack.image} alt={attack.name} style={styles.attackCardImage} />
                  <div style={styles.attackCardFrontContent}>
                    <h4 style={styles.attackName}>{attack.name}</h4>
                    <p style={styles.attackDesc}>{attack.shortDesc}</p>
                  </div>
                </div>
                <div style={styles.attackCardBack}>
                  <h4 style={styles.attackName}>{attack.name}</h4>
                  <p style={styles.attackDesc}>{attack.longDesc}</p>
                  <p style={styles.attackDesc}>
                    <strong>Impact:</strong> {attack.impact}
                  </p>
                  <a
                    href="#"
                    style={styles.learnMore}
                    onClick={(e) => {
                      e.preventDefault();
                      openThreatModal(attack.threatType);
                    }}
                  >
                    Detailed Analysis
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.safetyTest}>
          <h3>Cyber Security Safety Test</h3>
          <p>Test your knowledge of cyber threats and learn how to protect yourself</p>
          <button
            style={styles.ctaButton}
            onClick={() => setIsTestStarted(true)}
          >
            Start Test
          </button>

          <div style={styles.testContainer}>
            <div style={styles.testQuestion}>
              <h4>1. What is the most common attack vector for ransomware?</h4>
              <div style={styles.testOptions}>
                <label style={styles.testOption}>
                  <input type="radio" name="q1" value="a" /> Physical device theft
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q1" value="b" /> Phishing emails
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q1" value="c" /> Social media posts
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q1" value="d" /> Public WiFi networks
                </label>
              </div>
            </div>

            <div style={styles.testQuestion}>
              <h4>2. Which of these is NOT a recommended practice for password security?</h4>
              <div style={styles.testOptions}>
                <label style={styles.testOption}>
                  <input type="radio" name="q2" value="a" /> Using a password manager
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q2" value="b" /> Changing passwords every 30 days
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q2" value="c" /> Using the same password across multiple sites
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q2" value="d" /> Enabling two-factor authentication
                </label>
              </div>
            </div>

            <div style={styles.testQuestion}>
              <h4>3. What should you do if you suspect a phishing attempt?</h4>
              <div style={styles.testOptions}>
                <label style={styles.testOption}>
                  <input type="radio" name="q3" value="a" /> Reply to ask for verification
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q3" value="b" /> Click links to check their legitimacy
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q3" value="c" /> Report it to your IT department
                </label>
                <label style={styles.testOption}>
                  <input type="radio" name="q3" value="d" /> Forward it to colleagues as a warning
                </label>
              </div>
            </div>

            <button
              style={styles.testButton}
              onClick={handleTestSubmit}
            >
              Submit Test
            </button>
          </div>

          <div style={{ ...styles.testResults, display: testSubmitted ? 'block' : 'none' }}>
            <h3>Your Cyber Safety Score</h3>
            <div style={styles.securityMeter}>
              <div style={styles.meterFill}></div>
            </div>
            <p>You scored {score}/3 on the cyber safety test</p>
            <div style={styles.recommendations}>
              <h4>Recommendations:</h4>
              <p style={styles.recommendation}>Use a password manager to create and store unique passwords</p>
              <p style={styles.recommendation}>Enable multi-factor authentication on all important accounts</p>
              <p style={styles.recommendation}>Regularly update your software and operating systems</p>
              <p style={styles.recommendation}>Be skeptical of unsolicited communications asking for information</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: 'var(--darker-bg)', textAlign: 'center' }}>
        <h2 style={styles.sectionTitle}>Contact Our Security Experts</h2>

        <div style={styles.factCard}>
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Contact Security Team"
            style={styles.factImage}
          />
          <div style={styles.factContent}>
            <h3 style={styles.factTitle}>24/7 SECURITY OPERATIONS CENTER</h3>
            <p style={styles.factText}>
              Our team of cybersecurity experts is available around the clock to assist with threat detection,
              incident response, and security strategy. Whether you're experiencing an active breach or want
              to proactively secure your systems, we're here to help.
            </p>
            <p style={styles.factText}>
              <strong>Emergency Hotline:</strong> +92(333)33333333<br />
              <strong>Email:</strong> security@cyberpredict.io<br />
              <strong>Enterprise Support:</strong> enterprise@cyberpredict.io
            </p>
            <a href="/contact" style={styles.ctaButton}>Request Consultation</a>
          </div>
        </div>
      </section>

      <div style={{ ...styles.modal, display: isModalOpen ? 'block' : 'none' }}>
        <div style={styles.modalContent}>
          <span
            style={styles.closeModal}
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </span>
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        </div>
      </div>
    </div>
  );
};

export default CyberThreatVisualization;