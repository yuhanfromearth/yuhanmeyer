import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";
import { IoUnlinkSharp } from "react-icons/io5";

const Projects = () => {
  const projects = [
    {
      title: "YuHanFromEarth",
      description:
        "to any aliens seeing this, my name is Yu Han and I'm from earth 🌍",
      link: "/",
      techstack: ["React.js", "TailwindCSS", "Vite"],
    },
    {
      title: "Turtle",
      description:
        "Real-time Chat Bot with the Mount Sinai Data Warehouse using LLMs and SAP HANA.",
      subd: "As a team of 8 students at HPI, we spent 12 months building Turtle - a real-time chatbot interface for healthcare data analysis at Mount Sinai. The system allows medical professionals to query complex patient datasets using natural language, automatically translating conversations into SQL queries and presenting results in an easily understandable format. Built with LLMs and integrated with the OMOP Common Data Model.",
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
    <div className="w-screen h-svh flex flex-col justify-center font-mono overflow-hidden">
      <div className="mx-32 lg:mx-80 text-3xl lg:text-sm 2xl:text-lg text-gray-500">
        <h2 className="text-4xl lg:text-xl font-bold text-black">projects.</h2>
        <p className="mt-4 lg:mt-2">still learning...</p>
        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl lg:text-lg text-black group-hover:text-gray-600 transition-colors inline-flex items-center">
                  <a className="text-blue-500 italic" href={project.link}>
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
