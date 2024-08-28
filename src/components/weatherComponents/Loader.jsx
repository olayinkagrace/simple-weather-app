import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-10 h-10 border-4 border-blue-600 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Loader;
