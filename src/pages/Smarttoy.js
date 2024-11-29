import "./project.css";
import smarttoy from "../assets/TangiblePlaySurfaceDemo.mp4";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import c1 from "../assets/c1.png";
import MatDesign from "../assets/MatDesign.png";
import Footer from "../components/footer/Footer";

const Smarttoy = () => {
  return (
    <>
        <nav className='nav container'>
            <a href='/' className='nav__logo'>MS Design
            </a>
        </nav>

        <div className="project__container">
            <div className="project__title">Smart Toy</div>
            <div className="project__role">Product Designer | App Design | Web Design and Development</div>
        </div>

        <div className="container project__img">
            <video src={smarttoy} width="100%" height="auto" controls="controls"/>
            <a href="https://dl.acm.org/doi/abs/10.1145/3170427.3186514">Paper: Tangible Play Surface Using Passive RFID Sensor Array</a>
        </div>

        <h2 className="project__section-title">A Request Letter From LEGO</h2>
        <div className="project__text container">
            LEGO plays an important role in childhood playing,
            But how to make Lego more intelligent to meet the requirements from parents to let children learn through play?
            Can we use a robust, low-cost technology to open up more opportunities for Lego blocks?
        </div>

        <h2 className="project__section-title">Key criterias for the technology used on toys</h2>
        <div className="container project__text">
              We did a lot of tests: from safety, durable, reliable, affordable, low-power, scalable perspectives, different technologies have different limitations.
              Differential magnetic and resistive have limited scalability.
              Camera-based tracking suffers from occlusion.
              Active radios in all toys is an option but requires more powered objects and additional component costs.
              Likewise, ultrasonic emissions can be used to track objects, but each object would need a powered microphone or sound emitter.
              Thus, RFID is our top choice!
        </div>
        <div className="container">We are exploring two prototypes designed to allow children to explore coding and storytelling.</div>
       
       
        <h2 className="project__section-title">Code Maker</h2>
        <div class="project__row-halves container">
          <div class="project__col project__text">
              To control the firetruck,
              children place a series of RFID-embedded “command tiles” on the side of the truck,
              then press a button to cause the truck to execute the commands on the tiles.
              When the button is pressed,
              the microcontroller reads the antenna array,
              detecting the command tiles present,
              then activates actuators on the firetruck.
          </div>

          <div class="project__col project__fullimg">
            <img src={t1} alt="Lego firetruck with a tablet app" />
            Code Maker
          </div>
        </div>

        <div class="project__row-halves container">
          <div class="project__col project__text">
                Code Maker includes an Android-based software to allow children to compare tangible and
                software-based approaches to accomplish the same functionality in the robotic firetruck.
                We used Google Blockly in the creation of the app,
                which provides a simple user interface for laying out commands in a sequence. 
                After children send the commands, the Android device,
                sends the command set to the firetruck, which compiles and executes the instructions through the actuators.
          </div>

          <div class="project__col project__fullimg">
              <img src={c1} alt="Software interface of Code Maker" />
              Android App
          </div>
        </div>


        <h2 className="project__section-title">Story Maker</h2>
        <div class="project__row-halves container">
          <div class="project__col project__text">
                We used “The Three Little Pigs” story as an example.
                This classic fable tells of three pigs who build three houses with three different materials.
                When the Big Bad Wolf comes to eat the pigs, he tries to blow down each house.
          </div>
          <div class="project__col project__fullimg">
              <img src={t2} alt="Story Maker" />
              Story Maker
          </div>
        </div>

        <div class="project__row-halves container">
          <div class="project__col project__text">
                Mat can be customized to match with different stories.
                In the prototype the wolf and the houses have RFID readers,
                and depending on the wolf proximity to a house,
                the system plays a part of the story on a computer screen,
                including associated text to help teach reading.
          </div>
          <div class="project__col project__fullimg">
              <img src={MatDesign} alt="Mat design" />
              Mat Design
          </div>
        </div>
        
        <div className="container project__text">
            <i class = "bx bx-award"></i>
            <a href="https://dl.acm.org/doi/abs/10.1145/3170427.3186514">Tangible Play Surface Using Passive RFID Sensor Array</a>
        </div>

        <Footer />
        


    </>

  )
}

export default Smarttoy