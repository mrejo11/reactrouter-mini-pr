import type { PackagesSummary } from "../types/packagesSummary";

interface searchResponse {
    objects: {
        package: {
            name: string;
            description: string;
            version: string;
            keyword: string[]
        }
    }
}

export async function searchPackages(term: string): Promise<PackagesSummary[]> {
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    )
    const data: searchResponse = await res.json()

    return data.objects.map(({ package: { name, description, version, keywords } }) => {
        return {
            name,
            description,
            version,
            keyword,
        }
    })
}