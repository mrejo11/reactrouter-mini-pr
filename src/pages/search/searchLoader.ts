import { searchPackages } from "../../api/queries/searchSummary";
import type { PackagesSummary } from "../../api/types/packagesSummary";

export interface searchLoaderResults{
    searchResults:PackagesSummary[];
}
export async function searchLoader({ request }:{request:Request}):Promise<searchLoaderResults>{
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    if (!term) {
      throw new Error("search term must be provided");
    }
    const results=await searchPackages(term)
    return{
        searchResults:results
    }
  }                                      