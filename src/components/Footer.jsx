import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMail, IoMdCall, IoMdPin } from "react-icons/io";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setLocation("");
        setMessage("");
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white"
    >
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your architectural vision? Reach out to our team.
          </p>
        </motion.div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
            />

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg text-sm font-medium"
              >
                ✓ Thank you! We'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg text-sm font-medium"
              >
                ✗ Error. Please try again.
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition text-white placeholder-gray-400"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition text-white placeholder-gray-400"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition text-white placeholder-gray-400"
                  type="tel"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">City</label>
                <input
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition text-white placeholder-gray-400"
                  type="text"
                  placeholder="City"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition text-white placeholder-gray-400 resize-none"
                rows="4"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: IoMdMail,
                title: "Email",
                content: "irfanmohammad@ipstudios.com",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: IoMdCall,
                title: "Phone",
                content: "+91 8185847964",
                gradient: "from-teal-500 to-green-500",
              },
              {
                icon: IoMdPin,
                title: "Address",
                content: "Hyderabad",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center`}
                  >
                    <Icon className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{info.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-teal-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:text-teal-400 transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-teal-400 transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-teal-400 transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-teal-400 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm border-t border-white/10 pt-8"
          >
            <p>&copy; 2025 Zaha Hadid IP Studios. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
