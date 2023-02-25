import * as React from "react";
import Browse from "./Browse";
import CatSidebar from "./catSidebar";
import AllCategories from "./AllCategories";
interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="flex">
      <CatSidebar />
      <div>
        <Browse />
        <AllCategories numImages={8} />
      </div>
    </div>
  );
};

export default Categories;
