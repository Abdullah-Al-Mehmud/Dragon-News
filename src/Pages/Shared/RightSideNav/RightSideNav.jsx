import FindUsOn from "./FindUsOn";
import LogInWith from "./LogInWith";
import QZone from "./QZone";

const RightSideNav = () => {
  return (
    <div className=" pl-7">
      <div className="mb-14">
        <LogInWith></LogInWith>
      </div>
      <div className="my-5">
        <FindUsOn></FindUsOn>
      </div>
      <div className="bg-gray-100 mr-7 my-7">
        <QZone></QZone>
      </div>
    </div>
  );
};

export default RightSideNav;
