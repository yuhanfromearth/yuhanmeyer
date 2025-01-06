import Menu from "@/components/Menu";

const Blog = () => {
  return (
    <div className="w-screen h-svh flex flex-col justify-center font-mono overflow-hidden ">
      <div className="w-3/4 ml-40 lg:mx-80 text-3xl lg:text-sm 2xl:text-lg text-gray-500">
        <h1 className="text-4xl lg:text-xl font-bold text-black">blog.</h1>
        <p className="mt-4 lg:mt-2">what's on my mind...</p>
        <p className="mt-16 lg:mt-8">Currently nothing.</p>
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
