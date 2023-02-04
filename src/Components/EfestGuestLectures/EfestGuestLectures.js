
import guestone from "../assets/guestone.jpg";
import guesttwo from "../assets/guesttwo.jpg";
import guestthree from "../assets/guestthree.jpg";
import "./EfestGuestLectures.scss";


const EfestGuestLectures = () => {
    return (
        <section class="guest-lectures" id="guestLectures">
            <h3 class="sec-title">Guest Lectures</h3>
            <div class="guest-lecture-cards">
                <div class="guest-card">
                    <div class="guest-br">
                        <img src={guestone} alt=""/>
                    </div>
                    <div class="gl-cont">
                        <h3>JOHN PETER</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consectetur magni dignissimos deserunt repellendus expedita?</p>
                    </div>
                </div>
                <div class="guest-card">
                    <div class="guest-br">
                        <img src={guesttwo} alt=""/>
                    </div>
                    <div class="gl-cont">
                        <h3>DAVID PETER</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consectetur magni dignissimos deserunt repellendus expedita?</p>
                    </div>
                </div>
                <div class="guest-card">
                    <div class="guest-br">
                        <img src={guestthree} alt=""/>
                    </div>
                    <div class="gl-cont">
                        <h3>SOLOMON JOHN</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consectetur magni dignissimos deserunt repellendus expedita?</p>
                    </div>
                </div>
            </div>
        </section>
   
   )
} 
  
export default EfestGuestLectures