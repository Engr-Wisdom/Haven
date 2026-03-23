import React from 'react'

const Search = () => {
  return (
    <>
    <div className='flex items-center rounded-full p-1 w-[250px] md:w-[350px] xl:w-[500px] bg-white text-black max-md:hidden'>
      <input type="text" placeholder='Search handcraft product...' className='w-full outline-none text-sm max-md:text-xs pl-4' />

      <button className='bg-black p-2 rounded-full text-white cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
    </div>
    </>
  )
}

export default Search