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
    <div className="w-svw h-svh flex flex-col justify-center font-mono overflow-hidden">
      <div className="ml-[clamp(1.5rem,14vw,26rem)] pr-[clamp(1.5rem,4vw,3rem)] max-w-152 text-[clamp(1rem,1.4vw,0.95rem)] text-gray-500">
        <div ref={spawnRef} className="w-1"></div>
        <h1 className="text-[clamp(1.6rem,5vw,1.75rem)] font-bold text-black leading-tight">
          yu han ∩ meyer
        </h1>
        <p className="mt-[clamp(0.75rem,2vw,1.25rem)]">software engineer</p>
        <p className="mt-[clamp(0.5rem,1vw,0.75rem)]">
          based in Berlin, Germany
        </p>
        <p className="mt-[clamp(0.5rem,1vw,0.75rem)]">
          BSc. in IT-Systems-Engineering{" "}
          <a
            className="text-blue-500"
            target="_blank"
            href="https://hpi.de/en/"
          >
            @HPI
          </a>{" "}
          (2024)
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
