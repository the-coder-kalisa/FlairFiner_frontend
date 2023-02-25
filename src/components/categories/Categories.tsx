import * as React from "react";
import Browse from "./Browse";
import CatSidebar from "./catSidebar";
interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="flex">
      <CatSidebar />
      <div>
        <Browse />
      </div>
    </div>
  );
};

export default Categories;
