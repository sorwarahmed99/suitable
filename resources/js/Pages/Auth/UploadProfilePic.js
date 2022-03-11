
import React, { useEffect, useState, useRef } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

function UploadProfilePic({errors}) {
    const photoRef = useRef();

    const [selectedFile, setSelectedFile] = useState();
    const [link, setLink] = useState(false);
    const [values, setValues] = useState({photo: '',});
    
    
    const onHandleChange = e => {    
        const formData = new FormData();

        formData.append('photo', photoRef.current.files[0])
        // formData.append('photo', values.photo)
        
        Inertia.post('upload-profile-pic', formData, {
            forceFormData: true,
          });
        setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        setLink(true);

    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();

        // formData.append('photo', photoRef.current.files[0])
        // // formData.append('photo', values.photo)
        
        // Inertia.post('upload', formData, {
        //     forceFormData: true,
        //   });
    };

    

  return <Guest
            bgimage="bg-login-background"
            title="Help us find the perfect match for you"
            subtitle="Upload your photos here"
            linktext="Need help ?"
            href="/"
            btnName="Contact support"
        >
        <Head title="Suitable | Set up profile" />

        <div className="">
            <div className=" mb-2 items-baseline">
                <h2 className="mt-6 text-lg font-semibold text-gray-900">
                    Add a photo of yourself
                </h2>
                <p className="mt-1 text-sm font-normal text-gray-500">Your profile will be only visible to other members, when you add a photo.</p>
            </div>
        </div>

        <ValidationErrors errors={errors} />

        <form>
            <div className="flex justify-center mt-8">
                <div className="rounded-lg shadow-xl bg-gray-50">
                    <div className="m-4">
                        <div className="flex items-center justify-center w-full">
                            
                            {!selectedFile ?
                            <label className="flex flex-col w-40 h-40 border-4 border-slate-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                              <div className="flex flex-col items-center justify-center pt-10">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Choose a photo</p>
                                </div>

                                <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={onHandleChange} />
                                    
                            </label>
                              : <div className="h-40 w-40">
                                  <img src={selectedFile} layout="fill" className="object-cover aspect-square" />

                                  <label className="mt- 2 flex flex-col w-full h-8 p-1 border-4 border-slate-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                  <p className="text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Click here to change</p>
                                    <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={onHandleChange} />

                                  </label>
                                </div>
                              
                              }
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <p>Instruction</p>
                <ul className="list-inside list-disc text-sm text-slate-400">
                    <li>Upload clear photos</li>
                    <li>It is better to avoid group photos</li>
                    <li>Please upload your photos only.</li>
                    <li>Avoid adding photos of dolls, celebrities, pets scenery etc.</li>
                </ul>
            </div>
      </form>
      
        {link && <Link href={route('choosePlan')}  type="button" className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
            Upload 
        </Link>}
</Guest>;
}

export default UploadProfilePic;
                        