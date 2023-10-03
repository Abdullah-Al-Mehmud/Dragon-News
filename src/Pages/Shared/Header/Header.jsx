import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center my-10">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>

      <p className="font-semibold text-lg mt-4">
        Journalism Without Fear or Favour
      </p>
      <p className="font-semibold text-xl mt-4">
        {moment().format("dddd, MMMM D  YYYY ")}
      </p>
    </div>
  );
};

export default Header;
