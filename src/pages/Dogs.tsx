import Menu from "@/components/Menu";
import { ClipLoader } from "react-spinners";
import { useDoggoQueue } from "@/hooks/useDoggoQueue";

interface DogApiResponse {
  message: string;
  status: string;
}

const Dogs = () => {
  const { dog, fetched } = useDoggoQueue();

  return (
    <div className="w-screen h-svh flex flex-col items-center font-mono overflow-hidden px-6 pt-[12vh] pb-32">
      <h2 className="text-[clamp(1.6rem,5vw,2.25rem)] font-bold text-black">
        doggos.
      </h2>
      <div className="flex-1 min-h-0 w-full flex flex-col items-center justify-center gap-6">
        {!fetched && (
          <div className="flex flex-col items-center space-y-4">
            <ClipLoader color="#000" size={40} />
            <p className="text-gray-500">fetching doggo...</p>
          </div>
        )}
        {fetched && (
          <div className="flex-1 min-h-0 flex items-center justify-center w-full">
            <img
              src={dog}
              alt="dog"
              className="max-h-full max-w-full w-auto h-auto object-contain"
            />
          </div>
        )}
        <p className="text-gray-500 text-sm shrink-0">
          refresh to fetch new doggo
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Dogs;
