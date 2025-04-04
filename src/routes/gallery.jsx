import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/architectimages") // ✅ Uses proxy, so no need to add full URL
      .then((res) => {
        setImages(res.data);
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  }, []); // ✅ Prevents infinite re-renders

  return (
    <>
      <div className="flex justify-center bg-[#f2f2f2] min-h-screen">
        <div className="max-w-[1250px] bg-white w-full p-10">
          <div className="w-[450px]">
            <p className="text-4xl font-semibold max-lg:text-2xl p-6  max-lg:w-[300px]">
              Hello! Welcome to Zaha Hadid Architect Gallery with creative and
              unique designs
            </p>
          </div>

          {/* ✅ Fixed Grid Layout */}
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 ">
            {images.map((image) => (
              <div key={image.id} className=" p-2 rounded shadow object-cover">
                <img
                  src={`http://localhost:3000${image.url}`} // ✅ Uses proxy, so no need to manually add server URL
                  alt="Architect Design"
                  className="w-full h-[260px] object-cover rounded-lg hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
