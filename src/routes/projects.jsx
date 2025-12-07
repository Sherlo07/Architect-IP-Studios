import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  // Static Pexels images used instead of fetching from the API
  const INITIAL_PROJECTS = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/3807697/pexels-photo-3807697.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/356852/pexels-photo-356852.jpeg",
    },
  ];

  const [projects] = useState(INITIAL_PROJECTS);

  return (
    <div className="flex justify-center bg-[#f2f2f2] min-h-screen p-4">
      <div className="max-w-[1250px] bg-white w-full p-6 md:p-8 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="w-full md:w-[600px] px-2 sm:px-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Projects That Showcase My Creativity and Skills
          </p>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            I've worked on multiple projects over time, each reflecting my
            passion for development and innovation. These are the ones I’m most
            proud of. Many are open-source, so if something catches your
            interest, feel free to explore!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {projects.map((project) => (
            <div key={project.id} className="p-2 rounded-lg shadow-lg">
              <img
                src={`${project.url}`}
                alt={`Project ${project.id}`}
                className="w-full h-[180px] sm:h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
