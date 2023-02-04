import clfest from "../assets/clfest.jpg";
import "./EfestContactus.scss";


const EfestContactus = () => {
    return (

        <section class="contact-us" id="contact-us">
            <h3 class="sec-title">CONTACT US</h3>
            <div class="cnt-us-form">
                <div class="cnt-img">
                    <img src={clfest} alt="cnt-img" />
                </div>
                <form action="" class="cnt-form">
                    <div class="form-box">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="form-box">
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="Event" />
                    </div>
                    <textarea name="address" id="" cols="30" rows="20" placeholder="type something"></textarea>
                    <input type="submit" value="Submit" class="cnt-btn" />
                </form>
            </div>
        </section>
    )
}

export default EfestContactus