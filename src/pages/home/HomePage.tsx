import type { HomeLoaderResults } from "./homeLoader";
import { useLoaderData, Link } from "react-router-dom";

function HomePage() {
  const { featurePackages } = useLoaderData() as HomeLoaderResults;

  const renderedPackages = featurePackages.map((p) => {
    return (
      <div
        key={p.name}
        className="flex flex-col justify-between gap-3 border rounded shadow p-4"
      >
        <div className="flex flex-col gap-1 border-bottom border-gray-400">
          <div className="font-bold text-center">{p.name}</div>
          <div className="text-sm text-gray-500">{p.description}</div>
          <div className="text-sm text-gray-500">
            {p.maintainers.length} maintainers
          </div>
        </div>
        <Link to={`/packages/${p.name}`} className="border rounded border-gray-900 text-center ">
        View
        </Link>
      </div>
    );
  });
  return <div className="container p-12 space-y-8">
    <div className="space-y-6 text-center">
      <h1 className="text-6xl font-bold">
        The NPM Registry
      </h1>
      <p className="mx-auto max-w-[600px] text-gray-500">The package manager for javascript. Search and View packages.</p>
    </div>
    <div className="mx-auto grid grid-cols-4 max-w-[900]px items-stretch gap-3">{renderedPackages}</div>
  </div>;
}

export default HomePage;
