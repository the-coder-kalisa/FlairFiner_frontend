import React from "react";

type AllCategoriesProps = {
  numImages: number;
};

const AllCategories: React.FC<AllCategoriesProps> = ({ numImages }) => {
  const height = 500 * 3;
  const width = 500 * 3;
  const images = Array.from({ length: numImages }).map(() => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/random/${width}x${height}?sig=${randomId}`;
  });

  return (
    <div className="mx-12 mt-8">
      <h2 className="mb-4">All Categories</h2>
      <div className="flex flex-wrap">
        {images.map((imageUrl, index) => (
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-96 h-96 object-cover m-2 cursor-pointer"
            key={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
