import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import SectionComponent from "../utility/section-component";

const ContactSection = () => {
  return (
    <SectionComponent
      id="contact"
      heading='Let&apos;s Talk'
      content={
        <ContactWraepper />
      }
      verticleTiltle="contact"
    />
  );
};

const ContactWraepper = () => {
  return (
    <div className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-2 gap-6">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <p className="text-base text-gray-100">
        <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;p&gt;</span>
        I’m interested in freelance opportunities and full-time web development job opportunities. <br />
        However, if you have other request or question, don’t hesitate to use the form.
        <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/p&gt;</span>
      </p>

      <p className="text-base text-gray-100">
        <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;p&gt;</span>
        You can find more information about me on following platforms.
        <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/p&gt;</span>
      </p>

      <div className="flex space-x-6 text-4xl">
        <a
          href="https://www.linkedin.com/in/yugabdh-pashte/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent text-white hover:text-heading-attention-1 transition duration-300 ease-in"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Yugabdh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent text-white hover:text-heading-attention-1 transition duration-300 ease-in"
        >
          <BsGithub />
        </a>
        <a
          href="https://twitter.com/yugabdh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent text-white hover:text-heading-attention-1 transition duration-300 ease-in"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}

const ContactForm = () => {
  return (
    <div
      className="w-full"
    >
      <form
        className="space-y-4"
        action="https://formsubmit.co/16722d5b97a97a1ba15ce8c4bd8df714"
        method="POST"
      >
        <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;form&gt;</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 p-3 w-full text-gray-300 border-b border-gray-500 focus:outline-none focus:border-accent transition duration-300 ease-in"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 p-3 w-full text-gray-300 border-b border-gray-500 focus:outline-none focus:border-accent transition duration-300 ease-in"
          />
        </div>

        <input
          type="text"
          name="_subject"
          placeholder="Subject (Optional)"
          className="bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 p-3 w-full text-gray-300 border-b border-gray-500 focus:outline-none focus:border-accent transition duration-300 ease-in"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Message"
          required
          className="bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 p-3 w-full text-gray-300 border-b border-gray-500 focus:outline-none focus:border-accent transition duration-300 ease-in"
        ></textarea>

        <div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 transition duration-300 ease-in  text-gray-100 px-5 py-3 font-semibold rounded"
          >
            Send message !
          </button>
        </div>

        <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/form&gt;</span>
      </form>
    </div>
  )
}

export default ContactSection;