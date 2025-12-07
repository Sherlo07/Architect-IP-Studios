import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMail, IoMdArrowForward } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import arch1 from "../assets/arch1.avif";
import arch2 from "../assets/arch2.avif";
import arch3 from "../assets/arch3.avif";
import arch4 from "../assets/arch4.avif";
import arch5 from "../assets/arch5.avif";

const Intro = () => {
  const images = [arch1, arch2, arch3, arch4, arch5];
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-slate-50 via-gray-50 to-white min-h-screen"
    >
      {/* Main Container */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div className="inline-block mb-6">
            <span className="text-teal-600 text-sm font-bold uppercase tracking-wider">
              Welcome To
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent">
            Zaha Hadid IP Studios
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering architectural innovation with designs that blend
            futuristic vision and functional excellence
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-teal-600 to-cyan-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">
              About Our Vision
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded on the principles of innovation and excellence, Zaha Hadid
            IP Studios represents the pinnacle of contemporary architecture. As
            pioneers in the field, we create iconic structures that challenge
            conventions and redefine spaces. Our work spans from the Heydar
            Aliyev Center to cutting-edge modern designs, always pushing
            boundaries and celebrating the intersection of art, technology, and
            human experience.
          </p>
          <div className="flex gap-6 mt-8">
            <motion.a
              href="https://www.linkedin.com/company/zaha-hadid-architects/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={28} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook size={28} />
            </motion.a>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Works
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.img
                  src={src}
                  alt={`Architecture ${index + 1}`}
                  className="h-80 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: "Innovative Design",
              desc: "Crafting creative and functional architectural designs that blend aesthetics with practicality and sustainability",
            },
            {
              title: "Client-Centric",
              desc: "Our process revolves around understanding your vision and transforming ideas into extraordinary architectural realities",
            },
            {
              title: "Award-Winning",
              desc: "Recognized globally for excellence, with designs that have shaped modern architecture and inspired generations",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-teal-600 hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-600 to-cyan-600 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <IoMdMail className="text-3xl" />
              <h3 className="text-2xl font-bold">Stay Connected</h3>
            </div>
            <p className="text-white/90 mb-6">
              Get insights into our latest projects, design trends, and
              architectural innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                onClick={() => {
                  if (email) {
                    setSubscribed(true);
                    setEmail("");
                    setTimeout(() => setSubscribed(false), 3000);
                  }
                }}
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap hover:bg-gray-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <IoMdArrowForward />
              </motion.button>
            </div>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/90 text-sm mt-3"
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Experience Our Work
          </h2>
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <video
              src="https://videos.pexels.com/video-files/31422854/13404305_1920_1080_30fps.mp4"
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
              className="w-full h-full object-cover"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Something Extraordinary?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your architectural vision and bring your dream project
            to life.
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-teal-700 hover:to-cyan-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project <IoMdArrowForward />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
