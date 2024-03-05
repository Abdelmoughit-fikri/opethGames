"use client"
// the generic data fetching hook
import apiClient from "@/services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"
import { useEffect, useState } from "react"

interface FetchResponse<T> {
    count: number
    results: T[]
    // T[] is a generic type so we can use a lot of types  for this response
}



const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController
        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => {
                setData(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setIsLoading(false)
            })
        // returning the clean up function
        return () => controller.abort()
        // the useEffect hook is dependent on on the selected genre
    }, deps ? [...deps] : [])
    return { data, error , isLoading }
}

export default useData