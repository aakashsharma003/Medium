
export const Searchbar = () => {
  return (
    <div className="relative w-full mx-[1%] flex items-center">
      <input
        type="text"
        placeholder="Search Blog..."
        className="w-full p-[0.5rem]  pr-[3rem] rounded-md border border-gray-200"
      />
      <div className="absolute right-0 top-0 bottom-0 flex items-center pr-[0.5rem] text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};
