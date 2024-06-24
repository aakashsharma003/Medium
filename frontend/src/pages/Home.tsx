import Appbar from "../components/Appbar";
import Button from "../components/Button";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Appbar
        dashboard={false}
        style="bg-black flex w-full text-white justify-between items-center p-4 sticky top-0"
      />
      <div className="flex w-screen">
        <div className="bg-[#f4f4f5] w-[50%] h-[95vh] p-[5%] flex items-center justify-center flex-col sticky top-[12vh]">
          <div className="font-bold text-base md:text-xl lg:text-3xl capitalize italic">
            "Writing is the painting of the voice."
          </div>
          <div className="text-gray-400 flex justify-end items-center w-full p-2">
            - Akash Sharma
          </div>
          {/* <div>- Voltaire</div> */}
        </div>
        <div className="w-[50%] flex flex-col ">
        <div className="bg-slate-200 flex flex-col w-full p-2">
        <div className="bg-white w-[95%]  h-[65vh] p-6 flex  justify-start flex-col shadow-md rounded-md ">
          <div className="w-full p-2 flex  flex-col justify-start items-center">
            <div className="w-full flex justify-start items-center my-2">
              <div className="w-[4rem] h-[4rem] lg:text-2xl lg:m-2">
                <Profile />
              </div>
              <div className="flex justify-start items-center flex-col">
                <div className="text-black w-full">John Doe</div>
                <div className="text-gray-500 w-full">
                  Published on June 24, 2024 at 10:30AM
                </div>
              </div>
            </div>

            <div className="text-md md:text-2xl lg:text-3xl bold font-bold my-2 text-black">
              The Art of Storytelling: Crafting Captivating Narratives
            </div>
            <p className="text-gray-500 my-2">
              Explore the power of storytelling and learn how to craft
              captivating narratives that engage your audience. Discover
              techniques to bring your ideas to life and leave a lasting
              impression.
            </p>

            <div className="flex justify-between items-center w-full my-2">
              <Button
                innertext="Read More"
                style="bg-black text-white text-center p-2 rounded-md"
              />
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                  <div className="text-black font-semibold">12.3K+ likes</div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        <div className="bg-slate-200 flex flex-col w-full p-2">
        <div className="bg-white w-[95%]  h-[65vh] p-6 flex  justify-start flex-col shadow-md rounded-md ">
          <div className="w-full p-2 flex  flex-col justify-start items-center">
            <div className="w-full flex justify-start items-center my-2">
              <div className="w-[4rem] h-[4rem] lg:text-2xl lg:m-2">
                <Profile />
              </div>
              <div className="flex justify-start items-center flex-col">
                <div className="text-black w-full">John Doe</div>
                <div className="text-gray-500 w-full">
                  Published on June 24, 2024 at 10:30AM
                </div>
              </div>
            </div>

            <div className="text-md md:text-2xl lg:text-3xl bold font-bold my-2 text-black">
              The Art of Storytelling: Crafting Captivating Narratives
            </div>
            <p className="text-gray-500 my-2">
              Explore the power of storytelling and learn how to craft
              captivating narratives that engage your audience. Discover
              techniques to bring your ideas to life and leave a lasting
              impression.
            </p>

            <div className="flex justify-between items-center w-full my-2">
              <Button
                innertext="Read More"
                style="bg-black text-white text-center p-2 rounded-md"
              />
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                  <div className="text-black font-semibold">12.3K+ likes</div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        <div className="bg-slate-200 flex flex-col w-full p-2">
        <div className="bg-white w-[95%]  h-[65vh] p-6 flex  justify-start flex-col shadow-md rounded-md ">
          <div className="w-full p-2 flex  flex-col justify-start items-center">
            <div className="w-full flex justify-start items-center my-2">
              <div className="w-[4rem] h-[4rem] lg:text-2xl lg:m-2">
                <Profile />
              </div>
              <div className="flex justify-start items-center flex-col">
                <div className="text-black w-full">John Doe</div>
                <div className="text-gray-500 w-full">
                  Published on June 24, 2024 at 10:30AM
                </div>
              </div>
            </div>

            <div className="text-md md:text-2xl lg:text-3xl bold font-bold my-2 text-black">
              The Art of Storytelling: Crafting Captivating Narratives
            </div>
            <p className="text-gray-500 my-2">
              Explore the power of storytelling and learn how to craft
              captivating narratives that engage your audience. Discover
              techniques to bring your ideas to life and leave a lasting
              impression.
            </p>

            <div className="flex justify-between items-center w-full my-2">
              <Button
                innertext="Read More"
                style="bg-black text-white text-center p-2 rounded-md"
              />
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                  <div className="text-black font-semibold">12.3K+ likes</div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        </div>
       
        
        
      </div>

      
    </div>
  );
};

export default Home;
