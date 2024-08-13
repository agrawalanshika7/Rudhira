import React from 'react';
import './AvailableRecipientsTable.css';

const AvailableRecipientsTable = ({ recipients }) => {
  return (
    <div className="dashboard">
      <main className="main-content">
        <div className="table-container">
          <table className="dashboard-table">
            <tbody>
              <tr>
                <th>S. no.</th>
                <th>Recipient</th>
                <th>Date and Time</th>
                <th>Contact Number</th>
                <th>Blood Grp</th>
              </tr>
              {recipients.map((recipient, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{recipient.recipientName}</td>
                  <td>{new Date().toLocaleString()}</td>
                  <td>{recipient.phoneNumber}</td>
                  <td>{recipient.bloodGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="previous">Previous</button>
          <span className="page-info">1/n</span>
          <button className="next">Next</button>
        </div>
      </main>
    </div>
  );
};

export default AvailableRecipientsTable;
