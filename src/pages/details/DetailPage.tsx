import type { detailsLoaderResults } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

function DetailPage() {
  const { details } = useLoaderData() as detailsLoaderResults;
  return (
    <div className="space-y-4">
      <h1 className=" text-3xl font-bold my-4">{details.name}</h1>
      <div>
        <h3 className="text-lg fontbold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{details.description}</div>

        <div>
          <h3 className="text-lg fontbold">Lisence</h3>
          <div className="p-3 bg-gray-200 rounded">{details.license}</div>
        </div>

        <div>
          <h3 className="text-lg fontbold">HomePage</h3>
          <div className="p-3 bg-gray-200 rounded">{details.homepage}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
