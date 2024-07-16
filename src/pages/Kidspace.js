import "./project.css";
import kidspaceintro from "../assets/kidspaceintro.mp4";
import oscar from "../assets/oscar.mp4";
import u1 from "../assets/u1.png";
import u2 from "../assets/u2.png";
import u3 from "../assets/u3.png";
import scenario from "../assets/scenario.png";
import pcmag1 from "../assets/pcmag1.png";
import pcmag2 from "../assets/pcmag2.png";
import pcmag3 from "../assets/pcmag3.png";
import pcmag4 from "../assets/pcmag4.png";
import Footer from "../components/footer/Footer";


const Kidspace = () => {
  return (
    <>
        <nav className='nav container'>
            <a href='/' className='nav__logo'>MS Design
            </a>
        </nav>

        <div className="project__container">
            <div className="project__title">Kid Space</div>
            <div className="project__role">Project initiator | Lead Product Designer from 0 to 1 </div>
        </div>

        <div className="container project__img">
            <video src={kidspaceintro} width="100%" height="auto" controls="controls"/>
            <a href="https://www.youtube.com/watch?v=Vw24Obgo9ko&t=378s">Introduction video for KidSpace from Intel Labs</a>
        </div>

        

        <h2 className="project__section-title">Ideas Come From Users through Field Study</h2>
        <div class="project__row-halves container">

          <div class="project__col">
            <img src={u1} alt="user interview" />
          </div>

          <div class="project__col">
            <img src={u2} alt="user interview" />
          </div>

          <div class="project__col">
            <img src={u3} alt="user interview" />
          </div>
        </div>

        <div class="project__text container">
            <div>As one of the three initiators of Kid Space, we generated this idea with our users. We brought several novel technologies to our field study, 10+ families,
          asked them to do participatory design with us together, asked about how they would like to use these technologies.</div>
          
           <div>One finding is that people are more open to technology than before. And they hope technology could help their kids learn.
           Thus, kid space is one of our focus area generated from this field study.</div>
        </div>

        <h2 className="project__section-title">From Ideas to Actionable Plans</h2>
        <div class="project__text container">
            <div>What should be included in a kid smart space?
            We listed elements in kids' play space, explore the possible combination then generated 14 ideas for kid space.
            </div>
           <div>  
                To evaluate these ideas, we brought stakeholders to vote on ideas based on Compelling, Scalability, Tech feasibility, Multimodality, Physical immersion and Originality.
            </div>

            <div class="project__fullimg">
                <img src={scenario} alt="brainstorming ideas" />
            </div>
        </div>

        <h2 className="project__section-title">The final MVP: Kid Space = Multimodality + Project Mapping Technology + AR</h2>
        <div className="container project__text">
            Main character of Kid Space project is a teddy bear called Oscar. He is a projected augmented reality AI agent who can guide kids learning through play.
            We made the best use of our exsiting technologies, so oscar understands the surrounding environment through multimodal sensing and has natural language processing, text to speech capbilities, etc. so he
            can respond to kids and surrounding ojects in the environment. Kid Space features: 
            <li>Augments a space, allowing children to retain focus on reality, including the real objects in the space</li>
            <li>Provides projected output across an entire room</li>
            <li>Dynamically responds to people and objects in the environment</li>
            <li>Is compelling for children under 12 to learn through play</li>
        </div>

        <h2 className="project__section-title">How Does The System Work?</h2>
        <div class="project__row-halves container project__img">

          <div class="project__col ">
            <img src={pcmag1} alt="system structure" />
            Capture real world with Lidar
          </div>

          <div class="project__col">
            <img src={pcmag2} alt="system structure" />
            1:1 spatial map to Unity
          </div>

          <div class="project__col">
            <img src={pcmag3} alt="system structure" />
            Process in Unity
          </div>

          <div class="project__col">
            <img src={pcmag4} alt="system structure" />
            Deploy back to real world
          </div>
        </div>
        <div className="project__text container">
              The Kid Space system maps the physical
              world to a virtual space, provides fine grain control of the
              projection multi-axis unit, and provides interaction with the
              projected content.
        </div>


        <h2 className="project__section-title">User Study</h2>
        <div className="container project__text">
            Multiple rounds of user studies were performed and evaluated with children from 5 to 8 years old.
            From exploratory to structured, we are testing different content possibilities, feedbacks from users, their parents, their teachers, as well as collecting training data.
            Here is one clip from a WoZ user study.
        </div>
        <div className="container grid project__content">
            <video src={oscar} width="100%" height="auto" controls="controls"/>
        </div>

        <div className="container project__text">
            Our exciting user studies results showed Kid Space significant improve childrens' engagement in learning. More can be found in related publication and patents:
        </div>
        <div className="container project__text">
            <i class = "bx bx-award"></i>
            <a href="https://dl.acm.org/doi/abs/10.1145/3279981.3279986">Kid Space: Interactive Learning in a Smart Environment</a>
        </div>

        <Footer />

    </>
  )
}

export default Kidspace