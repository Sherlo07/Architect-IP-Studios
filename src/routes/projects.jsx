import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("🏗️ Fetching projects from:", "https://architect-ip-studios-backend.onrender.com/api/projects");
        
        const response = await axios.get(
          "https://architect-ip-studios-backend.onrender.com/api/projects"
        );
        
        console.log("✅ Projects fetched successfully:", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("❌ Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center bg-[#f2f2f2] min-h-screen p-4"
    >
      <div className="max-w-[1250px] bg-white w-full p-6 md:p-8 rounded-lg shadow-lg">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[600px] px-2 sm:px-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Projects That Showcase My Creativity and Skills
          </p>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            I've worked on multiple projects over time, each reflecting my
            passion for development and innovation. These are the ones I'm most
            proud of. Many are open-source, so if something catches your
            interest, feel free to explore!
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center py-20"
          >
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <p className="text-red-600 text-lg">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-2 rounded-lg shadow-lg"
              >
                <motion.img
                  src={project.url}
                  alt={`Project ${project.id}`}
                  className="w-full h-[180px] sm:h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onError={(e) => {
                    console.error("❌ Project image failed to load:", project.url);
                    e.target.src = "https://via.placeholder.com/400x250?text=Project+Image+Not+Found";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
