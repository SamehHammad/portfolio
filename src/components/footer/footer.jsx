import React from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { useSelector } from "react-redux";
function Footer() {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div name="footer" className="w-full justify-center p-4">
      <hr />
      <ul className="flex justify-center text-center text-4xl mt-3 ">
        <li>
          <a href="https://github.com/SamehHammad">
            <AiFillGithub style={{color:mode?"white":"black"}} />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/sameh-hammad-b20019246/">
            <AiOutlineLinkedin style={{color:mode?"white":"black"}}/>
          </a>
        </li>

        <p className="text-lg mt-1 ">Copyright &copy;Sameh Hammad</p>
      </ul>
    </div>
  );
}

export default Footer;
