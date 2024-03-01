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



const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig , deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    useEffect(() => {
        const controller = new AbortController
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => setData(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })
        // returning the clean up function
        return () => controller.abort()
        // the useEffect hook is dependent on on the selected genre
    }, deps ? [...deps] : [])
    return { data, error }
}

export default useData