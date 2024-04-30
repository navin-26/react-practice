import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import ScrollIndicator from "./ScrollIndicator";

function Showcases({ image, project, name }) {
  return (
    <div className="flex flex-col items-center relative transition duration-300 transform hover:scale-105 cursor-pointer w-[470px] h-[371px]">
      <img
        src={image}
        alt=""
        className="object-cover h-[280px] w-[470px] rounded-xl "
      />
      <h6 className="mt-8 mb-2 uppercase tracking-widest text-[14px]">{project}</h6>
      <h5 className="text-[22px]">{name}</h5>
    </div>
  );
}

function ShowcaseSection() {
  return (
    <div className="flex flex-col items-center bg-indigo-900 h-[1130px] ">
      <div className="relative overflow-hidden px-[200px] py-[80px] text-white w-[970]">
        <div className="flex justify-between mb-6 w-[970]">
          <h3 className="text-[40px] font-bold w-[213px]  h-[52px]">
            Last works
          </h3>
          <button className="border-white rounded-3xl px-3 text-xs border-opacity-35 border-2 transition duration-300 transform hover:scale-105 text-[18px] w-[180px]">
            View all Works
          </button>
        </div>
        <div className="container  grid grid-cols-2 gap-x-6 gap-y-10 h-[816px] w-[970] mt-16 ">
          <Showcases image={project1} project="UI KIT" name="Mozart Project" />
          <Showcases
            image={project2}
            project="Framework"
            name="Startup Framework 2.0"
          />
          <Showcases image={project3} project="Photos" name="From the Sky" />
          <Showcases image={project4} project="Pictures" name="Air Forces" />
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
}

export default ShowcaseSection;
