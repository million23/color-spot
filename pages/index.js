import Link from "next/link";

const Home = () => {
  return (
    <>
      <img
        className="fixed top-0 max-w-lg mx-auto h-screen object-cover -z-10"
        src="https://picsum.photos/2000"
      />

      <main className="flex flex-col justify-end p-5 items-center min-h-screen gap-2 bg-gradient-to-b from-transparent via-transparent to-base-300">
        <img src="/logo_full.png" />
        <p className="text-xl font-bold my-5">Welcome to Color Spot</p>
        <Link href={"/home"} className="btn btn-primary w-full">
          Get Started
        </Link>
      </main>
    </>
  );
};

export default Home;
