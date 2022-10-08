import Typical from "react-typical";
import TheImage from "./TheImage";
import img from "../assets/images/sample.svg";
import Circle from "../assets/icons/circles.svg";
import Cube from "../assets/icons/cube.svg";
import Ellipse from "../assets/icons/Ellipse.svg";
import plus from "../assets/icons/plus.svg";
import zigzags from "../assets/icons/zigzags.svg";


export default function Aboutme() {
  return (
    <div className="flex flex-row justify-center mx-16  ">
      <div className=" mt-28 ">
        <div>
        {" "}
        {/* profile detail Name */}
        <div className=" text-fa-bolt p-2 m-2 mt-10">
          <span className="text-3xl">
            {" "}
            <span className="text-blue-700 font-bold text-7xl ">
              Vinit
            </span>{" "}
          </span>
        </div>
        {/* typical profile names  */}
        <div className="profile-details-role">
          <div>
            {" "}
            <h1 className="text-2xl">
              {" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Ethusiastic Dev 🔴",
                  2000,
                  "Full Stack  Developer 💻",
                  2000,
                  "MEVN Stack Developer 💻",
                  2000,
                  "MERN Stack Developer 💻",
                  2000,
                  "Cross Platform 🌐",
                  2000,
                  "React/Vue Developer 📲",
                  2500,
                ]}
              />
            </h1>
            <div className="p-5 text-4xl text-[#838383]">
              <span>
                {" "}
                Hello! Am a software developer and here is my portfolio website.
                Here you’ll learn about my journey as a software developer.{" "}
              </span>
            </div>
          </div>
          {/* Resume Buttons */}
          <div className="space-x-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded drop-shadow-2xl">
              {""}
              Hire Me{" "}
            </button>
            <a href="vinit.pdf" download="Vinit vinit.pdf">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded drop-shadow-2xl">
                Get Resume
              </button>
            </a>
          </div>
        </div>
        
          </div>
      </div>
      
      <div className=" w-auto relative ">
        <div className="flex justify-between">
          <div className="left-24 absolute top-1 mt-6">
            <TheImage img={plus} w={39} h={40}></TheImage>
          </div>
          <div className="mt-6 absolute top-1  right-0 w-auto">
            <TheImage img={Cube} w={39} h={40}></TheImage>
          </div>
        </div>
        
        <div className="relative top-10 m-2 w-80">
          <TheImage img={img} wi={900} h={700}></TheImage>
          <div className="flex justify-between">
          
        </div>
        
       </div>
       
      </div>
      <div className="right-[430px] absolute top-46 mt-6">
            <TheImage img={zigzags} w={60} h={200}></TheImage>
          </div>
      <div className=" absolute bottom-80 right-[430px] ">
            <TheImage img={Ellipse} w={20} h={40}></TheImage>
          </div>
          <div className="absolute  bottom-80 right-20 w-auto ">
            <TheImage img={Circle} w={200} h={30}></TheImage>
          </div>

          
    </div>
  );
}
