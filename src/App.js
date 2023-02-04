import React from 'react';
import './App.css';
import EfestNavbar from './Components/EfestNavbar/EfestNavbar';
import EfestHome from './Components/EfestHome/EfestHome';
import EfestWorkShops from './Components/EfestWorkShops/EfestWorjShops';
import EfestGuestLectures from './Components/EfestGuestLectures/EfestGuestLectures';
import EfestContactus from './Components/EfestContactUs/EfestContactus';
import EfestFollowUs from './Components/EfestFollowUs/EfestFollowUs';

function App() {
  return (
    <div className="App">
      <EfestNavbar/>
      <EfestHome/>
      <EfestWorkShops/>
      <EfestGuestLectures/>
      <EfestContactus/>
      <EfestFollowUs/>
    </div>
  )
}

export default App;
