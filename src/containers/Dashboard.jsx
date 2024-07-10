/*import { useState } from "react";

const Dashboard = () =>{
    const [currentState, setCurrentState] = useState(0);
    const onTabClick= (tab )=>{
        setCurrentState(tab)
    }
    return(<div>
        <button onClick={()=>onTabClick(1)} className="">Button1</button>
        <button onClick={()=>onTabClick(2)} className="">Button2</button>
        <button  onClick={()=>onTabClick(3)} className="">Button3</button>
        <p>Active state{currentState}
        </p>



    </div>)
}
export default Dashboard;
*/
// Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import "../assets/Mainscreen.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
          <img src="../../src/logo.png" alt="Rudhira Logo" />
          <h1 className="heading">Rudhira</h1>
        </div>
        <div className="user-info">
          <button className="user-button">Hi, user</button>
        </div>
      </header>
      <main className="main-content">
        <div className="table-container">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Make a request</th>
                <th>Available recipients</th>
                <th>Donation camps</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {/* You can map over your data here */}
              <tr>
                <td>S. no.</td>
                <td>Recipient</td>
                <td>Date and Time</td>
                <td>Contact Number</td>
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

export default Dashboard;