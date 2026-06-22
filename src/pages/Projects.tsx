import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";
import { IoUnlinkSharp } from "react-icons/io5";

interface Project {
  title: string;
  description: string;
  link?: string; // Optional property since not all projects have it
  subd?: string; // Optional detailed description
  techstack: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Kontekst.",
      description:
        "OpenRouter wrapper with minimal UI and local Context Management with utility keyboard shortcuts. Chat with any LLM, at API cost, without the noise.",
      link: "https://github.com/yuhanfromearth/kontekst",
      techstack: [
        "Nestjs",
        "React.js",
        "TailwindCSS",
        "Github Actions",
        "NPM publishing",
        "Claude Code",
      ],
    },
    {
      title: "YuHanFromEarth",
      description: "that's me :D",
      link: "/",
      techstack: ["React.js", "TailwindCSS", "Vite"],
    },
    {
      title: "Turtle",
      description:
        "Real-time Chat Bot with the Mount Sinai Data Warehouse using LLMs and SAP HANA.",
      subd: "As a team of 8 students at HPI, we spent 12 months building Turtle - a real-time chatbot interface for healthcare data analysis at Mount Sinai. The system allows medical professionals to query complex patient datasets using natural language, automatically translating conversations into SQL queries and presenting results in an easily understandable format. Built with LLMs and integrated with the OMOP Common Data Model.",
      link: "https://www.tele-task.de/lecture/video/10759/",
      techstack: [
        "Python",
        "NLP",
        "NER",
        "Entity Linking",
        "React.js",
        "TailwindCSS",
        "CI/CD",
        "Agile Dev",
      ],
    },
    {
      title: "Spotify RSS Feed Generator",
      description: "Generate and subscribe to RSS feeds for Spotify podcasts.",
      link: "https://spotify-rss-generator.vercel.app/",
      techstack: ["Node.js", "Express.js", "MongoDB"],
    },
  ];
  return (
    <div className="w-screen min-h-svh flex flex-col font-mono pt-[18vh] pb-32">
      <div className="mx-auto w-full max-w-200 px-[clamp(1.5rem,8vw,5rem)] text-[clamp(1rem,1.4vw,1.15rem)] text-gray-500">
        <h2 className="text-[clamp(1.6rem,5vw,2.25rem)] font-bold text-black">
          projects.
        </h2>
        <p className="mt-[clamp(0.5rem,1vw,0.75rem)]">still learning...</p>
        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-[clamp(1.15rem,2.5vw,1.35rem)] text-black group-hover:text-gray-600 transition-colors inline-flex items-center">
                  <a
                    className="text-blue-500 italic"
                    href={project.link}
                    target="_blank"
                  >
                    {project.title}
                  </a>
                  {project.link && (
                    <IoUnlinkSharp className="opacity-50 ml-2" />
                  )}
                </h3>
                <span className="text-xs opacity-0 group-hover:opacity-60 transition-opacity">
                  →
                </span>
              </div>

              <p className="mt-1 lg:text-sm">{project.description}</p>
              <p className="mt-1 lg:text-sm">{project.subd}</p>

              <TechStack techstack={project.techstack} />
            </div>
          ))}
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Projects;
