import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialName } from "../../assets/config";
const Contact = () => {
  let socailUrl = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: `https://github.com/${socialName[0].github}`,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: `https://www.linkedin.com/in/${socialName[1].linkedin}`,
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: `https://twitter.com/${socialName[2].twitter}`,
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: `https://www.instagram.com/${socialName[3].instagram}`,
    },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x46jmro",
        "template_sigvuhm",
        form.current,
        "2RQOgnAyppzewFiuv"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-100 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              name="user_name"
              className="block p-3 w-full text-sm text-gray-900 dark:text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Rehman Official"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </section>

      <footer className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-navy-900 dark:bg-navy-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to={`https://${socialName[4].rehmanofficial}.pages.dev/`}
              className="flex items-center"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                Rehman Official
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to={`https://${socialName[4].rehmanofficial}.pages.dev/`}
                    className="hover:underline"
                  >
                    Rehman Official
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://${socialName[5].tailwind}.com/`}
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to={`https://github.com/${socialName[0].github}`}
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://discord.gg/${socialName[6].discord}`}
                    className="hover:underline"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to={`https://${socialName[4].rehmanofficial}.pages.dev/`}
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://${socialName[4].rehmanofficial}.pages.dev/`}
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link
              to={`https://${socialName[4].rehmanofficial}.pages.dev/`}
              className="hover:underline"
            >
              Rehman Official
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center text-xl sm:mt-0 gap-4">
            {socailUrl.map((value, index) => (
              <Link
                key={index}
                to={value.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${value.name} website`}
                className="text-gray-500 hover:text-gray-100 dark:hover:text-white"
              >
                {value.icon}
                <span className="sr-only">{value.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
