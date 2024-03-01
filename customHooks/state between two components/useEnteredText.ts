import { useState } from "react"

const useEnteredText = () => {
    const [enteredText , setEnteredText] = useState<string | null>(null)
    return {enteredText , setEnteredText}
}

export default useEnteredText