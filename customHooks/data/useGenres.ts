"use client"
import useData from "./useData"


export interface GenresResultsType {
    id: number
    name: string
    image_background: string
}

const useGenres = () => (useData<GenresResultsType>("/genres"))

export default useGenres