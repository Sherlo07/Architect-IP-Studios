import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://architect-ip-studios-backend.onrender.com/api/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log("Error fetching projects:", error);
      });
  }, []);

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
                src={`http://localhost:3000${project.url}`}
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
