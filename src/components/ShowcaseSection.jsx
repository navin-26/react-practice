import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import ScrollIndicator from "./ScrollIndicator";

function Showcases({ image, project, name }) {
  return (
    <div className="flex flex-col items-center relative transition duration-300 transform hover:scale-105 cursor-pointer">
      <img src={image} alt="" className="object-cover h-44 w-80 rounded-xl " />
      <h6 className="mt-3 uppercase tracking-widest text-xs">{project}</h6>
      <h5>{name}</h5>
    </div>
  );
}

function ShowcaseSection() {
  return (
    <div className="flex flex-col items-center bg-indigo-900 ">
      <div className="relative overflow-hidden px-56 py-16 text-white">
        <div className="flex justify-between mb-6">
          <h3 className="text-4xl font-bold">Last works</h3>
          <button className="border-white rounded-3xl px-3 text-xs border-opacity-35 border-2 transition duration-300 transform hover:scale-105">
            View all Works
          </button>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-6">
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
