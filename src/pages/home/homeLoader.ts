import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturePakages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderResults {
    featurePackages: PackageDetails[],
}

export async function homeLoader(): Promise<HomeLoaderResults> {
    const featurePackages = await getFeaturePakages()

    return {
        featurePackages,
    }
}