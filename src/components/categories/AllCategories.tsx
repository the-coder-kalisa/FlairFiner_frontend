import React from "react";

type AllCategoriesProps = {
  numImages: number;
};

const AllCategories: React.FC<AllCategoriesProps> = ({ numImages }) => {
  const height = 500;
  const width = 500;
  const images = Array.from({ length: numImages }).map(() => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/random/${width}x${height}?sig=${randomId}`;
  });

  return (
    <div className="mx-12 mt-8">
      <h2>All Categories</h2>
      <div className="flex flex-wrap justify-between">
        {images.map((imageUrl, index) => (
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-32 h-32 object-cover m-2 cursor-pointer"
            key={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
