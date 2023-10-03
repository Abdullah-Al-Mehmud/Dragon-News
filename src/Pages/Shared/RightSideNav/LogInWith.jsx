import { GrGithub, GrGoogle } from "react-icons/gr";

const LogInWith = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Login With</h1>
      <div className="mt-4">
        <div>
          <button className=" rounded-lg w-60 px-4 py-1 bg-transparent border-[1px] border-black flex gap-5  items-center text-lg font-semibold">
            <GrGoogle className="text-xl"></GrGoogle>
            Login with Google
          </button>
        </div>
        <div className="mt-2">
          <button className=" rounded-lg w-60 px-4 py-1 bg-transparent border-[1px] border-black flex gap-5  items-center text-lg font-semibold">
            <GrGithub className="text-2xl"></GrGithub>
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInWith;
