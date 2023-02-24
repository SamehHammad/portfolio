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
    jobTitle: "Front End Web Developer ",
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
            className=" font-bold text-4xl mt-5 sm:text-6xl name "
          >
            <span className="underlined underline-clip">Hi My Name Is</span>
          </h5>
          <h4
            data-aos="fade-right"
            className=" font-bold text-4xl sm:text-6xl name "
          >
            <span
              className="underlined underline-clip name"
              style={{ color: mode ? "#FACC15" : "#E01E5B" }}
            >
              SAMEH HAMMAD
            </span>
          </h4>

          <h3 className="  sm:text-2xl my-4 w-[18rem] jop-title">
            <Typewriter
              className=""
              options={{
                strings: [`${intro.jobTitle}. . .`],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="view-work" data-aos="fade-left">
            <button className="group text-xl border-4 px-1 mx-6 py-2 my-2 flex items-center rounded-2xl font-bold capitalize hover:border-yellow-400 ">
              <Link to="Projects" smooth={true} duration={500}>
                View Work
              </Link>
              <span className=" group-hover:rotate-90 decoration-1000 group-hover:text-yellow-400">
                <HiArrowNarrowRight className="ml-2 " />
              </span>
            </button>

            <div data-aos="fade-up" className="icons mx-6  flex gap-0">
              <a href="https://github.com/SamehHammad">
                <i className="fa-brands fa-github text-4xl mx-3 cursor-pointer  github-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/sameh-hammad-b20019246/">
                <i className="fa-brands fa-linkedin-in text-4xl mx-3 cursor-pointer  linkedin-icon"></i>
              </a>
              <a href="https://www.facebook.com/same7.hammad/">
                <i className="fa-brands fa-facebook text-4xl mx-3 cursor-pointer  facebook-icon"></i>
              </a>
              <a href="https://twitter.com/SamehHammad17">
                <i className="fa-brands fa-twitter text-4xl mx-3 cursor-pointer twitter-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 intro-img">
        <div className="md:block w-100 mt-32  ">
          <img
            data-aos="fade-left"
            className="rounded-3xl lg:w-[100%] "
            src={mode ? introDarkImg : introLightImg}
            alt="intro"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
