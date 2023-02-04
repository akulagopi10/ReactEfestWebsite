import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
import './EfestWorkShops.scss';

const EfestWorkShops = () => {
        return (
        <section class="workshops" id="workshops">
            <h3 class="sec-title">WORKSHOPS</h3>
            <div class="wr-cards">
                <div class="wr-card">
                    <img src={first} alt=""/>
                        <div class="wr-cnt">
                            <h3 class="wr-title">ARTIFICIAL INTELLIGENCE</h3>
                            <p class="wr-subcont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quaerat. Obcaecati nisi quasi pariatur quisquam tenetur molestiae!</p>
                            <button class="wr-btn">Register</button>
                        </div>
                </div>
                <div class="wr-card">
                    <img src={second} alt = "/"/>
                        <div class="wr-cnt">
                            <h3 class="wr-title">SATELLITE COMMUNICATIONS</h3>
                            <p class="wr-subcont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quaerat. Obcaecati nisi quasi pariatur quisquam tenetur molestiae!</p>
                            <button class="wr-btn">Register</button>
                        </div>
                </div>
                <div class="wr-card">
                    <img src={third} alt = ""/>
                        <div class="wr-cnt">
                            <h3 class="wr-title">SEMICONDUCTORS</h3>
                            <p class="wr-subcont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quaerat. Obcaecati nisi quasi pariatur quisquam tenetur molestiae!</p>
                            <button class="wr-btn">Register</button>
                        </div>
                </div>
                <div class="wr-card">
                    <img src={fourth} alt=""/>
                        <div class="wr-cnt">
                            <h3 class="wr-title">RADAR COMMUNICATIONS</h3>
                            <p class="wr-subcont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quaerat. Obcaecati nisi quasi pariatur quisquam tenetur molestiae!</p>
                            <button class="wr-btn">Register</button>
                        </div>
                </div>
                <div class="wr-card">
                    <img src={fifth} alt=""/>
                        <div class="wr-cnt">
                            <h3 class="wr-title">VLSI DESIGN</h3>
                            <p class="wr-subcont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quaerat. Obcaecati nisi quasi pariatur quisquam tenetur molestiae!</p>
                            <button class="wr-btn">Register</button>
                        </div>
                </div>
                <div class="wr-card">
                    <img src = {sixth} alt = "/"/>
                        <div class="wr-cnt">
                            <h3 class="wr-title">INTERNET OF THINGS</h3>
                            <p class="wr-subcont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quaerat. Obcaecati nisi quasi pariatur quisquam tenetur molestiae!</p>
                            <button class="wr-btn">Register</button>
                        </div>
                </div>
            </div>
       </section > 
        )
    }


export default EfestWorkShops;