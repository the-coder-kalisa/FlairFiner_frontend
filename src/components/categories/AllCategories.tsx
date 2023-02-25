import React from 'react';
import { LoremPicsum } from 'react-lorem-picsum';

type AllCategoriesProps = {
  numImages: number;
};

const AllCategories: React.FC<AllCategoriesProps> = ({ numImages }) => {
  const imageUrls = Array.from({ length: numImages }).map(() => {
    return LoremPicsum.randomImage({ width: 500, height: 500 });
  });

  return (
    <div className="flex flex-wrap">
      {imageUrls.map((imageUrl, index) => (
        <img
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="w-32 h-32 object-cover m-2"
          key={imageUrl}
        />
      ))}
    </div>
  );
};

export default AllCategories;
