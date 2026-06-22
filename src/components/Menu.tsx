import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ isHome = false }: { isHome?: boolean }) => {
  const [active, setActive] = useState<number>(0);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive(0);
        break;
      case "/work":
        setActive(1);
        break;
      case "/projects":
        setActive(2);
        break;
      case "/blog":
        setActive(3);
        break;
      case "/doggos":
        setActive(4);
        break;
    }
  }, [location]);
  const link =
    "px-1 py-2 -my-2 transition-opacity active:opacity-50 hover:font-bold";
  return (
    <div
      className={
        (isHome
          ? "mt-[clamp(1rem,3vw,2rem)] -ml-1 text-[clamp(1.05rem,1.5vw,0.95rem)] "
          : "fixed bottom-0 left-0 right-0 justify-center px-4 pt-10 lg:pt-[clamp(3rem,12vh,8rem)] pb-[clamp(1.5rem,4vw,2.5rem)] bg-linear-to-t from-white lg:from-40% via-white to-transparent text-[clamp(1.05rem,1.5vw,1.15rem)] ") +
        "flex gap-x-[clamp(0.5rem,2vw,1.25rem)] whitespace-nowrap text-blue-500"
      }
    >
      {!isHome && (
        <Link
          to="/"
          className={`${link} ${active == 0 ? "underline underline-offset-8" : ""}`}
        >
          home
        </Link>
      )}
      <Link
        to="/work"
        className={`${link} ${active == 1 ? "underline underline-offset-8" : ""}`}
      >
        work
      </Link>
      <Link
        to="/projects"
        className={`${link} ${active == 2 ? "underline underline-offset-8" : ""}`}
      >
        projects
      </Link>
      <Link
        to="/blog"
        className={`${link} ${active == 3 ? "underline underline-offset-8" : ""}`}
      >
        blog
      </Link>
      <Link
        to="/doggos"
        className={`${link} ${active == 4 ? "underline underline-offset-8" : ""}`}
      >
        doggos
      </Link>
    </div>
  );
};

export default Menu;
