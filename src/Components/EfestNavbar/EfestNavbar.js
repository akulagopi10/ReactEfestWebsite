import React from 'react';
import { FaBars } from 'react-icons/fa';
import './EfestNavbar.scss';

const EfestNavbar = () => {
    return(
     <header class="efest-hdr">
           <h3 class="efest-logo">E-<span>FESTIVALS</span></h3>
           <input type="checkbox" id = "nav-toggler"/>
           <label for="nav-toggler"><FaBars/></label>
            <nav class="ef-nav">
                <a href="#efest-events">Events</a>
                <a href="#workshops">Workshops</a>
                <a href="#guestLectures">GuestLectures</a>
                <a href="#contact-us">ContactUs</a>
                <a href="#followus">followus</a>
            </nav>
       </header>
    )
}

export default EfestNavbar