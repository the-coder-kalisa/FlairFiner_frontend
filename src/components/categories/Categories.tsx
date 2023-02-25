import * as React from "react";
import Browse from "./Browse";
interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div>
      <Browse />
    </div>
  );
};

export default Categories;
