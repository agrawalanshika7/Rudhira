import React from 'react';
import './DonationCampsTable.css';

const DonationCampsTable = () => {
    return (
        <div className="dashboard">
        <main className="main-content">
        <div className="table-container">
          <table className="dashboard-table">
           
            <tbody>
              {/* You can map over your data here */}
              <tr>
                <td>S. no.</td>
                <td>Blood Bank</td>
                <td>Date and Time</td>
                <td>Address</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2024-07-01 10:00 AM</td>
                <td>123-456-7890</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2024-07-01 10:00 AM</td>
                <td>123-456-7890</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2024-07-01 10:00 AM</td>
                <td>123-456-7890</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2024-07-01 10:00 AM</td>
                <td>123-456-7890</td>
              </tr>
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

export default DonationCampsTable;
