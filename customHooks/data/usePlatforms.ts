import useData from "./useData"


interface PlatformsProps {
    count: number
    results: ParentPlatformTypes[]
}

interface ParentPlatformTypes {
    id: number
    name: string
    platfroms: PlatformChild[]
}

export interface PlatformChild {
    id: number
    name: string
}

const usePlatforms = () => (
    useData<PlatformChild>("/platforms/lists/parents")
)

export default usePlatforms;