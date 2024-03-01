"use client"
import { useState } from "react"
import { GenresResultsType } from "../data/useGenres"

const useSelectedGenre = () => {
  const [selectedGenre, setSelectedGenre] = useState<GenresResultsType | null>(null)
  // null because we can just fetch original data without specifying the genre
  return (
    { selectedGenre, setSelectedGenre }
  )
}

export default useSelectedGenre