import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ResponsiveSidenav from '@/Components/ResponsiveSidenav';
import UserSideNav from '@/Components/UserSideNav'
import UserSideNavMenuItem from '@/Components/UserSideNavMenuItem';
import Authenticated from '@/Layouts/Authenticated'
import { Inertia } from '@inertiajs/inertia';
import React, { useRef, useState } from 'react'

function Profile(props) {

    const photoRef = useRef();

    const [selectedFile, setSelectedFile] = useState();
    const [link, setLink] = useState(false);
    const [values, setValues] = useState({photo: '',});
    
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );

        // console.log("filesArray: ", filesArray);

        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
        }
    };

    const renderPhotos = (source) => {
        console.log("source: ", source);
        return source.map((photo) => {
            return <div  key={photo}  className="relative rounded-lg shadow-sm bg-gray-50">
                                <div onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))} className="flex justify-center items-baseline absolute z-50 right-0 left-[4rem] -top-[1rem] text-sm border bg-slate-700 shadow-md cursor-pointer hover:bg-slate-900 border-slate-800 text-slate-50 text-center h-6 w-6 rounded-full">x</div>
                                <img  alt="" src={photo} className="object-cover rounded-lg h-20 w-20 aspect-square" />
                    
                    {/* <img src={photo} alt="" key={photo} className="object-cover h-20 w-20 aspect-square" />
                    <button onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))}>delete</button> */}
                    </div>;
        });
    };
    const onHandleChange = e => {    
        const formData = new FormData();

        formData.append('photo', photoRef.current.files[0])
        // formData.append('photo', values.photo)
        
        // Inertia.post('upload-profile-pic', formData, {
        //     forceFormData: true,
        //   });
        setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        setLink(true);

    }

    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        // console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
  return (
    <Authenticated 
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Profile</h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    > 

    <ResponsiveSidenav />

    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex-row sm:flex sm:space-x-2">
            <div className="hidden sm:block sm:w-[250px] h-min ">
                
               <UserSideNav/>

                
            </div>
            
            <div className="mt-2 sm:mt-0 sm:w-full md:w-2/3 bg-gray-50 dark:bg-slate-800 p-4 sm:p-10 rounded-md shadow-sm">
                <div className="">
                        {/* <header id="header" className="relative z-20">
                            <div>
                                <p className="mb-2 text-sm leading-6 font-semibold text-red-500 dark:text-red-400">{props.auth.user.firstname}</p>
                                <div className="flex items-center">
                                    <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Your information</h1>
                                </div>
                            </div>
                            <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">You can update your information from here.</p>
                        </header> */}
                        

                        <form id="login" className="dark:bg-slate-800" onSubmit={handleSubmit}>
                            <div className="dark:bg-gray-800">
                                <div className="p-4 shadow-sm bg-slate-100 dark:bg-slate-700 rounded-md"> 
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Your selfie is under validation!</h2>
                                    <div className="flex items-start space-x-2 ">
                                        
                                        <div className="flex-none text-lg text-red-400 rounded-lg border border-red-400 shadow-md p-5 dark:text-red-400 font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </div>
                                        

                                        <div className="min-w-0 relative flex-auto">
                                            <div className="p-2">
                                                <p className="text-sm font-semibold  text-gray-600 dark:text-gray-400">
                                                    {props.auth.user.firstname}, your selfie is under validation right now. Once validated,
                                                    you will receive a confirmation on your registered mail ID.
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>


                                <div className="py-8">
                                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Photos</h2>
                                    <p className="text-slate-500 mb-2">Upload or remove photos</p>
                                    <form className="flex items-start justify-start space-x-2 mt-4">
                                        <div className="flex justify-center space-x-2">
                                            <div className="rounded-lg shadow-md bg-gray-50">
                                                <div className="p-2">
                                                    <div className="flex items-center justify-center w-full">
                                                        <label className="relative flex flex-col w-20 h-20 border-3 bg-gray-50 border-slate-300 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className="flex flex-col items-center justify-center pt-10">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                </svg>
                                                            </div>
                                                            <input ref={photoRef} type="file" value={values.photo} className="opacity-0" multiple onChange={handleImageChange} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {selectedFiles && 
                                            <div class="flex flex-wrap gap-2">
                                                <div className="relative rounded-lg shadow-sm bg-gray-50">
                                                    <div onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))} className="flex justify-center items-baseline absolute z-50 right-0 left-[4rem] -top-[1rem] text-sm border bg-slate-700 shadow-md cursor-pointer hover:bg-slate-900 border-slate-800 text-slate-50 text-center h-6 w-6 rounded-full">x</div>
                                                    <img src={`http://localhost:3000/${props.auth.user.profile_image}`} alt={`${props.auth.user.firstname}'s Profile photo`} className="object-cover h-20 w-20 aspect-square"  />
                                                    <p className="text-xs flex justify-center">Profile photo</p>
                                                </div>
                                                {renderPhotos(selectedFiles)}
                                            </div>
                                        }
                                    </form>
                                </div>

                                <div className="py-4">
                                    <h2 className="text-xl font-medium text-slate-900 dark:text-slate-50">About You</h2>
                                    <p className="text-slate-500 mb-3">Don't be shy, express yourslef</p>

                                    <div>
                                        <textarea id="about" name="about" required className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Share something nice about you ..." rows={5} defaultValue={""} />
                                        <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 1000</p>
                                    </div>
                                    
                                    <div className="relative py-2">
                                        <Input type="text" className="py-3" placeholder="Firstname" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.firstname}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <Input type="text" className="py-3" placeholder="Lastname" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.lastname}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <input type="text" className="py-3" placeholder="username" readOnly disabled/>
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.firstname}_{props.auth.user.lastname}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <Input type="text" className="py-3" placeholder="Choose a nickname" />
                                        {/* <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.lastname}</div> */}
                                    </div>

                                    <div className="relative py-2">
                                        <input disabled type="text" className="py-3" placeholder="Email" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.email}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <input type="date" className="py-3" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 pr-[2.5rem] mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.date_of_birth}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <Input type="text" className="py-3" placeholder="Gender" />
                                        <div className="absolute flex items-center justify-end px-4 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{props.auth.user.gender}</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                    <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Basic information</p>
                                    <div className="min-w-0 relative flex-auto">
                                        <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                            <div className="absolute top-0 right-0 flex items-center space-x-1">
                                                <Button className="bg-indigo-700">Save <span className="hidden sm:flex ml-1">changes</span></Button>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                                
                                {/* <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Personal Information</p>
                                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto pt-4">
                                        <div className="container mx-auto">
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    First Name
                                                </label>
                                                <input type="text" id="FirstName" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Last Name
                                                </label>
                                                <input type="text" id="LastName" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Email
                                                </label>
                                                <div className="border border-green-400 shadow-sm rounded flex">
                                                    <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                                            <polyline points="3 7 12 13 21 7" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="Email" name="email" required className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" placeholder="example@gmail.com" />
                                                </div>
                                                <div className="flex justify-between items-center pt-1 text-green-400">
                                                    <p className="text-xs">Email submission success!</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                        <path
                                                            className="heroicon-ui"
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                            0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                                            stroke="currentColor"
                                                            strokeWidth="0.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Street Address
                                                </label>
                                                <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    City
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                                    <input type="text" id="City" name="city" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Los Angeles" />
                                                    <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    State/Province
                                                </label>
                                                <input type="text" id="State/Province" name="state" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Country
                                                </label>
                                                <input type="text" id="Country" name="country" required className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <div className="flex items-center pb-2">
                                                    <label htmlFor="ZIP" className="text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        ZIP/Postal Code
                                                    </label>
                                                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <input type="text" name="zip" required id="ZIP" className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder={86745} />
                                                <div className="flex justify-between items-center pt-1 text-red-400">
                                                    <p className="text-xs">Incorrect Zip Code</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                                        <circle cx={12} cy={12} r={10} />
                                                        <line x1={15} y1={9} x2={9} y2={15} />
                                                        <line x1={9} y1={9} x2={15} y2={15} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>        
                                                                        
                            
    </Authenticated>
  )
}

export default Profile