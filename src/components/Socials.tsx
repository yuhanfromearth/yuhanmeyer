import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="h-10 lg:h-6 flex space-x-14 lg:space-x-4 mt-16 lg:mt-8">
      <a target="_blank" href="https://www.linkedin.com/in/yu-han-meyer/">
        <FaLinkedin className="h-full w-auto hover:fill-black" />
      </a>
      <a target="_blank" href="https://github.com/ChiefYuHan">
        <FaGithub className="h-full w-auto hover:fill-black" />
      </a>
    </div>
  );
};

export default Socials;
