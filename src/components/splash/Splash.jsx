import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import samehImg from "../assets/sameh.jpg";
import "./splash.css";

const Splash = () => {
  const [time, setTime] = useState(5);
  let [loadingInProgress, setLoading] = useState(true);

  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setTime(time - 1);
      if (time === 0) {
        setTime(0);
        setLoading(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  console.log(time);

  return (
    <div className="splash" data-aos="fade-up">
      <div className="main">
        <h1 className="metal">
          SAMEH HAMMAD
          <span className="texture"></span>
        </h1>
      </div>
      <div className="main">
        <h1 className="metal2">
          Front End Web Developer
          <span className="texture"></span>
        </h1>
      </div>
      <img src={samehImg} alt="splash-img" className="splash-img" />
      <div className="timer">
        <div className="container">
          <h1>{time}</h1>

          <ClipLoader
            className="spinner"
            color={"#fff"}
            loading={loadingInProgress}
            size={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;
