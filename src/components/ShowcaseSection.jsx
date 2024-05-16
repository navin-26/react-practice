import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";


function Showcases({ image, project, name }) {
  return (
    <div className="flex flex-col items-center relative transition duration-300 transform hover:scale-105 cursor-pointer md:w-auto  2xl:w-[470px] lg:w-[auto]  h-[371px]">
      <img
        src={image}
        alt=""
        className="object-cover sm:h-[200px] md:h-[200px] lg:h-[280px] sm:w-[350px] md:w-[450px] lg:w-[470px] rounded-xl "
      />
      <h6 className="mt-8 mb-2 uppercase tracking-widest lg:text-[14px] md:text-[14px]  ">
        {project}
      </h6>
      <h5 className="lg:text-[22px] md:text-[16px]">{name}</h5>
    </div>
  );
}

function ShowcaseSection() {
  return (
    <div
      id="works"
      className="flex flex-col items-center sm:h-auto  md:h-[1130px] w-full overflow-hidden"
    >
      <div className="relative overflow-hidden px-[200px] py-[80px] text-white  ">
        <div className="flex justify-between mb-6 ">
          <h3 className="lg:text-[40px] md:text-[30px] sm:text-[25px] font-bold w-[213px]  h-[52px]">
            Last works
          </h3>
          <button className="border-white rounded-3xl px-3 lg:text-[18px] sm:text-[13px] border-opacity-35 border-2 transition duration-300 transform hover:scale-105 text-[18px] lg:w-[180px] sm:w-[120px] max-md:hidden">
            View all Works
          </button>
        </div>
        <div className="container grid grid-cols-1 sm:grid-rows-2 md:grid-cols-2 2xl:gap-x-14 lg:gap-5 md:gap-6  h-816px lg:w-970px md:mt-16">
          <Showcases image={project1} project="UI KIT" name="Mozart Project" />
          <Showcases
            image={project2}
            project="Framework"
            name="Startup Framework 2.0"
          />
          <Showcases image={project3} project="Photos" name="From the Sky" />
          <Showcases image={project4} project="Pictures" name="Air Forces" />
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
