import React from 'react';
import './ChangePassword.css';

function ChangePassword() {
  return (
    <div className="changepass-App">
      <header className="changepass-App-header">
        <div className="changepass-form-container">
          <form>
            <div className="changepass-form-group">
              <input type="email" placeholder="Confirm email" required />
            </div>
            <div className="changepass-form-group">
              <input type="password" placeholder="New password" required />
            </div>
            <div className="changepass-form-group">
              <input type="password" placeholder="Confirm password" required />
            </div>
          </form>
        </div>
        <button type="submit">Update password</button>
      </header>
    </div>
  );
}

export default ChangePassword;

