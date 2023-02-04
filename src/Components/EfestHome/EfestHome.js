import rec78 from "../assets/rec78.jpg";
import './EfestHome.scss';

const EfestHome = () => {
   return (
      <section class="efest-events" id="efest-events">
         <div class="efd-content">
            <h1 class="efd-home-title">WELCOME TO EFEST 2023 !!!</h1>
            <p class="efd-hmcnt">
               Join us on February 6th for an unforgettable experience of music, art, 
               and culture. Our festival brings together the best talents from around the
                world to create an electrifying atmosphere that you won't want to miss.
               From live performances by renowned musicians to interactive art 
               installations and delicious food stalls, eFestival 2023 has something 
               for everyone. Whether you're a music lover, art enthusiast, or just looking for a fun day out, this is the event for you.
               So gather your friends and family and get ready to dance the day away.
                Limited tickets are available, so make sure to get yours today!
               We can't wait to see you at eFestival 2023!
            </p>
            <button class="efd-btn">Explore</button>
         </div>
         <div class="efd-home-img">
            <img src={rec78} alt="home-image" />
         </div>
      </section>
   )
}

export default EfestHome