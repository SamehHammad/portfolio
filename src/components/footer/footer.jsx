import React from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
function Footer() {
  return (
    <div name="footer" className="w-full  text-whte justify-center p-4">
      <hr />
      <ul className="flex justify-center text-center text-4xl mt-3 ">
        <li>
          <a href="https://github.com/SamehHammad">
            <AiFillGithub />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/sameh-hammad-b20019246/">
            <AiOutlineLinkedin />
          </a>
        </li>

        <p className="text-lg mt-1 ">Copyright &copy;Sameh Hammad</p>
      </ul>
    </div>
  );
}

export default Footer;
