import React from "react";
// import icons
import { ImInstagram, ImLinkedin, ImGithub } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24 items-center">
      <ul className="flex items-center gap-x-6 justify-cente">
        <li>
          <a href="#">
            <ImInstagram className="text-white text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <ImLinkedin className="text-white text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <ImGithub className="text-white text-xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
