import React from 'react'
import {stateType} from '../App'

interface props extends stateType{
   setSelectdImage : (value: React.SetStateAction<string>) => void
}


const Card:React.FC<props> = ({tags,webformatURL,user,views,setSelectdImage}) => {
    const tagsArr = tags.split(',')
    
    return (
        <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img className="h-56 w-full object-cover" src={webformatURL} alt="picaby" onClick={e =>{setSelectdImage(webformatURL)}} />
            <div className="px-6 py-2">
                <h1 className="font-bold text-xl">{user}</h1>
            
            </div>
            <div className="px-6 pt-4 pb-2">
                {tagsArr.map((tag,index) => (<span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>))}
            </div>
            <div className='absolute top-0 ml-2 p-2 mt-2 bg-teal-800 text-gray-100 text-xs uppercase font-bold rounded-full'>
       
            <svg className="w-6 h-6 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>

            <span className="mr-3" >{views}</span>
            </div>
        </div>
    )
}

export default Card
