import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <div className="my-5">
        <Navbar></Navbar>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="sticky">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          {newsData.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))}
        </div>
        <div className="sticky">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
