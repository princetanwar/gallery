import React from 'react'

interface props{
    queryS : string,
    setQueryS : (value: React.SetStateAction<string>) => void,
    getNewData : () => void

}

const Search:React.FC<props> = ({queryS,setQueryS,getNewData}) => {
    return (
        <div className='w-full max-w-sm md:max-w-xl m-auto '>
            <form className='flex items-center'>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mt-5 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={queryS} onChange={(e) => setQueryS(e.target.value)} />
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded" onClick={(e) =>{
                e.preventDefault()
                getNewData()
            }}>Search</button>
            </form>
            
        </div>
    )
}

export default Search
