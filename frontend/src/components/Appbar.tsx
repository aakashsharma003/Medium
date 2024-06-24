import { Searchbar } from "./Searchbar"
import Profile from "./Profile"

export const Appbar = () => {
    return <div className="w-full bg-[#fbfbfb] lg:h-[10%] p-[2%] flex justify-between items-center rounded-md border border-gray-200 mt-[0.5%]">
        <div className="font-bold text-md md:text-xl lg:text-2xl">Dashboard</div>
       <div className="flex justify-end items-center w-[35%]">
       <Searchbar/>
       <Profile/>
       </div>
    </div>
}