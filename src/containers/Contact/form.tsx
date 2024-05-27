import React, { useState } from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Implement form submission logic here (e.g., send data to server)
    console.log("Form submitted:", { name, phone, email, message });

    // Clear form after submission (optional)
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <p className="w-[300px] mt-10 text-white">
        Great vision without great people is irrelevant. Let's work together.
      </p>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm text-[#FDD700]">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm text-[#FDD700]">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm text-[#FDD700]">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm text-[#FDD700]">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-red-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-4 bg-[#FDD700] text-center hover:bg-red-500 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
