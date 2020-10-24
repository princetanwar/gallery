import React from 'react'

interface props{
    imageUrl: string,
    setSelectdImage : (value: React.SetStateAction<string>) => void

}

const Modal:React.FC<props> = ({imageUrl,setSelectdImage}) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-halfTransparent' onClick={ (e: any) => {
           if(e.target.classList.contains('fixed')){
            setSelectdImage('')
           }
        }}>
            <img className="block max-w-4xl max-h-6 mt-24 mx-auto shadow-md" src={imageUrl} alt="large "/>
            
        </div>
    )
}

export default Modal
