import "./projects.css";
import portfolio from "../assets/portfolio.png";
import booksStore from "../assets/books-store.png";
import milionWinner from "../assets/milion.png";


//hover
import {} from "react-icons/fa";
const Projects = () => {
  const data = [
    {
      name: "Books Store",
      demo: "https://books-storet.surge.sh/",
      code: "https://github.com/SamehHammad/book-store",
      img: `${booksStore}`,
      lang: ["React", "bootstrap", "Redux tollkit"],
    },
    {
      name: "Portfolio",
      code: "https://github.com/SamehHammad/portfolio",
      img: `${portfolio}`,
      lang: ["React", "taillwind"],
    },
    {
      name: "Milion Winner",
      demo: "https://milion-winner.surge.sh/",
      code: "https://github.com/SamehHammad/milion-winner",
      img: `${milionWinner}`,
      lang: ["React", "Css"],
    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        name="Projects"
        className="w-full md:h-screen text-white capitalize "
      >
        <div className="cotainer max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="p-b-8  text-center">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400 ">
              work
            </p>
            <p className="py-6 text-2xl">my recent </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {data.map((x) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card-item shadow-lg group container rounded-md flex
              justify-center items-center mx-auto object-cover"
                style={{
                  backgroundImage: `url(${x.img})`,
                  backgroundSize: "cover",
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100 justify-center bg-violet-200 w-full p-5 m-1 rounded-2xl">
                  <span className="text-4xl font-bold text-violet-800  tracing-wider">
                    {x.name}
                  </span>
                  <div className=" pt-8 text-center">
                    {x.demo ? (
                      <a href={x.demo} target="#">
                        <button className="text-center rounded-lg px-6 m-4  bg-black font-bold text-xl ">
                          Demo
                        </button>
                      </a>
                    ) : (
                      <></>
                    )}

                    <a href={x.code} target="#">
                      <button className="text-center rounded-lg px-6 m-4  bg-black font-bold text-xl">
                        code
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 text-violet-800 font-bold  text-center ">
                    {x.lang.map((a) => (
                      <>
                        <p>{a}</p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
