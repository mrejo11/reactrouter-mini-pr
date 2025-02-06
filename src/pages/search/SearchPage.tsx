import { useLoaderData } from "react-router-dom"
import PackageListItem from "../../components/PackageListItem"
import { searchLoaderResults } from "./searchLoader"
function SearchPage() {
    const {searchResults}=useLoaderData() as searchLoaderResults

    const renderedResults=searchResults.map((result)=>{
      return <PackageListItem pack={result} key={result.name}/>
    })
  return (
    <div>
      <h1 className="text-2xl font-bold my-6">searchpage</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  )
}

export default SearchPage
