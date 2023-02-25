import React from "react";
import categories from "../../categories.json";

type Category = {
  name: string;
  link: string;
};

function Browse() {
  return (
    <div className="mx-12 mt-12">
      <div>
        <h2>Browse by Category</h2>
      </div>
      <div className="flex flex-wrap text-white">
        {categories.categories.map((category: Category) => (
          <a
            href={category.link}
            className="flex-auto bg-[#7087FF] rounded-xl p-4 m-2"
            key={category.name}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Browse;
