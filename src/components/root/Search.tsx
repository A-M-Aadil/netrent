import React from 'react'

interface SearchProps {
    placeholderText: string
    onClick: () => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    buttonText: string
    value: string
}
const Search = ({ placeholderText, onClick, onChange, buttonText, value }: SearchProps) => {
    return (
        <div className='w-full flex flex-row bg-secondary/20 border-black/20 border-[1px] p-1.5 justify-between items-center rounded-l-full rounded-r-full'>
            <input
                type='text'
                placeholder={placeholderText ?? 'Search'}
                onChange={onChange}
                value={value}
                className='w-2/3 bg-transparent text-primary text-[20px] p-2 focus:outline-none pl-2 placeholder:text-primary/80' />
            <button
                onClick={onClick}
                className='w-1/3 h-[46px] max-w-[148px] hover:scale-95 transition-all duration-300 ease-in-out bg-primary rounded-l-full cursor-pointer rounded-r-full text-white font-bold'>
                {buttonText ?? 'Search'}
            </button>
        </div>
    )
}

export default Search