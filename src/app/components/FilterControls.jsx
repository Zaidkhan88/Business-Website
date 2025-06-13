'use client';

import { useState } from 'react';

const FilterControls = ({ filters }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setActiveFilter(filter.name)}
          className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition 
            ${activeFilter === filter.name
              ? 'bg-blue-100 text-blue-700 border-blue-300'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'}
          `}
          aria-label={`Filter by ${filter.name}`}
        >
          {filter.icon}
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
