import React from 'react';
import "./project.css";
import ambientpc from "../assets/AmbientPC.jpg";
import ambientvideo from "../assets/ambientvideo.mp4";
import pc1 from "../assets/pc1.png";
import pc2 from "../assets/pc2.png";
import user4 from "../assets/user4.png";
import eisen from "../assets/eisenhower3.png";
import cal from "../assets/cal1.png";
import ui1 from "../assets/ui1.png";
import ui2 from "../assets/ui2.png";
import ui3 from "../assets/ui3.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import userstudy from "../assets/userstudy.png";
import Footer from "../components/footer/Footer";


const AmbientPC = () => {
  return (
    <>
        <nav className='nav container'>
            <a href='/' className='nav__logo'>MS Design
            </a>
        </nav>
        
        <div className="project__container">
            <div className="project__title">Ambient PC</div>
            <div className="project__role">Lead UX Designer | Global Team Collaboration </div>
        </div>

        <div className="project__video container">
            <video src={ambientvideo} width="100%" height="auto" controls="controls"/>
        </div>

        <div className="container grid project__content">

            <h2 className="project__section-title">Background: Laptop VS Mobile</h2>
            <div class="project__container project__row-halves">
                <div class="project__col">
                    <div>Laptops: a non-interactive cuboid when its lid is closed.</div>
                    <div>Mobile: a convenience device that always connects with user.</div>
                    
                </div>
                <div class="project__col">
                    <img src={pc1} alt="PC photo" />
                </div>
            </div>
            <h2 className="project__section-title">UX Problem: How to connect users with PC?</h2>
            <div class="project__row-halves">
                <div class="project__col project__text">
                    <div>What if we have a second screen to the laptop?</div>
                    <div>What content will users want on it?</div>
                    <div>How to demonstrate different possibilities to developer?</div>
                </div>
                <div class="project__col">
                    <span>&nbsp;&nbsp;</span>
                    <img src={pc2} alt="intel pc prototype" />
                </div>
            </div>


            <h2 className="project__section-title">Who are the target users?</h2>
            <div class="project__row-halves">
                <div class="project__col project__text">
                    <span>&nbsp;&nbsp;</span>
                    <h3>Target User</h3>
                    <div>Use PC laptop as primary productivity device</div>
                    <div>Use device in multiple locations e.g.,home, office, on-the-go or
                        have to walk to different conference rooms, parts of the
                        office building throughout the day</div>
                    <div>Regularly multitask</div>
                    <span>&nbsp;&nbsp;</span>

                    <h3>Main Use cases</h3>
                    <div>Laptop lid is closed and user is working nearby</div>
                    <div>Laptop lid is closed and user walks with device in hand</div>
                    <div> Laptop lid is open and its main screen is on.</div>
                </div>

                <div class="project__col">
                    <img src={user4} alt="interview target user" />
                </div>
            </div>


            <h2 className="project__section-title">Content selection</h2>
            <div class="project__row-halves project__text">
                <div class="project__col">
                    <span>&nbsp;&nbsp;</span>
                    <div>Due to limited space of the second screen, it is important
                        to decide what should be displayed on it and how to use other
                        media such as sound to improve interaction.</div>
                    <div>I used Eisenhowers Urgent/Important frameworks to analysis the types of contents.
                        Based on user study and framework analysis, I decided to select calendar, call and media controller to demonstrate second screen. </div>
                </div>

                <div class="project__col">
                    <img src={eisen} alt="eisenhower's urgent and important frameworks" />
                </div>
            </div>

            <h2 className="project__section-title">How to simplify the selected APP for second screen use?</h2>
            <div class="project__row-halves">
                <div class="project__col project__text">
                <p>
                    Let's use Google Calendar as an example to explain how we simplify an application for a small edge screen. 
                    The complete calendar application usually contains multiple items, yearly view, monthly view, daily view, etc.
                    For second screen use, we minimized the number of clicks needed and only show the most important upcoming events. Provide voice input and automatically notification at the same time.
                </p>
                </div>

                <div class="project__col">
                <img src={cal} alt="Google calendar frameworks" />
                </div>
            </div>


            <h2 className="project__section-title">Design Iterations</h2>
            <p>Quick iteration and test are important. Here are the iterations of calendar app. </p>
            <div class="project__fullimg">
                <img src={a1} alt="design version one " />
                <div className='project__fullimg'>1st Version: should we show the entire day calendar?</div>
                
                <img src={a2} alt="design version two" />
                <div className='project__fullimg'>2nd Version: should we show the features of calendar?</div>
              
                <img src={a3} alt="design version three"/>
                <div className='project__fullimg'>Final version</div>
              
            </div>

            <h2 className="project__section-title">User Study</h2>
            <div>
            In order to evaluate Mohawk River prototype, interviews were conducted 1:1 with users who used a laptop throughout the day for business uses. 
            In summary, our design successfully enables a more continuous user-laptop interaction regardless of the working state of the laptop and extended laptop daily usage significantly. 
            We analyzed several aspects of this design such as the size and location of the second screen, the selection and simplification of applications, the size of icons and characters, and the interaction methods with users. The user study we performed with the users supported most of our hypothesis and guided us in creating a prototype with a synchronized Android-Windows software interface. 
            My concluded design principles for the edge screen: ergonomic placement of content; single task and simple function; use of voice as supplement of touch; adapt to multiple environment usages; adapt to personal preference. 
            </div>
            <div class="project__fullimg">
                <img src={userstudy} alt="user study feedback " />
            </div>

            
            <h2 className="project__section-title">Computex: Ambient PC - Code name "Mohawk River"</h2>
            <p>We delivered the Mohawk river functional prototype to Computex Conference and reported by 20+ news press </p>
            <div class="project__fullimg">
                <img src={ui1} alt="concept model" />
                <div className='project__fullimg'>Homepage</div>
                <img src={ui2}  alt="concept model" />
                <div className='project__fullimg'>Calendar</div>
                <img src={ui3}  alt="concept model" />
                <div className='project__fullimg'>Spotify</div>
            </div>

            <div class="project__fullimg" alt="PC prototype shown in computax conference">
                <a href="https://www.pcworld.com/article/397541/intel-concept-pcs-computex-ambient-pc-honeycomb-glacier-twin-rivers.html"><img src={ambientpc} alt="News press of the PC prototype"/></a>
                <a href="https://www.pcworld.com/article/397541/intel-concept-pcs-computex-ambient-pc-honeycomb-glacier-twin-rivers.html"></a>
            </div>

          
            <h2 className="project__section-title">Patent and 20+ News Press</h2>
            <div className='project__container project__text'>
                <div><i class = "bx bx-award"></i>
                    <a href="https://patents.google.com/patent/US11379016B2/en">Patent: Methods and apparatus to operate closed-lid portable computers</a>
                </div>

                <div><a href="https://www.pcworld.com/article/3398917/intel-concept-pcs-computex-ambient-pc-honeycomb-glacier-twin-rivers.html">“Intel dreams of the PC's future: 'Ambient PCs,' fancy fabrics, and a monster dual-display gaming rig”</a></div>

                <div><a href="https://www.ubergizmo.com/2019/05/intel-ambient-display-laptop-touch-bar/">“Intel’s Ambient Display Concept Shows Apple How Touch Bar Should Have Been Done”</a></div>

                <div><a href="https://www.pcworld.com/video/95827/intel-ambient-pc-brings-an-active-edge-display-to-laptops">“Intel Ambient PC brings an active edge display to laptops”</a></div>

                <div><a href="https://venturebeat.com/2019/05/28/intel-unveils-ambient-pc-prototype-ai-on-pc-development-kit-and-nuc-compute-element/amp">“Intel unveils ambient PC prototype, AI on PC Development Kit, and NUC Compute Element”</a></div>

                <div><a href="http://english.etnews.com/20190530200001">“Intel Presents Five Future PC Technologies”</a></div>

                <div><a href="https://www.laptopmag.com/articles/intel-curved-oled-touchpad-concept">“Intel's Concept Touchpad Lets You Control Apps on a Closed Laptop”</a></div>

                <div><a href="https://newsroom.intel.com/news/2019-computex-intel-open-house/#gs.fa4lnt">“COMPUTEX 2019: Top Five Intel Platform Innovations Driving the Next Wave of Computing”</a></div>
            </div>
            
        </div>
        <Footer />
    </>
  )
}

export default AmbientPC