const TechStack = ({ techstack }: { techstack: Array<string> }) => {
  return (
    <div className="mt-2 flex gap-2 flex-wrap">
      {techstack.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="text-2xl lg:text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
