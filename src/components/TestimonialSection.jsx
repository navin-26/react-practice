import React from "react";
import client1 from "../assets/client-1.jpeg";
import client2 from "../assets/client-2.jpeg";
import client3 from "../assets/client-3.jpeg";
import client4 from "../assets/client-4.jpeg";

function TestimonialCard({ image, text, author }) {
  return (
    <div className="container rounded-lg border-4 border-white relative max-auto h-auto flex px-6 py-6 items-start mt-10 gap-5 border-opacity-10">
      <div className="flex-none">
        <img src={image} alt="" className="rounded-lg h-16 w-16 object-cover" />
      </div>
      <div className="flex-grow ml-4">
        <p className="text-white">{text}</p>
        <div className="mt-auto">
          <h5 className="pt-2 text-white text-opacity-30 uppercase tracking-widest font-medium">
            {author}
          </h5>
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
    <section className="relative overflow-hidden h-screen bg-indigo-950">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-900 opacity-45"></div>

      <div className="container mx-52 py-14    w-auto relative h-screen">
        <h3 className="text-4xl text-white font-bold">Our Happy Clients</h3>
        <div className="grid grid-cols-2 gap-x-4">
          <TestimonialCard
            image={client1}
            text="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support."
            author="Rayhan Curran"
          />
          <TestimonialCard
            image={client2}
            text="As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"
            author="Kayley Frame"
          />
          <TestimonialCard
            image={client3}
            text="The most important part of the Startup Framework is the samples"
            author="Gene Whitfield"
          />
          <TestimonialCard
            image={client4}
            text="I’ve built my website with Startup just in one day, and it was ready-to-go. "
            author="Allan Kim"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
