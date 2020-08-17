import React from "react";

const Footer = () => {
  return (
    <footer className="text-center w-full my-5">
      <p>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://mahmoud.codes"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          Mahmoud Abdelwahab
        </a>
      </p>
    </footer>
  );
};

export default Footer;
