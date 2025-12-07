import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const INITIAL_PROJECTS = [
  {
    id: 1,
    name: "Modern Glass Tower",
    category: "Commercial",
    url: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
    description: "Stunning glass and steel architecture",
  },
  {
    id: 2,
    name: "Residential Complex",
    category: "Residential",
    url: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
    description: "Luxury sustainable living space",
  },
  {
    id: 3,
    name: "Cultural Center",
    category: "Cultural",
    url: "https://images.pexels.com/photos/3807697/pexels-photo-3807697.jpeg",
    description: "Contemporary art & culture hub",
  },
  {
    id: 4,
    name: "Institutional Building",
    category: "Institutional",
    url: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "State-of-the-art educational facility",
  },
  {
    id: 5,
    name: "Urban Park Pavilion",
    category: "Public",
    url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    description: "Green space innovation",
  },
  {
    id: 6,
    name: "Tech Hub Office",
    category: "Commercial",
    url: "https://images.pexels.com/photos/356852/pexels-photo-356852.jpeg",
    description: "Collaborative workspace design",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Commercial",
    "Residential",
    "Institutional",
    "Cultural",
    "Public",
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? INITIAL_PROJECTS
      : INITIAL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-white"
    >
      <motion.section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Our <span className="text-teal-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative architectural designs showcasing creativity and
            excellence
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={
                  isActive
                    ? "px-6 py-2 rounded-full font-semibold bg-teal-600 text-white shadow-lg shadow-teal-600/30 transition-all"
                    : "px-6 py-2 rounded-full font-semibold bg-white text-gray-700 border border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-all"
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <motion.img
                  src={project.url}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <motion.button
                  className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  View Details <IoMdArrowForward />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  );
}

export default RouteComponent;
