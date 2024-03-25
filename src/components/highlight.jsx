import React from "react";

const Highlight = ({ stats ,cityExist}) => {
  return (
    <div className="bg-slate-600 p-4 text-slate-200 flex flex-col justify-start items-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-lg md:text-base lg:text-lg xl:text-lg mt-2">{stats.title}</h2>
      <div className="mt-2 text-xl md:text-lg lg:text-xl xl:text-xl">
        {cityExist && <span className="font-semibold">{stats.value}</span>}
        <span className="ml-1">{stats.unit}</span>
      </div>

      {stats.direction && (
        <div className="mt-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          {cityExist && <div className="ml-2 text-lg">{stats.direction}</div>}
        </div>
      )}

      {cityExist && stats.title === "Humidity" && (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Highlight;
