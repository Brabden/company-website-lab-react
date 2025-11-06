import { useState } from 'react';
import './App.css';
import Home from './components/HomePage.jsx';
import Navbar from './components/NavbarMain.jsx'
import CompanyHistory from './components/CompanyHistory.jsx'
import PastWork from './components/PastWork.jsx';
import Staff from './components/Staff.jsx';
import ContactUs from './components/ContactUs.jsx';
import ExternalLinks from './components/ExternalLinks.jsx';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: <Home />,
    companyHistory: <CompanyHistory />,
    pastWork: <PastWork />,
    staff: <Staff />,
    contactUs : <ContactUs />,
    externalLinks: <ExternalLinks />,
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <div className="section-container">
        {sections[activeSection]}
      </div>
      <footer>
        <p>&copy; 2015-2025 Interesting Company, All Rights Reserved</p>
      </footer>
    </div>

  );
};

export default App;