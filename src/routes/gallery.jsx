import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  // Static Pexels images used instead of fetching from the API
  const INITIAL_IMAGES = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/29885889/pexels-photo-29885889.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/417321/pexels-photo-417321.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/33225985/pexels-photo-33225985.jpeg",
    },
  ];

  const [images] = useState(INITIAL_IMAGES);

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
