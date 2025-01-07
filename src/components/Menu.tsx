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
  return (
    <div className="mt-10 flex space-x-5 text-blue-500 text-3xl lg:text-sm [&>a:hover]:font-bold">
      {!isHome && (
        <Link
          to="/"
          className={`${active == 0 ? "underline underline-offset-8" : ""}`}
        >
          home
        </Link>
      )}
      <Link
        to="/work"
        className={`${active == 1 ? "underline underline-offset-8" : ""}`}
      >
        work
      </Link>
      <Link
        to="/projects"
        className={`${active == 2 ? "underline underline-offset-8" : ""}`}
      >
        projects
      </Link>
      <Link
        to="/blog"
        className={`${active == 3 ? "underline underline-offset-8" : ""}`}
      >
        blog
      </Link>
      <Link
        to="/doggos"
        className={`${active == 4 ? "underline underline-offset-8" : ""}`}
      >
        doggos
      </Link>
    </div>
  );
};

export default Menu;
