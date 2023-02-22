import { HiArrowNarrowRight } from "react-icons/hi";
import introLightImg from "./intro-light.gif";
import introDarkImg from "./intro-dark.gif";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import "./intro.css";

const Intro = () => {
  const { mode } = useSelector((state) => state.darkMode);

  const intro = {
    name: "Sameh Hammad",
    jobTitle: "Front End Web Developer",
  };
  return (
    <div name="home" className="flex w-full intro-all">
      <div className=" flex-1 intro-text">
        <div
          className="intro
        flex flex-col justify-center h-screen capitalize max-w[1000px] mx-auto px-8 lg:justify-center lg:items-center"
        >
          <h5
            data-aos="fade-right"
            className=" font-bold text-4xl sm:text-6xl name "
          >
            <span class="underlined underline-clip">Hi My Name Is</span>
          </h5>
          <h4
            data-aos="fade-right"
            className=" font-bold text-4xl sm:text-6xl name "
          >
            <span class="underlined underline-clip" style={{color:mode?"#FACC15":"#E01E5B"}}>SAMEH HAMMAD</span>
          </h4>

          <h3 className=" text-4xl sm:text-4xl w-[17rem]">
            <Typewriter
              className=""
              options={{
                strings: [`${intro.jobTitle}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div>
            <button className="group text-xl border-4 px-5 py-2 my-2 flex items-center rounded-2xl font-bold capitalize hover:border-yellow-400 ">
              <Link to="Projects" smooth={true} duration={500}>
                view work
              </Link>
              <span className=" group-hover:rotate-90 decoration-1000 group-hover:text-yellow-400">
                <HiArrowNarrowRight className="ml-2 " />
              </span>
            </button>
            <div data-aos="fade-up" className="icons mx-2  flex gap-0">
              <a href="https://github.com/SamehHammad">
                <i className="fa-brands fa-github text-4xl mx-3 cursor-pointer  hover:text-yellow-400"></i>
              </a>
              <a href="https://www.linkedin.com/in/sameh-hammad-b20019246/">
                <i className="fa-brands fa-linkedin-in text-4xl mx-3 cursor-pointer  hover:text-yellow-400"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 intro-img">
        <div className="md:block w-100 mt-32 mr-16 ">
          <img
            data-aos="fade-left"
            className="rounded-3xl lg:w-[100%] "
            src={mode ? introDarkImg : introLightImg}
            alt="intro"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
