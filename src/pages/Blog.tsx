import Menu from "@/components/Menu";

const Blog = () => {
  return (
    <div className="w-screen h-svh flex flex-col justify-center font-mono overflow-hidden ">
      <div className="ml-[clamp(1.5rem,10vw,20rem)] pr-[clamp(1.5rem,4vw,3rem)] max-w-152 text-[clamp(1rem,1.4vw,1.15rem)] text-gray-500">
        <h1 className="text-[clamp(1.6rem,5vw,2.25rem)] font-bold text-black">
          blog.
        </h1>
        <p className="mt-[clamp(0.5rem,1vw,0.75rem)]">what's on my mind...</p>
        <p className="mt-[clamp(1.5rem,4vw,4rem)]">Currently nothing.</p>
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
