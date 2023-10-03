import PropTypes from "prop-types";

const NewsDetails = ({ newsDetails }) => {
  const { title } = newsDetails;
  return <div>{title}</div>;
};

NewsDetails.propTypes = {};

export default NewsDetails;
