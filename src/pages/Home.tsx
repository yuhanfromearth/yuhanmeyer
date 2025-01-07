import { useRef, useEffect, useState } from "react";

import Menu from "@/components/Menu";
import Socials from "@/components/Socials";
import Doggo from "@/components/Doggo";

const Home = () => {
  const spawnRef = useRef<HTMLDivElement>(null);
  const [doggoPosition, setDoggoPosition] = useState({ x: 0, y: 0 });
  const [isPositionReady, setIsPositionReady] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      if (spawnRef.current) {
        const rect = spawnRef.current.getBoundingClientRect();
        setDoggoPosition({
          x: rect.left + 15,
          y: rect.top - 25,
        });
        setIsPositionReady(true); // Mark as ready once we have real values
      }
    };

    updatePosition(); // Initial position
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []); // Run once after initial render

  return (
    <div className="w-screen h-svh flex flex-col justify-center font-mono overflow-hidden">
      <div className="w-3/4 ml-40 lg:mx-80 text-3xl lg:text-sm 2xl:text-lg text-gray-500">
        <div ref={spawnRef} className="w-1"></div>
        <h1 className="text-4xl lg:text-xl font-bold text-black">
          yu han ∩ meyer
        </h1>
        <p className="mt-8 lg:mt-4">software engineer</p>
        <p className="mt-4 lg:mt-2">based in Berlin, Germany</p>
        <p className="mt-4 lg:mt-2">
          freshly graduated, ex IT-Systems-Engineering{" "}
          <a
            className="text-blue-500"
            target="_blank"
            href="https://hpi.de/en/"
          >
            @HPI
          </a>
        </p>
        <Socials />
        {isPositionReady && (
          <Doggo initialX={doggoPosition.x} initialY={doggoPosition.y} />
        )}{" "}
        {/* <div ref={spawnRef} className="w-fit"> */}
        <Menu isHome />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
