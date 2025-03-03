import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import { ClipLoader } from "react-spinners";

interface DogApiResponse {
  message: string;
  status: string;
}

const Dogs = () => {
  const [dog, setDog] = useState<string>("");
  const [fetched, setFetched] = useState<boolean>(false);
  useEffect(() => {
    const fetchDog = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data: DogApiResponse = await res.json();
        setDog(data.message);
        setFetched(true);
      } catch (error) {
        console.error("Error fetching dog:", error);
        // Optionally handle error state here
      }
    };

    fetchDog();
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
        <div className="absolute flex flex-col items-center bottom-52 lg:bottom-20">
          <p className="text-gray-500 text-sm">refresh to fetch new doggo</p>

          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Dogs;
