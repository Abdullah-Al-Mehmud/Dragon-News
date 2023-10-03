import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  const { id, name } = category;
  return (
    <>
      <div className=" pt-10 px-7 text-lg font-semibold text-gray-500">
        <NavLink to={`/category/${id}`}>{name}</NavLink>
      </div>
    </>
  );
};

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Categories;
