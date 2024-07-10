import React, { useState } from 'react';
import './UserDropdown.css';

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="user-dropdown">
            <button onClick={toggleDropdown} className="user-button">
                Hi, user <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item">Active Request</div>
                    <div className="dropdown-item">Log Out</div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
