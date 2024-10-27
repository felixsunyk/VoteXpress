import React from "react";
import "../style/home.css"; 
import Navigation from "./Navigation";
import voting from '../img/pexels-sora-shimazaki-5926265-removebg-preview.png';
import rescaf from '../img/rescaf-logo.jpg';
import LHI from '../img/loyalty-house.jpg';
import Everything from '../img/epc-church.jpg';



const Home =() => {
    return(
    <div>
      <div className="navigation-div">
       <Navigation />
      </div>
       <div>
  
       </div>
        <div className="home">
            <div className="landing-text profile-home-page">
                <span>Welcome to VoteXpress</span>
                    <p>  Your Voice, Your Choice!
                        At VoteXpress, we believe every vote counts. Whether it’s a decision within your community, organization, or for a global cause, this platform empowers you to make your voice heard. Cast your vote, view real-time results, and see how your input helps shape the future.
                        Get involved. Vote today and make an impact!
                    </p>
            </div>
            <div className="profile-home-page">
                <img src={voting} alt="voting" className="vote" />
            </div>
        </div>
        <div id="vx-box">
            <p className="vx-meaning">
                VoteXpress is your go-to 
                platform for fast and secure voting. Here’s why it stands out:
            </p>
            <div className="vx-list">
                <ul className="vx-list-ul">
                    <li><span>Vote Fast and Easily:</span> Make your decisions with just a few clicks.</li>
                    <li><span>Outcome Transparency:</span> Real-time results let you see how your vote impacts the final outcome instantly.</li>
                    <li><span>Trusted and Secure:</span> Your vote remains confidential and protected.</li>
                    <li><span>Everywhere Access:</span> Vote anytime, anywhere, from any device.</li>
                    <li>
                        <span>Xpress Your Opinion with Confidence!</span>
                    </li>
                    <li><span>Private and Secure:</span> We ensure your data and votes are always safe.</li>
                    <li><span>Reliable and Real-time:</span> Experience fast, accurate, and transparent results.</li>
                    <li><span>Easy-to-use Interface:</span> Designed for simplicity, so anyone can participate with ease.</li>
                    <li><span>Support for Various Topics:</span> Engage in decisions on a wide range of issues.</li>
                    <li><span>Stay Informed:</span> Get updates on important decisions and results.</li>
                </ul>
            </div>
        </div>
        <section className="">
            <h2 className="sponsor">sponsorship</h2>
            <div>
                <ul className="sponsorship-box"> 
                    <p><img src={LHI}  alt="LHI-Image"/></p>
                    <p><img src={rescaf} alt="rescaf" /></p>
                    <p><img src={Everything} alt="Everything" /></p>

                </ul>
            </div>
        </section>

      <section>
        <footer>
       
        </footer>
      </section>
    </div>
    )
}

export default Home;