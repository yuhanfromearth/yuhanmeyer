import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";

const Work = () => {
  const experiences = [
    {
      title: "Software Consultant",
      subtitle: "Working Student",
      company: "araneaCONSULT",
      companyUrl: "https://araneaconsult.de",
      date: "Feb 2022 - Dec 2022",
      description:
        "I worked on IAM and SSO related projects. Learned that consulting is hard because clients don't know what they want.",
      techstack: ["IAM", "SSO", "Linux CLI"],
    },
    {
      title: "E-Commerce Solutions Architect",
      subtitle: "Working Student",
      company: "VietBeans",
      companyUrl: "https://vietbeans.de/",
      date: "Feb 2023 - Sep 2024",
      description:
        "Collaborated with a small team of coffee enthusiasts to develop a platform promoting fair trade and high-quality Vietnamese coffee in Germany ☕.",
      techstack: [
        "Wordpress",
        "Shopify",
        "E-Commerce",
        "Html",
        "CSS",
        "React.js",
        "Node.js",
        "How to make good coffee.",
      ],
    },
  ];
  return (
    <div className="w-screen h-svh flex flex-col justify-center font-mono overflow-hidden">
      <div className="mx-32 lg:mx-80 text-3xl lg:text-sm 2xl:text-lg text-gray-500">
        <h2 className="text-4xl lg:text-xl font-bold text-black">work.</h2>
        <p className="mt-6 lg:mt-2">where curiosity led me...</p>
        <div className="mt-8 mb-14 text-2xl lg:text-sm">
          {experiences.map((experiences) => (
            <div className="mt-8">
              <h3 className="text-3xl lg:text-lg text-black">
                {experiences.title}
              </h3>
              <p>
                {experiences.subtitle} @{" "}
                <a
                  className="font-bold italic text-blue-500"
                  href={experiences.companyUrl}
                  target="_blank"
                >
                  {experiences.company}
                </a>{" "}
                | {experiences.date}
              </p>
              <p className="mt-2">{experiences.description}</p>
              <TechStack techstack={experiences.techstack} />
            </div>
          ))}
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Work;
