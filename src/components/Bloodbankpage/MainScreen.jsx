import React, { useState } from 'react';
import UserDropdown from './UserDropdown';
import MakePostForm from './MakePostForm';
import AvailableRecipientsTable from './AvailableRecipientsTable';
import DonationCampsTable from './DonationCampsTable';
import './MainScreen.css';

const MainScreen = () => {
    const [activeTab, setActiveTab] = useState('makePost');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="main-screen-container">
            <header className="main-screen-header">
                <UserDropdown />
            </header>
            <nav className="main-screen-tab-nav">
                <button 
                    className={`main-screen-tab-button ${activeTab === 'makePost' ? 'main-screen-tab-button-active' : ''}`} 
                    onClick={() => handleTabClick('makePost')}
                >
                    Make a post
                </button>
                <button 
                    className={`main-screen-tab-button ${activeTab === 'availableRecipients' ? 'main-screen-tab-button-active' : ''}`} 
                    onClick={() => handleTabClick('availableRecipients')}
                >
                    Available recipients
                </button>
                <button 
                    className={`main-screen-tab-button ${activeTab === 'donationCamps' ? 'main-screen-tab-button-active' : ''}`} 
                    onClick={() => handleTabClick('donationCamps')}
                >
                    Donation camps
                </button>
            </nav>
            <div className="main-screen-tab-content">
                {activeTab === 'makePost' && (
                    <div className="main-screen-make-post">
                        <MakePostForm />
                    </div>
                )}
                {activeTab === 'availableRecipients' && (
                    <div className="main-screen-available-recipients">
                        <AvailableRecipientsTable />
                    </div>
                )}
                {activeTab === 'donationCamps' && (
                    <div className="main-screen-donation-camps">
                        <DonationCampsTable />
                        <div className="main-screen-icon">🩸</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainScreen;
