import { Inertia } from '@inertiajs/inertia';
import React, { useRef, useState } from 'react'

function ImageCard() {
    const photoRef = useRef();
    const [link, setLink] = useState(false);
    const [values, setValues] = useState({photo: '',});
    const [selectedFile, setSelectedFile] = useState();

    const handleImageChange = (e) => {
        const formData = new FormData();

        formData.append('photo', photoRef.current.files[0])
        // formData.append('photo', values.photo)
        
        Inertia.post('upload-profile-pic', formData, {
            forceFormData: true,
          });
          
        setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        setLink(true);
    };

  return (
    <div>
        <div class="flex flex-col items-center justify-center w-[160px] h-[160px] p-3 bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-center">
                {!selectedFile ?
                    <label className="flex flex-col w-[130px] h-[130px] rounded-lg border-4 border-slate-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Choose a photo
                            </p>
                        </div>
                        <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={handleImageChange} />
                    </label>
                : 
                <div className="w-[150px] h-[150px] rounded-lg">
                    <img src={selectedFile} layout="fill" className="w-[150px] h-[150px] p-2 rounded-xl object-cover aspect-square" />
                    <label className="mt-3 flex flex-col items-center justify-center  w-full h-8 p-1 border-4 border-slate-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <p className="text-xs tracking-wider text-gray-400 group-hover:text-gray-600">
                            Click here to change
                        </p>
                        <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={handleImageChange} />
                    </label>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default ImageCard