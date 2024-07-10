import React, { useState } from 'react';
import UserDropdown from './UserDropdown';
import MakeRequestForm from './MakeRequestForm';
import AvailableRecipientsTable from './AvailableRecipientsTable';
import DonationCampsTable from './DonationCampsTable';
import './MainScreen.css';

const MainScreen = () => {
    const [activeTab, setActiveTab] = useState('makeRequest');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="main-screen">
            <header className="app-header">
                <UserDropdown />
            </header>
            <nav className="tab-nav">
                <button 
                    className={`tab-button ${activeTab === 'makeRequest' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('makeRequest')}
                >
                    Make a request
                </button>
                <button 
                    className={`tab-button ${activeTab === 'availableRecipients' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('availableRecipients')}
                >
                    Available recipients
                </button>
                <button 
                    className={`tab-button ${activeTab === 'donationCamps' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('donationCamps')}
                >
                    Donation camps
                </button>
            </nav>
            <div className="tab-content">
                {activeTab === 'makeRequest' && (
                    <div className="make-request">
                        <MakeRequestForm />
                        
                    </div>
                )}
                {activeTab === 'availableRecipients' && (
                    <div className="available-recipients">
                        <AvailableRecipientsTable />
                    </div>
                )}
                {activeTab === 'donationCamps' && (
                    <div className="donation-camps">
                        <DonationCampsTable />
                        <div className="icon">🩸</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainScreen;
