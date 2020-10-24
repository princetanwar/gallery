import React,{useEffect, useState} from 'react';
import Card from './Components/Card';
import Modal from './Components/Modal';
import Search from './Components/Search';

export interface stateType{
  id?: number,
  webformatURL:string,
  user: string,
  tags: string,
  views : string
}

const  App:React.FC = ()  =>{
  const [images, setImages] = useState<stateType[] | null>()
  const [query, setQuery] = useState('')
  const bashUrl = `https://pixabay.com/api/?key=13513514-8b6209673b14bdcec073a2ba8&q=${query}&image_type=photo`
  const [selected, setSelected] = useState('')

  async function getData(){
    const res = await fetch(bashUrl)
    const {hits} = await res.json()
    setImages(hits)
  }
  useEffect( () =>{
   getData()
  },[])
  return (
    <div>
      <Search queryS={query} setQueryS={setQuery} getNewData={getData}/>
      
        {
          images!?.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5 mt-5 mr-3 ml-3 ">
        {images?.map(image =>{
          return <Card setSelectdImage={setSelected} webformatURL={image.webformatURL} user={image.user} tags={image.tags} key={image.id} views={image.views} />
        })}
      
        </div>
          ) : (
            <div className='flex items-center justify-center h-screen'>
              <h3>No Result Found</h3>
            </div>
          )
        }
        
        { selected && <Modal setSelectdImage={setSelected} imageUrl={selected}/>}
    
      </div>
  );
}

export default App;
