import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import { ClipLoader } from "react-spinners";

const Dogs = () => {
  const [dog, setDog] = useState<string>("");
  const [fetched, setFetched] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message))
      .then(() => setFetched(true));
  }, []);
  return (
    <div className="w-screen h-svh flex justify-center font-mono overflow-hidden">
      <div className="flex flex-col w-full items-center justify-center relative">
        {" "}
        <h2 className="text-4xl lg:text-xl font-bold text-black absolute top-60 lg:top-32">
          doggos.
        </h2>
        {!fetched && (
          <div className="flex flex-col items-center space-y-4">
            <ClipLoader color="#000" size={40} />
            <p className="text-gray-500">fetching doggo...</p>
          </div>
        )}
        {fetched && (
          <img
            src={dog}
            alt="dog"
            className="h-auto max-h-[50%] mt-8 relative"
          />
        )}
        <div className="absolute bottom-52 lg:bottom-28">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Dogs;
