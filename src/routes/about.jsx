import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaAward,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

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
  const achievements = [
    {
      icon: FaAward,
      title: "Pritzker Prize",
      desc: "First woman to receive the prestigious architecture award",
    },
    {
      icon: FaBuilding,
      title: "Iconic Structures",
      desc: "Created world-renowned buildings worldwide",
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      desc: "Reshaped modern architecture and design standards",
    },
  ];

  const projects = [
    {
      title: "Heydar Aliyev Center",
      location: "Baku, Azerbaijan",
      year: "2012",
    },
    { title: "London Aquatics Centre", location: "London, UK", year: "2011" },
    {
      title: "Guangzhou Opera House",
      location: "Guangzhou, China",
      year: "2010",
    },
    {
      title: "BMW Central Building",
      location: "Leipzig, Germany",
      year: "2005",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-slate-50 via-gray-50 to-white min-h-screen"
    >
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-teal-600 text-sm font-bold uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent">
            Zaha Hadid IP Studios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of architecture through innovation, vision,
            and groundbreaking design
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                I'm <span className="text-teal-600">Zaha Hadid</span>
              </h2>
              <p className="text-xl font-semibold text-gray-700">
                Architect & Visionary Designer
              </p>
              <p className="text-gray-600 leading-relaxed">
                As the founder of Zaha Hadid Architects, I revolutionized the
                architectural world through parametric design and fluid, organic
                forms. My work transcends traditional boundaries, blending
                mathematics, technology, and artistic vision to create
                structures that inspire and challenge conventions.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                Zaha Hadid Architects is a globally recognized firm that has
                pushed the boundaries of innovation and form. We've created
                iconic landmarks including the{" "}
                <span className="font-semibold text-teal-700">
                  Heydar Aliyev Center
                </span>
                , the{" "}
                <span className="font-semibold text-teal-700">
                  London Aquatics Centre
                </span>
                , and the{" "}
                <span className="font-semibold text-teal-700">
                  Guangzhou Opera House
                </span>
                .
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                As the first woman to receive the{" "}
                <span className="font-semibold text-teal-700">
                  Pritzker Architecture Prize
                </span>
                , I have reshaped modern architecture by merging art and
                technology to create dynamic, organic spaces that redefine the
                built environment.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <FaInstagram className="text-2xl group-hover:scale-125 transition-transform" />
                <span className="font-semibold">Instagram</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/zaha-hadid-architects/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <FaLinkedin className="text-2xl group-hover:scale-125 transition-transform" />
                <span className="font-semibold">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <FaFacebook className="text-2xl group-hover:scale-125 transition-transform" />
                <span className="font-semibold">Facebook</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-2xl blur-2xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=800&h=900&fit=crop"
              alt="Gigi Hadid - Professional Portrait"
              className="relative h-[600px] w-full object-cover rounded-2xl shadow-2xl border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Key Achievements
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-teal-600 hover:shadow-xl transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Notable Projects Section */}
      <motion.section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Notable Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-teal-600 hover:shadow-xl transition-all group"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="inline-block bg-teal-600/10 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Design Philosophy</h2>
          <p className="text-lg leading-relaxed">
            We believe architecture is not just about creating structures—it's
            about shaping human experiences. Every project is an opportunity to
            push boundaries, challenge conventions, and create spaces that
            inspire, transform, and endure. Through innovation, technology, and
            artistic vision, we craft buildings that become icons and leave a
            lasting legacy on the world.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <motion.div
          variants={itemVariants}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Interested in Our Work?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our portfolio and discover how we can transform your vision
            into reality.
          </p>
          <motion.a
            href="/projects"
            className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Projects
          </motion.a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default RouteComponent;
