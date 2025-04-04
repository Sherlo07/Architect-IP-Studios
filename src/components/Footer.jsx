import React, { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [style, setStyle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "744d33ff-d9ec-4182-a60e-5c385dd1946d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setLocation("");
      setStyle("");
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div id="footer" className="bg-black w-full p-6">
      <p className="text-white text-5xl text-center font-bold mb-10 max-md:text-3xl">
        GET IN TOUCH
      </p>

      <form
        onSubmit={onSubmit}
        className="text-white grid grid-cols-2 max-md:grid-cols-1 gap-6"
      >
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
        />

        <div className="flex flex-col gap-4">
          <label className="font-semibold">Name:</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-b border-neutral-300 focus:outline-none w-full"
            type="text"
            required
          />

          <label className="font-semibold">Number:</label>
          <input
            name="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-transparent border-b border-neutral-300 focus:outline-none w-full"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="font-semibold">Email:</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b border-neutral-300 focus:outline-none w-full"
            type="email"
            required
          />

          <label className="font-semibold">Location:</label>
          <input
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent border-b border-neutral-300 focus:outline-none w-full"
            type="text"
            required
          />
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <label className="font-semibold">Design Style (Optional):</label>
          <input
            name="style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="bg-transparent border-b border-neutral-300 focus:outline-none w-full"
            type="text"
          />
        </div>

        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="text-white bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full max-w-[300px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Footer;
