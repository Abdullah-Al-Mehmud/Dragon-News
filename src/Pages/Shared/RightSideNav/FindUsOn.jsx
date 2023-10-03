import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
const FindUsOn = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Find Us On</h1>
      <div className="mt-4">
        <div>
          <a
            href=""
            className="  w-60 px-4 py-4 bg-transparent border-[1px] border-gray-200 flex gap-5  items-center text-lg text-gray-500 font-semibold">
            <GrFacebookOption className="text-xl"></GrFacebookOption>
            Facebook
          </a>
        </div>
        <div>
          <a
            href=""
            className="  w-60 px-4 py-4 bg-transparent border-[1px] border-gray-200 flex gap-5  items-center text-lg text-gray-500 font-semibold">
            <GrTwitter className="text-xl"></GrTwitter>
            Twitter
          </a>
        </div>
        <div>
          <a
            href=""
            className="  w-60 px-4 py-4 bg-transparent border-[1px] border-gray-200 flex gap-5  items-center text-lg text-gray-500 font-semibold">
            <GrInstagram className="text-xl"></GrInstagram>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
