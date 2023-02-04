import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



import './EfestFollowUs.scss';

const EfestFollowUs = () => {
    return (
        <section class="follow-us" id="followus">
            <h3 class="sec-title">FOLLOW US</h3>
            <div class="flw-buttons">
                <button class="fl-btn">
                    <label><FaFacebook/></label>
                    Facebook
                </button>
                <button class="fl-btn">
                    <label><FaLinkedin/></label>
                    Instagram
                </button>
                <button class="fl-btn">
                    <label><FaTwitter/></label>
                    Twitter
                </button>
                <button class="fl-btn">
                    <label><FaInstagram/></label>
                    Linkedin
                </button>
            </div>
        </section>
    )
}

export default EfestFollowUs