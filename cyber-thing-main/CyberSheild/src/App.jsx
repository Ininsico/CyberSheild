import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import Futures from './Futurepage/Future';
import Contact from './contact/Contact';
import About from './about/about';
import Features from './features/features';
import Dashboard from './features/Dashboard';
import MitigationLog from './features/Migitationlog';
import RealTimeMonitoring from './features/RealTimeMonitoring';
import ThreatClassification from './features/ThreatClassification';
import ScalableDesign from './features/ScalableDesign';
import AdminControl from './features/AdminControl';
import AlertMechanism from './features/AlertMechanism';
import ThreatHistory from './features/ThreatHistory';
import CyberpunkAuthPortal from './resgistrationportal/login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/futures" element={<Futures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/dashboard' element={<CyberpunkAuthPortal />} />
        <Route path='/loggedindashboard' element={<Dashboard />} />
        <Route path='/realtimemonitoring' element={<RealTimeMonitoring />} />
        <Route path='/admincontrol' element={<AdminControl />} />
        <Route path='/scalabledesign' element={<ScalableDesign />} />
        <Route path='/threatclassification' element={<ThreatClassification />} />
        <Route path='/alertmechanism' element={<AlertMechanism />} />
        <Route path='/mitigationactions' element={<MitigationLog />} />
        <Route path='/threathistory' element={<ThreatHistory />} />
      </Routes>
    </Router>
  );
}
export default App