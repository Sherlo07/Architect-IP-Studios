import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("🖼️ Fetching images from:", "https://architect-ip-studios-backend.onrender.com/api/architectimages");
        
        const response = await axios.get(
          "https://architect-ip-studios-backend.onrender.com/api/architectimages"
        );
        
        console.log("✅ Images fetched successfully:", response.data);
        setImages(response.data);
      } catch (error) {
        console.error("❌ Error fetching images:", error);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center bg-[#f2f2f2] min-h-screen"
    >
      <div className="max-w-[1250px] bg-white w-full p-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[450px]"
        >
          <p className="text-4xl font-semibold max-lg:text-2xl p-6 max-lg:w-[300px]">
            Hello! Welcome to Zaha Hadid Architect Gallery with creative and
            unique designs
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
              <p className="mt-4 text-gray-600">Loading images...</p>
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

        {/* Images Grid */}
        {!loading && !error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 max-lg:grid-cols-2"
          >
            {images.map((image, index) => (
              <motion.div 
                key={image.id} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-2 rounded shadow object-cover"
              >
                <motion.img
                  src={image.url}
                  alt="Architect Design"
                  className="w-full h-[260px] object-cover rounded-lg hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onError={(e) => {
                    console.error("❌ Image failed to load:", image.url);
                    e.target.src = "https://via.placeholder.com/400x260?text=Image+Not+Found";
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
