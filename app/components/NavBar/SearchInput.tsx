import React, { useRef } from 'react'

interface Props{
  onSearch : (searchText : string) => void
}

const SearchInput = ({onSearch} : Props) => {
  const refValue = useRef<HTMLInputElement>(null)
  return (
    <div className="w-[60%] h-[6vh] rounded-[10px]">
    <form
    onSubmit={(event) => {
      event.preventDefault()
      if(refValue.current) onSearch(refValue.current.value)
    }}
    >
      <input
      ref={refValue}
        type="text"
        placeholder="search games"
        className="w-full h-full 
      rounded-[10px]
       dark:bg-slate-800
       bg-slate-100
       p-[1rem]
       dark:text-slate-400
       text-slate-700
       outline-none
       placeholder:text-slate-700
       placeholder:dark:text-slate-400"
        spellCheck="false"
      />
    </form>
  </div>
  )
}

export default SearchInput