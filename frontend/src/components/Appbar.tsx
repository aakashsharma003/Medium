import Button from "./Button";
import Profile from "./Profile";
import { Searchbar } from "./Searchbar";

interface Appbar {
  dashboard: boolean;
  style?: string;
}

const Appbar = ({ dashboard, style }: Appbar) => {
  return (
    <>
      {dashboard && (
        <div className="w-full bg-[#fbfbfb] lg:h-[10%] p-[2%] flex justify-between items-center rounded-md border border-gray-200 mt-[0.5%]">
          <div className="font-bold text-md md:text-xl lg:text-2xl">
            Dashboard
          </div>
          <div className="flex justify-end items-center w-[55%]">
            <Searchbar />
            <div className="w-[2rem] h-[2rem]">
            <Profile /> 
            </div>
          </div>
        </div>
      )}
      {!dashboard && (
        <div className={style}>
          <div className="w-[45%] flex justify-between items-center">
          <div className="text-md md:text-xl lg:text-2xl p-2">Medium</div>
            <div className="w-[10%] mx-2">Blogs</div>
            <div className="w-[10%] mx-2">Trending</div>
            <Searchbar />
          </div>

          <Button innertext="Signin" style="bg-white text-black rounded-md p-2" />
        </div>
      )}
    </>
  );
};

export default Appbar;
