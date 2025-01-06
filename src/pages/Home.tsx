import Menu from "@/components/Menu";
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <div className="w-screen h-svh flex flex-col justify-center font-mono overflow-hidden ">
      <div className="w-3/4 ml-40 lg:mx-80 text-3xl lg:text-sm 2xl:text-lg text-gray-500">
        <h1 className="text-4xl lg:text-xl font-bold text-black">
          yu han ∩ meyer
        </h1>
        <p className="mt-8 lg:mt-4">software engineer</p>
        <p className="mt-4 lg:mt-2">based in Berlin, Germany</p>
        <p className="mt-4 lg:mt-2">
          freshly graduated, ex IT-Systems-Engineering {""}
          <a
            className="text-blue-500"
            target="_blank"
            href="https://hpi.de/en/"
          >
            @HPI
          </a>
        </p>
        <Socials />

        <Menu isHome />
      </div>
    </div>
  );
};

export default Home;
