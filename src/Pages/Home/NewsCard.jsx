import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details } = news;
  return (
    <div className="card w-full card-compact  mt-4 bg-base-100 border-[1px] border-gray-200">
      <p className="px-4 py-7 card-title ">{title}</p>
      <figure>
        <img className="px-5" src={image_url} alt={title} />
      </figure>
      <div className="card-body">
        {/* <h2 className="text-sm py-4 font-thin text-gray-500 mt-4">{details}</h2> */}

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600 underline ">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;
