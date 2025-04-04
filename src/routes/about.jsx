import { createFileRoute } from "@tanstack/react-router";
import building from "../assets/building.png";
import zaha from "../assets/zaha.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Navbar from "../components/Navbar";
export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex justify-center bg-[#f2f2f2] min-h-screen ">
        <div className="max-w-[1250px] bg-white w-full p-10">
          {/* Header */}
          <div className="flex items-center gap-5 pl-12 max-lg:pl-4">
            <p className="text-4xl font-semibold text-[#D91656]">IP Studios</p>
            <a
              href="https://www.linkedin.com/company/zaha-hadid-architects/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={building} className="h-8" alt="Building" />
            </a>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:m-2 m-20 gap-10 p-12 max-lg:p-5">
            <div className="pt-4 text-3xl font-bold max-lg:text-xl">
              <p>
                I’m <span className="text-[#D91656]">Zaha Hadid</span>, an
                Architect and Visionary Designer. I’m the founder of{" "}
                <span className="text-[#D91656]">Zaha Hadid Architects</span>{" "}
                and a pioneer in parametric design.
              </p>

              <p className="mt-4 text-lg font-normal">
                Zaha Hadid Architects is a globally recognized architectural
                firm that pushes the boundaries of innovation, form, and
                futuristic design. With a commitment to fluidity, bold
                structures, and groundbreaking technology, the firm has created
                some of the most iconic buildings worldwide, including the{" "}
                <span className="font-semibold">Heydar Aliyev Center</span>, the{" "}
                <span className="font-semibold">London Aquatics Centre</span>,
                and the{" "}
                <span className="font-semibold">Guangzhou Opera House</span>.
              </p>

              <p className="mt-4 text-lg font-normal">
                As the first woman to receive the{" "}
                <span className="font-semibold">
                  Pritzker Architecture Prize
                </span>
                , I have reshaped modern architecture, blending art and
                technology to create organic, dynamic spaces. My work continues
                to inspire and redefine the future of design, leaving a lasting
                impact on the world of architecture.
              </p>
            </div>
            <div className="pl-9">
              <img
                className="h-[500px] rotate-3 rounded-lg shadow-2xl"
                src={zaha}
              ></img>
              <div className="mt-8">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
                >
                  <FaInstagram className="text-2xl" />
                  Follow us on Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/zaha-hadid-architects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700 mt-4"
                >
                  <FaLinkedinIn className="text-2xl" />
                  Follow us on LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700 mt-4"
                >
                  <FaFacebookF className="text-2xl" />
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default RouteComponent;
