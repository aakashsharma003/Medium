
import { Article } from './Articles';
interface TableProps {
  articles: Article[];
}

const Tables = ({ articles }:TableProps) => {
  return (
     <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 capitalize tracking-wider">
            Title
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 capitalize tracking-wider">
            Status
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 capitalize tracking-wider">
            Views
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 capitalize tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={index}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {article.title}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              
              <div className='rounded-lg border border-gray-200 text-center w-[50%]'>
              {article.status}
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {article.views}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
              <button className="text-black p-2 rounded-md hover:text-white bg-white mr-2 hover:bg-black border hover:border-gray-200">Edit</button>
              <button className="text-white p-2 rounded-md hover:text-black bg-black hover:bg-white border border-gray-200" >Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
