import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  const [images, setImages] = useState([]);
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!BASE_URL) {
      console.error(
        "Missing VITE_BACKEND_URL! Check your deployment environment variables."
      );
      setImages([]);
      return;
    }
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/architectimages`);
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else {
          console.error("API did not return an array:", res.data);
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      }
    };

    fetchImages();
  }, [BASE_URL]);

  return (
    <div className="flex justify-center bg-[#f2f2f2] min-h-screen">
      <div className="max-w-[1250px] bg-white w-full p-10">
        <div className="w-[450px]">
          <p className="text-4xl font-semibold max-lg:text-2xl p-6 max-lg:w-[300px]">
            Hello! Welcome to Zaha Hadid Architect Gallery with creative and
            unique designs
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2">
          {images.length > 0 ? (
            images.map((image) => (
              <div key={image.id} className="p-2 rounded shadow">
                <img
                  src={image.url}
                  alt="Architect Design"
                  className="w-full h-[260px] object-cover rounded-lg hover:scale-105 transition-all duration-300"
                />
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No images found or failed to fetch.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
