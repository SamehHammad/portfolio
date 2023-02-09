import { useState } from "react";
import Swal from "sweetalert2";
import "./contact.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massege, setMassege] = useState("");
  const handleValue = (e) => {
    if (email.includes("@") && name) {
      Swal.fire(
        "تم إستلام رسالتك بنجاح",
        "Thanke You <b style=color:red;> " +
          name +
          " </b>for contacting me and I will reply to you as soon as possible Inashalla",

        "success"
      );
      clearInputs();
    } else {
      Swal.fire({
        icon: "error",
        title: "أوووبس",
        text: "تأكد أنك قمت بإدخال اسمك وبريدك بشكل صحيح",
        footer: "",
      });
    }
  };
  const clearInputs = () => {
    setName("");
    setEmail("");
    setMassege("");
  };
  return (
    <div
      name="Contact"
      className="text-white"
      data-aos-anchor-placement="fade-right"
    >
      <div
        className="h-screen flex flex-col 
      items-center justify-center"
      >
        <div className="mb-3 pt-0">
          <div className="text-center">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400 text-center  ">
              Contact Me
            </p>
            <p className="py-6 text-1xl">eng.sameh1995@gmail.com</p>
            <p className=" text-1xl text-grey-700">+2 01112967597</p>
          </div>
        </div>
        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <div>
              <label className="block mb-6">
                <span className="text-white-700">Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="
          h-10
          px-5
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Your Name"
                />
              </label>
              <label className="block mb-6">
                <span className="text-white-700">Email address</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  type="email"
                  className="
                  h-10
                  px-5
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
          "
                  placeholder="name@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-white-700">Message</span>
                <textarea
                  onChange={(e) => setMassege(e.target.value)}
                  value={massege}
                  name="message"
                  className="
                  px-5
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Tell Me what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6  buttons">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                  onClick={() => handleValue()}
                >
                  Contact Me
                </button>
                {name || email || massege ? (
                  <button
                    type="submit"
                    className="
                    focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"                    onClick={() => clearInputs()}
                  >
                    Clear EveryThing
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
