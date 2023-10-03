import { useEffect, useState } from "react";
import Categories from "./Categories";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-xl font-semibold">All Category</h1>
        {categories.map((category) => (
          <Categories key={category.id} category={category}></Categories>
        ))}
      </div>
    </>
  );
};

export default LeftSideNav;
