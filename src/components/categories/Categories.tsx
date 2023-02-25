import * as React from "react";
import Browse from "./Browse";
import CatSidebar from "./catSidebar";
import AllCategories from "./AllCategories";
import NavBar from "../navbar/Navbar";
interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <CatSidebar />
        <div className="w-[85%]">
          <Browse />
          <AllCategories numImages={20} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
