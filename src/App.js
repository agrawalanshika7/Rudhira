import React, { useState } from 'react';
import './App.css';
import EntryScreen from './components/EntryScreen/EntryScreen';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context';
import ProfileCreation from './components/profilecreation/profilecreation';
import Civilian from './components/civiliansignup/civilian';
import BloodBank from './components/bloodbanksignup/bloodbank';
import Dashboard from './containers/Dashboard';
import LoginForm from './components/LogIn/LogIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import MainScreen from './components/MainScreen/MainScreen';
import SignUp from './components/SignUp/SignUp';
import ChangePassword from './components/ChangePassword/ChangePassword';

function App() {
  const [currentFlow, setCurrentFlow] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" >
            <Route index element={<EntryScreen />} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/profile-creation' element={<ProfileCreation/>}/>
            <Route path='/civilian' element={<Civilian/>}/>
            <Route path='/blood-bank' element={<BloodBank/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/mainscreen' element={<MainScreen/>}/>
            <Route path='/changepass' element={<ChangePassword/>}/>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






