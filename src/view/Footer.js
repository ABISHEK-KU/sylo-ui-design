import React, { useState } from 'react';
import '../view/style/Footer.css';

export default function Footer() {
  const [selectedSection, setSelectedSection] = useState('sylo');

  const handleSectionClick = (sectionName) => {
    setSelectedSection(sectionName);
  };

  return (
    <footer className='footer'>
      <div
        className={`footer-section ${selectedSection === 'sylo' ? 'selected' : ''}`}
        onClick={() => handleSectionClick('sylo')}
      >
        <i className="bi bi-house-door"></i>
        <span>Sylo</span>
      </div>
      <div
        className={`footer-section ${selectedSection === 'search' ? 'selected' : ''}`}
        onClick={() => handleSectionClick('search')}
      >
        <i className="bi bi-search"></i>
        <span>Search</span>
      </div>
      <div
        className={`footer-section ${selectedSection === 'orders' ? 'selected' : ''}`}
        onClick={() => handleSectionClick('orders')}
      >
        <i className="bi bi-list-ul"></i>
        <span>Orders</span>
      </div>
      <div
        className={`footer-section ${selectedSection === 'profile' ? 'selected' : ''}`}
        onClick={() => handleSectionClick('profile')}
      >
        <i className="bi bi-person-circle"></i>
        <span>Profile</span>
      </div>
    </footer>
  );
}
