import { useState, useEffect } from "react";

const Menu = ({ isHome = false }: { isHome?: boolean }) => {
  const [active, setActive] = useState<number>(0);
  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
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
  }, []);
  return (
    <div className="mt-10 flex space-x-5 text-blue-500 text-3xl lg:text-sm [&>a:hover]:font-bold">
      {!isHome && (
        <a
          href="/"
          className={`${active == 0 ? "underline underline-offset-8" : ""}`}
        >
          home
        </a>
      )}
      <a
        href="/work"
        className={`${active == 1 ? "underline underline-offset-8" : ""}`}
      >
        work
      </a>
      <a
        href="/projects"
        className={`${active == 2 ? "underline underline-offset-8" : ""}`}
      >
        projects
      </a>
      <a
        href="/blog"
        className={`${active == 3 ? "underline underline-offset-8" : ""}`}
      >
        blog
      </a>
      <a
        href="/doggos"
        className={`${active == 4 ? "underline underline-offset-8" : ""}`}
      >
        doggos
      </a>
    </div>
  );
};

export default Menu;
