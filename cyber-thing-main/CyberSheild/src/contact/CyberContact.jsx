import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Homepage/Header';
import Footer from '../Homepage/Footer';

const CyberContact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        subject: false,
        message: false
    });
    const [successMessage, setSuccessMessage] = useState(false);
    const [messages, setMessages] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = () => {
        const storedMessages = localStorage.getItem('cybershieldMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    };

    const saveMessage = (message) => {
        const updatedMessages = [...messages, message];
        localStorage.setItem('cybershieldMessages', JSON.stringify(updatedMessages));
        setMessages(updatedMessages);
    };

    const validateForm = () => {
        const newErrors = {
            firstName: !formData.firstName,
            lastName: !formData.lastName,
            email: !formData.email || !isValidEmail(formData.email),
            subject: !formData.subject,
            message: !formData.message
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newMessage = {
                id: Date.now(),
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone || 'Not provided',
                subject: formData.subject,
                message: formData.message,
                date: new Date().toLocaleString(),
                category: formData.subject
            };

            saveMessage(newMessage);
            setSuccessMessage(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setSuccessMessage(false);
            }, 5000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const filteredMessages = filter === 'all'
        ? messages
        : messages.filter(msg => msg.category === filter);

    const subjectDisplayNames = {
        'general': 'General Inquiry',
        'support': 'Technical Support',
        'sales': 'Sales Inquiry',
        'partnership': 'Partnership',
        'security': 'Security Incident'
    };

    return (
        <div style={styles.body}>
            <Header />

            <section style={styles.contactHero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>CONTACT CYBERSHIELD</h1>
                    <p style={styles.heroParagraph}>
                        Have questions about our threat prediction system? Need support with your cybersecurity? Reach out to our team - we're here to help secure your digital assets.
                    </p>
                </div>
            </section>

            <section style={styles.contactSection}>
                <h2 style={styles.sectionTitle}>GET IN TOUCH</h2>
                <div style={styles.contactContainer}>
                    <div style={styles.contactInfo}>
                        <h3 style={styles.contactInfoTitle}>Contact Information</h3>
                        <p style={styles.contactInfoParagraph}>
                            Our team is available to answer your questions and provide support for our cybersecurity solutions.
                        </p>

                        <div style={styles.contactMethod}>
                            <div style={styles.contactIcon}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 style={styles.contactMethodTitle}>Headquarters</h4>
                                <p style={styles.contactMethodText}>123 Cyber Security Blvd, Silicon Valley, CA 94025</p>
                            </div>
                        </div>

                        <div style={styles.contactMethod}>
                            <div style={styles.contactIcon}>
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 style={styles.contactMethodTitle}>Phone</h4>
                                <p style={styles.contactMethodText}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div style={styles.contactMethod}>
                            <div style={styles.contactIcon}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 style={styles.contactMethodTitle}>Email</h4>
                                <p style={styles.contactMethodText}>info@cybershield.com</p>
                            </div>
                        </div>

                        <div style={styles.contactMethod}>
                            <div style={styles.contactIcon}>
                                <i className="fas fa-clock"></i>
                            </div>
                            <div>
                                <h4 style={styles.contactMethodTitle}>Support Hours</h4>
                                <p style={styles.contactMethodText}>24/7 Emergency Support Available</p>
                            </div>
                        </div>

                        <div style={styles.contactMethod}>
                            <div style={styles.contactIcon}>
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div>
                                <h4 style={styles.contactMethodTitle}>Security Hotline</h4>
                                <p style={styles.contactMethodText}>+1 (555) 987-6543</p>
                                <small style={styles.contactMethodSmall}>For immediate security incidents only</small>
                            </div>
                        </div>
                    </div>

                    <div style={styles.contactFormContainer}>
                        <form onSubmit={handleSubmit} style={styles.form}>
                            <div style={styles.formRow}>
                                <div style={styles.formCol}>
                                    <div style={styles.formGroup}>
                                        <label htmlFor="firstName" style={styles.formLabel}>First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            style={{ ...styles.formControl, ...(errors.firstName ? styles.formControlError : {}) }}
                                            required
                                        />
                                        {errors.firstName && <div style={styles.errorMessage}>Please enter your first name</div>}
                                    </div>
                                </div>
                                <div style={styles.formCol}>
                                    <div style={styles.formGroup}>
                                        <label htmlFor="lastName" style={styles.formLabel}>Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            style={{ ...styles.formControl, ...(errors.lastName ? styles.formControlError : {}) }}
                                            required
                                        />
                                        {errors.lastName && <div style={styles.errorMessage}>Please enter your last name</div>}
                                    </div>
                                </div>
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="email" style={styles.formLabel}>Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ ...styles.formControl, ...(errors.email ? styles.formControlError : {}) }}
                                    required
                                />
                                {errors.email && <div style={styles.errorMessage}>Please enter a valid email address</div>}
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="phone" style={styles.formLabel}>Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={styles.formControl}
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="subject" style={styles.formLabel}>Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{ ...styles.formControl, ...(errors.subject ? styles.formControlError : {}) }}
                                    required
                                >
                                    <option value="" disabled selected>Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="sales">Sales Inquiry</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="security">Security Incident</option>
                                </select>
                                {errors.subject && <div style={styles.errorMessage}>Please select a subject</div>}
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="message" style={styles.formLabel}>Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ ...styles.formControl, ...styles.textareaControl, ...(errors.message ? styles.formControlError : {}) }}
                                    required
                                ></textarea>
                                {errors.message && <div style={styles.errorMessage}>Please enter your message</div>}
                            </div>

                            <button type="submit" style={styles.submitBtn}>SEND MESSAGE</button>

                            {successMessage && (
                                <div style={styles.successMessage}>
                                    <i className="fas fa-check-circle"></i> Your message has been sent successfully! We'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            <section style={styles.historySection}>
                <h2 style={styles.sectionTitle}>MESSAGE HISTORY</h2>
                <div style={styles.historyContainer}>
                    <div style={styles.historyHeader}>
                        <h3 style={styles.historyTitle}>Your Previous Messages</h3>
                        <div style={styles.historyFilter}>
                            <button
                                style={{ ...styles.filterBtn, ...(filter === 'all' ? styles.filterBtnActive : {}) }}
                                onClick={() => setFilter('all')}
                                data-filter="all"
                            >
                                All
                            </button>
                            <button
                                style={{ ...styles.filterBtn, ...(filter === 'general' ? styles.filterBtnActive : {}) }}
                                onClick={() => setFilter('general')}
                                data-filter="general"
                            >
                                General
                            </button>
                            <button
                                style={{ ...styles.filterBtn, ...(filter === 'support' ? styles.filterBtnActive : {}) }}
                                onClick={() => setFilter('support')}
                                data-filter="support"
                            >
                                Support
                            </button>
                            <button
                                style={{ ...styles.filterBtn, ...(filter === 'sales' ? styles.filterBtnActive : {}) }}
                                onClick={() => setFilter('sales')}
                                data-filter="sales"
                            >
                                Sales
                            </button>
                            <button
                                style={{ ...styles.filterBtn, ...(filter === 'partnership' ? styles.filterBtnActive : {}) }}
                                onClick={() => setFilter('partnership')}
                                data-filter="partnership"
                            >
                                Partnership
                            </button>
                            <button
                                style={{ ...styles.filterBtn, ...(filter === 'security' ? styles.filterBtnActive : {}) }}
                                onClick={() => setFilter('security')}
                                data-filter="security"
                            >
                                Security
                            </button>
                        </div>
                    </div>

                    <div style={styles.historyList}>
                        {filteredMessages.length > 0 ? (
                            filteredMessages
                                .sort((a, b) => b.id - a.id)
                                .map(message => {
                                    const dateObj = new Date(message.id);
                                    const formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                    const displayDate = `${dateObj.toLocaleDateString()} at ${formattedTime}`;

                                    return (
                                        <div key={message.id} style={styles.historyItem} data-category={message.category}>
                                            <div style={styles.historyItemHeader}>
                                                <span style={styles.historyItemName}>{message.firstName} {message.lastName}</span>
                                                <span style={styles.historyItemDate}>{displayDate}</span>
                                            </div>
                                            <div style={styles.historyItemSubject}>
                                                {subjectDisplayNames[message.category] || message.category}
                                            </div>
                                            <div style={styles.historyItemMessage}>{message.message}</div>
                                        </div>
                                    );
                                })
                        ) : (
                            <div style={styles.historyEmpty}>
                                <i className="fas fa-inbox" style={styles.historyEmptyIcon}></i>
                                <p>No messages found in your history.</p>
                                <p>Send us a message using the form above!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const styles = {
    body: {
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#0a0e24',
        color: '#e0e0e0',
        overflowX: 'hidden',
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 240, 255, 0.05) 0%, transparent 20%), radial-gradient(circle at 80% 70%, rgba(179, 0, 255, 0.05) 0%, transparent 20%)'
    },
    header: {
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 5%',
        backgroundColor: '#050814',
        boxShadow: '0 0 15px rgba(179, 0, 255, 1)',
        zIndex: 1000
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
    },
    logo: {
        height: '50px',
        filter: 'drop-shadow(0 0 5px #00f0ff)'
    },
    logoText: {
        fontSize: '1.5rem',
        fontWeight: 700,
        background: 'linear-gradient(90deg, #00f0ff, #b300ff)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 10px rgba(188, 19, 254, 0.5)'
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '30px'
    },
    navLink: {
        color: '#e0e0e0',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        position: 'relative'
    },
    sectionTitle: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '3rem',
        color: '#00f0ff',
        position: 'relative'
    },
    contactHero: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        opacity: 1, // ← Force fully opaque
        background: 'linear-gradient(rgba(5, 8, 20, 0.7), rgba(10, 14, 36, 0.9)), url(https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80) no-repeat center center/cover'
    },
    heroContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center'

    },
    heroTitle: {
        fontSize: '4.5rem',          // camelCase (no hyphen)
        marginBottom: '1.5rem',       // camelCase
        background: `linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--neon-green))`,
        WebkitBackgroundClip: 'text', // PascalCase for React
        backgroundClip: 'text',
        color: 'transparent',
        opacity: 1, // ← Force fully opaque
        textShadow: '0 0 20px rgba(188, 19, 254, 0.5)',
        fontWeight: 800,
        letterSpacing: '1px',
        lineHeight: 1.2,
        display: 'inline-block'       // Ensures proper clipping

    },
    heroParagraph: {
        fontSize: '1.5rem',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        lineHeight: 1.6,
    },
    contactSection: {
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(5, 8, 20, 0.7)'
    },
    contactContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
    },
    contactInfoTitle: {
        fontFamily: "'Roboto', sans-serif",
        color: '#00f0ff',
        fontSize: '1.5rem'
    },
    contactInfoParagraph: {
        lineHeight: 1.6
    },
    contactMethod: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    contactIcon: {
        fontSize: '1.5rem',
        color: '#00f0ff',
        minWidth: '40px'
    },
    contactMethodTitle: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '1.1rem',
        marginBottom: '0.3rem',
        color: '#00f0ff'
    },
    contactMethodText: {
        margin: 0
    },
    contactMethodSmall: {
        fontSize: '0.8rem',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    contactFormContainer: {
        background: 'rgba(10, 14, 36, 0.5)',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
    },
    form: {
        position: 'relative',
        zIndex: 1
    },
    formRow: {
        display: 'flex',
        margin: '0 -15px'
    },
    formCol: {
        flex: '0 0 50%',
        padding: '0 15px'
    },
    formGroup: {
        marginBottom: '1.5rem',
        position: 'relative'
    },
    formLabel: {
        display: 'block',
        marginBottom: '0.5rem',
        color: '#00f0ff',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '0.9rem',
        letterSpacing: '1px'
    },
    formControl: {
        width: '100%',
        padding: '0.8rem',
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        borderRadius: '4px',
        color: '#e0e0e0',
        fontFamily: "'Roboto', sans-serif",
        transition: 'all 0.3s ease'
    },
    formControlError: {
        borderColor: '#ff4d4d'
    },
    textareaControl: {
        minHeight: '150px',
        resize: 'vertical'
    },
    errorMessage: {
        color: '#ff4d4d',
        fontSize: '0.8rem',
        marginTop: '0.3rem',
        display: 'block'
    },
    submitBtn: {
        background: 'linear-gradient(90deg, #00f0ff, #b300ff)',
        color: '#0a0e24',
        border: 'none',
        padding: '0.8rem 2rem',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        width: '100%'
    },
    successMessage: {
        display: 'block',
        background: 'rgba(0, 255, 0, 0.1)',
        border: '1px solid rgba(0, 255, 0, 0.3)',
        color: '#00ff00',
        padding: '1rem',
        borderRadius: '4px',
        marginTop: '1rem',
        textAlign: 'center',
        animation: 'fadeIn 0.5s ease'
    },
    historySection: {
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(10, 14, 36, 0.9)'
    },
    historyContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)',
        padding: '2rem',
        background: 'rgba(5, 8, 20, 0.7)'
    },
    historyHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
        paddingBottom: '1rem'
    },
    historyTitle: {
        fontFamily: "'Roboto', sans-serif",
        color: '#00f0ff',
        margin: 0
    },
    historyFilter: {
        display: 'flex',
        gap: '1rem'
    },
    filterBtn: {
        background: 'transparent',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        color: '#e0e0e0',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: "'Rajdhani', sans-serif"
    },
    filterBtnActive: {
        background: 'rgba(0, 240, 255, 0.1)',
        borderColor: '#00f0ff'
    },
    historyList: {
        maxHeight: '400px',
        overflowY: 'auto',
        paddingRight: '1rem'
    },
    historyItem: {
        background: 'rgba(0, 0, 0, 0.2)',
        borderLeft: '3px solid #00f0ff',
        padding: '1.5rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        transition: 'all 0.3s ease'
    },
    historyItemHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '0.9rem'
    },
    historyItemName: {
        color: '#00f0ff',
        fontWeight: 500
    },
    historyItemDate: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.8rem'
    },
    historyItemSubject: {
        fontWeight: 500,
        marginBottom: '0.5rem',
        color: '#b300ff'
    },
    historyItemMessage: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '0.9rem',
        lineHeight: 1.5
    },
    historyEmpty: {
        textAlign: 'center',
        padding: '2rem',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    historyEmptyIcon: {
        fontSize: '3rem',
        marginBottom: '1rem',
        color: 'rgba(0, 240, 255, 0.3)'
    },
    footer: {
        backgroundColor: '#050814',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(0, 240, 255, 0.2)'
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        textAlign: 'left'
    },
    footerColumn: {
        marginBottom: '1rem'
    },
    footerColumnTitle: {
        fontFamily: "'Roboto', sans-serif",
        color: '#00f0ff',
        marginBottom: '1.5rem',
        fontSize: '1.3rem'
    },
    footerColumnText: {
        lineHeight: 1.6,
        marginBottom: '1rem'
    },
    footerList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    footerLink: {
        color: '#e0e0e0',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        display: 'inline-block',
        marginBottom: '0.8rem'
    },
    socialLinks: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem'
    },
    copyright: {
        marginTop: '3rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(10px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
    }

};

export default CyberContact;