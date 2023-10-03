import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsDetails from "./NewsDetails";

const News = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const news = newsData.find((newsId) => newsId._id === id);
  console.log(news);
  return (
    <div>
      <Header></Header>
      <div className="my-5">
        <Navbar></Navbar>
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-3">
          {/* {news.map((newsDetails) => (
            <NewsDetails
              key={newsDetails._id}
              newsDetails={newsDetails}></NewsDetails>
          ))} */}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
