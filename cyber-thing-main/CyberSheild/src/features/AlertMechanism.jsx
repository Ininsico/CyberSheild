import { useState } from 'react';
import { Link } from 'react-router-dom';

const AlertMechanism = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    slack: true,
    webhook: false,
    webhookUrl: ""
  });

  const [alertRules, setAlertRules] = useState([
    { id: 1, name: "Critical Threats", channels: ["email", "sms"], enabled: true, severity: "critical" },
    { id: 2, name: "Warning Threats", channels: ["email", "slack"], enabled: true, severity: "warning" },
    { id: 3, name: "Informational", channels: ["email"], enabled: false, severity: "info" }
  ]);

  const [activeTab, setActiveTab] = useState('settings');
  const [testResult, setTestResult] = useState(null);

  const handleSettingChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const toggleAlertRule = (id) => {
    setAlertRules(prev => 
      prev.map(rule => 
        rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  const handleTestAlert = (type) => {
    // Simulate API call
    setTestResult({ loading: true });
    
    setTimeout(() => {
      setTestResult({ 
        loading: false, 
        success: true,
        message: `${type} alert test sent successfully to all enabled channels`
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setTestResult(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gray-800 border-b border-indigo-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
              </svg>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cyber-Shield</h1>
            </div>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/alert-mechanism" className="text-white font-medium border-b-2 border-cyan-400 pb-1">
                    Alert Mechanism
                  </Link>
                </li>
                <li>
                  <Link to="/threat-history" className="text-gray-300 hover:text-white transition-colors">
                    Threat History
                  </Link>
                </li>
                <li>
                  <Link to="/mitigation-log" className="text-gray-300 hover:text-white transition-colors">
                    Mitigation Log
                  </Link>
                </li>
              </ul>
            </nav>
            
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Alert & Notification System</h1>
          <p className="text-gray-400">Configure how and where you receive security alerts</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-700">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-3 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'settings'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Notification Settings
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`py-3 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'rules'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Alert Rules
            </button>
            <button
              onClick={() => setActiveTab('test')}
              className={`py-3 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'test'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Test Alerts
            </button>
          </nav>
        </div>

        {/* Notification Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-400 mb-6">Notification Channels</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={notificationSettings.email}
                      onChange={() => handleSettingChange('email')}
                    />
                    <div className={`block w-12 h-6 rounded-full ${
                      notificationSettings.email ? 'bg-green-500/20' : 'bg-gray-700'
                    }`}></div>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                      notificationSettings.email ? 'translate-x-6 bg-green-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span className="text-gray-200">Email Notifications</span>
                  </div>
                </label>
                {notificationSettings.email && (
                  <p className="text-xs text-gray-400 mt-2">Alerts will be sent to your registered email address</p>
                )}
              </div>
              
              {/* SMS */}
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={notificationSettings.sms}
                      onChange={() => handleSettingChange('sms')}
                    />
                    <div className={`block w-12 h-6 rounded-full ${
                      notificationSettings.sms ? 'bg-green-500/20' : 'bg-gray-700'
                    }`}></div>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                      notificationSettings.sms ? 'translate-x-6 bg-green-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span className="text-gray-200">SMS Notifications</span>
                  </div>
                </label>
                {notificationSettings.sms && (
                  <p className="text-xs text-gray-400 mt-2">Alerts will be sent to your mobile number via SMS</p>
                )}
              </div>
              
              {/* Slack */}
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={notificationSettings.slack}
                      onChange={() => handleSettingChange('slack')}
                    />
                    <div className={`block w-12 h-6 rounded-full ${
                      notificationSettings.slack ? 'bg-green-500/20' : 'bg-gray-700'
                    }`}></div>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                      notificationSettings.slack ? 'translate-x-6 bg-green-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 15a2 2 0 1 1-2-2c.086 0 .167.015.25.025.083-.333.25-.625.458-.875a2 2 0 0 1 1.292-.65zm0-6c.086 0 .167.015.25.025.083-.333.25-.625.458-.875a2 2 0 1 1 1.292 2.65A1.993 1.993 0 0 1 6 9zm8 1a2 2 0 1 1 2-2c0 .086-.015.167-.025.25.333.083.625.25.875.458a2 2 0 0 1-2.85 1.292zm-5 5c0 .086-.015.167-.025.25.333.083.625.25.875.458a2 2 0 1 1-2.85-2.85A1.993 1.993 0 0 1 9 15zm11-5a2 2 0 1 1-2-2c.086 0 .167.015.25.025.083-.333.25-.625.458-.875a2 2 0 0 1 1.292-.65zm-3 1a2 2 0 0 1-2-2c0-.086.015-.167.025-.25-.333-.083-.625-.25-.875-.458a2 2 0 1 1 2.85 2.708zM15 9a2 2 0 1 1 2 2 1.993 1.993 0 0 1-.25-.025c-.083.333-.25.625-.458.875A2 2 0 0 1 15 9zm-3 5a2 2 0 0 1 2 2 1.993 1.993 0 0 1-.25.025c-.083-.333-.25-.625-.458-.875A2 2 0 0 1 12 14z"/>
                    </svg>
                    <span className="text-gray-200">Slack Integration</span>
                  </div>
                </label>
                {notificationSettings.slack && (
                  <p className="text-xs text-gray-400 mt-2">Alerts will be posted to your configured Slack channel</p>
                )}
              </div>
              
              {/* Webhook */}
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={notificationSettings.webhook}
                      onChange={() => handleSettingChange('webhook')}
                    />
                    <div className={`block w-12 h-6 rounded-full ${
                      notificationSettings.webhook ? 'bg-green-500/20' : 'bg-gray-700'
                    }`}></div>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                      notificationSettings.webhook ? 'translate-x-6 bg-green-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-200">Webhook Integration</span>
                  </div>
                </label>
                {notificationSettings.webhook && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={notificationSettings.webhookUrl}
                      onChange={(e) => setNotificationSettings(prev => ({
                        ...prev,
                        webhookUrl: e.target.value
                      }))}
                      placeholder="https://api.yourservice.com/webhook"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-400 mt-1">Enter the URL where alerts should be posted</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Alert Rules Tab */}
        {activeTab === 'rules' && (
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-green-400">Alert Rules</h2>
              
            </div>
            
            <div className="space-y-3">
              {alertRules.map(rule => (
                <div key={rule.id} className="bg-gray-900 rounded-lg border border-gray-700 p-4 hover:border-cyan-400 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-gray-200">{rule.name}</h3>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          rule.severity === 'critical' ? 'bg-red-900/50 text-red-400' :
                          rule.severity === 'warning' ? 'bg-yellow-900/50 text-yellow-400' :
                          'bg-cyan-900/50 text-cyan-400'
                        }`}>
                          {rule.severity}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {rule.channels.map(channel => (
                          <span 
                            key={channel} 
                            className={`text-xs px-2 py-1 rounded-full ${
                              notificationSettings[channel] 
                                ? 'bg-green-900/20 text-green-400 border border-green-800/50' 
                                : 'bg-gray-800 text-gray-500 border border-gray-700'
                            }`}
                          >
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={rule.enabled}
                        onChange={() => toggleAlertRule(rule.id)}
                      />
                      <div className={`w-11 h-6 rounded-full peer ${
                        rule.enabled 
                          ? 'bg-green-500/20 peer-checked:bg-green-500/20' 
                          : 'bg-gray-700'
                      }`}></div>
                      <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                        rule.enabled ? 'translate-x-5 bg-green-400' : 'bg-gray-400'
                      }`}></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Test Alerts Tab */}
        {activeTab === 'test' && (
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-6">Test Notification System</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <button 
                onClick={() => handleTestAlert('Critical')}
                className="bg-red-900/20 hover:bg-red-900/30 border border-red-800/50 text-red-400 px-6 py-4 rounded-lg flex flex-col items-center transition-colors"
              >
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Send Critical Alert</span>
                <span className="text-xs text-red-300 mt-1">Highest priority notification</span>
              </button>
              
              <button 
                onClick={() => handleTestAlert('Warning')}
                className="bg-yellow-900/20 hover:bg-yellow-900/30 border border-yellow-800/50 text-yellow-400 px-6 py-4 rounded-lg flex flex-col items-center transition-colors"
              >
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Send Warning Alert</span>
                <span className="text-xs text-yellow-300 mt-1">Medium priority notification</span>
              </button>
              
              <button 
                onClick={() => handleTestAlert('Informational')}
                className="bg-cyan-900/20 hover:bg-cyan-900/30 border border-cyan-800/50 text-cyan-400 px-6 py-4 rounded-lg flex flex-col items-center transition-colors"
              >
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Send Info Alert</span>
                <span className="text-xs text-cyan-300 mt-1">Low priority notification</span>
              </button>
            </div>
            
            {testResult?.loading && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400"></div>
              </div>
            )}
            
            {testResult?.success && !testResult.loading && (
              <div className="bg-green-900/20 border border-green-800/50 text-green-400 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{testResult.message}</span>
                </div>
              </div>
            )}
            
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Test Results Will Appear Here</h3>
              <p className="text-xs text-gray-500">When you send a test alert, the results will show which channels successfully received the notification.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AlertMechanism;