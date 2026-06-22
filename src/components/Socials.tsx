import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="h-[clamp(2rem,4vw,1.9rem)] flex space-x-[clamp(1.5rem,2vw,2rem)] mt-[clamp(1.5rem,4vw,4rem)]">
      <a target="_blank" href="https://www.linkedin.com/in/yu-han-meyer/">
        <FaLinkedin className="h-full w-auto hover:fill-black" />
      </a>
      <a target="_blank" href="https://github.com/yuhanfromearth">
        <FaGithub className="h-full w-auto hover:fill-black" />
      </a>
    </div>
  );
};

export default Socials;
