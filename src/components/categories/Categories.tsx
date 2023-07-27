import * as React from "react";
import Browse from "./Browse";
import Sidebar from "../sidebar/Sidebar";
import AllCategories from "./AllCategories";
import NavBar from "../navbar/Navbar";
interface CategoriesProps { }

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="w-full col-span-2">
      <Browse />
      <AllCategories numImages={20} />
    </div>
  );
};

export default Categories;
