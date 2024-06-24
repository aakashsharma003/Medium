import { Appbar } from "../components/Appbar";
import { Article } from "../components/Articles";
import { Button } from "../components/Button";
import Card from "../components/Card";
import { Input } from "../components/Input";
import Table from "../components/Table";

const articles: Article[] = [
  { title: "First Article", status: "Draft", date: "2024-06-23", views: 150 },
  {
    title: "Second Article",
    status: "Published",
    date: "2024-06-22",
    views: 300,
  },
  { title: "Third Article", status: "Pending", date: "2024-06-21", views: 75 },
  {
    title: "Fourth Article",
    status: "Archived",
    date: "2024-06-20",
    views: 50,
  },
  { title: "Fifth Article", status: "Deleted", date: "2024-06-19", views: 20 },
];

export const Dashboard = () => {
  return (
    <div className="w-[100%] h-[100%] flex overflow-x-hidden">
      <div className="lg:w-[20%] bg-[#fbfbfb] m-[0.5%] rounded-md border border-gray-200 sticky top-[0.2px]">
      <div className="w-full flex flex-col items-center p-3">
  <div className="w-full text-center text-lg font-semibold mb-4">Dashboard</div>

  <div className="w-full flex justify-center items-center my-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
      <div>Drafts</div>
    </div>
  </div>

  <div className="w-full flex justify-center items-center my-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
      <div>Published</div>
    </div>
  </div>

  <div className="w-full flex justify-center items-center my-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
      <div>Analytics</div>
    </div>
  </div>

  <div className="w-full flex justify-center items-center my-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <div>Settings</div>
    </div>
  </div>
</div>

        <Card
          heading="Overview"
          subheadings={[
            {
              heading: "Total Views",
              value: 1234,
            },
            {
              heading: "Total Articles",
              value: 42,
            },
          ]}
          buttons={[]}
        />

        <Card
          heading="Quick Actions"
          subheadings={[]}
          buttons={[
            {
              innertext: "New Article",
              style:
                "bg-black text-white text-center rounded-md m-2 w-full flex justify-center items-center p-1",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              ),
            },
            {
              innertext: "Upload Draft",
              style:
                "bg-white text-black text-center rounded-md border border-gray-200 m-2 w-full flex justify-center items-center p-1",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
              ),
            },
          ]}
        />
      </div>

      <div className="lg:w-[78%] flex justify-between items-center flex-col">
        <Appbar />
        <div className="w-full  m-[1%] h-full flex justify-between flex-col p-[2%] rounded-md border border-gray-200">
          <div className="font-bold text-md md:text-xl lg:text-2xl m-1 mb-4">
            New Post
          </div>
          <Input type="text" label="" placeholder="Title" />
          <textarea
            placeholder="Content"
            className="p-[1rem] md:p-[0.5rem] w-full rounded-md border border-gray-200 m-1 h-[25rem] "
          ></textarea>
          <div className="w-[15rem] flex justify-between items-center">
            <Button
              innertext="Save Draft"
              style="w-[50%] md:w-[7rem] bg-black text-white rounded-md md:p-[0.5rem] m-1 flex items-center justify-center"
            />
            <Button
              innertext="Publish"
              style="w-[50%] md:w-[7rem] bg-black text-white rounded-md md:p-[0.5rem] m-1 flex items-center justify-center"
            />
          </div>
        </div>
        <div className="w-full m-[1%] h-full flex justify-between flex-col p-[2%] rounded-md border border-gray-200">
          <div className="font-bold text-md md:text-xl lg:text-2xl mb-4">
            Manage Posts
          </div>
          <Table articles={articles} />
        </div>
      </div>
    </div>
  );
};
