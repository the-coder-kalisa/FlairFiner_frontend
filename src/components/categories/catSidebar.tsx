import React from 'react';

const CatSidebar: React.FC = () => {
  return (
    <div className="h-screen w-1/5 bg-gray-200 pt-12 px-6">
      <h1 className="text-xl font-bold p-4">Sidebar</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Category 1</a>
          </li>
          <li>
            <a href="#">Category 2</a>
          </li>
          <li>
            <a href="#">Category 3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CatSidebar;
