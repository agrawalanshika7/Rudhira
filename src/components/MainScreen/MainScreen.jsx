import React, { useState } from 'react';
import UserDropdown from './UserDropdown';
import MakeRequestForm from './MakeRequestForm';
import AvailableRecipientsTable from './AvailableRecipientsTable';
import DonationCampsTable from './DonationCampsTable';
import './MainScreen.css';

const MainScreen = () => {
    const [activeTab, setActiveTab] = useState('makeRequest');
    const [recipients, setRecipients] = useState([]); // State to manage recipients

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const addRecipient = (newRecipient) => {
        setRecipients([...recipients, newRecipient]); // Add new recipient to the list
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
                        <MakeRequestForm addRecipient={addRecipient} /> {/* Pass addRecipient function */}
                    </div>
                )}
                {activeTab === 'availableRecipients' && (
                    <div className="available-recipients">
                        <AvailableRecipientsTable recipients={recipients} /> {/* Pass recipients data */}
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

