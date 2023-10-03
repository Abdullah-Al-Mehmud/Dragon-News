import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex items-center gap-5 bg-gray-100 py-5 px-5">
      <button className="px-5 py-2  bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={70}>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as......
        </Link>
        <Link className="mx-10" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as......
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
