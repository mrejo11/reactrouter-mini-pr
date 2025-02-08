import { Params } from "react-router-dom"
import { PackageDetails } from "../../api/types/packageDetails"
import { getPackage } from "../../api/queries/getPackage"

export interface detailsLoaderResults{
    details:PackageDetails  
}
export async function detailsLoader({params}:{params:Params}):Promise<detailsLoaderResults> {
    const {name}=params

    if(!name){
        throw new Error('Name must be provided')
    }

    const details=await getPackage(name)
    return {
        details
    }
        
   
}


