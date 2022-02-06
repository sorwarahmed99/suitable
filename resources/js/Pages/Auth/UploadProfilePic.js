
import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

function UploadProfilePic() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

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

        <form onSubmit={submit}>
            <div className="flex justify-center mt-8">
                <div className="rounded-lg shadow-xl bg-gray-50">
                    <div className="m-4">
                      <div className="flex items-center justify-center w-full">
                      {!selectedFile ?
                            <label className="flex flex-col w-40 h-40 border-4 border-blue-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                              <div className="flex flex-col items-center justify-center pt-10">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Attach a file</p>
                                </div>
                                    <Input type="file" handleChange={onSelectFile} className="opacity-0" />
                            </label>
                              : <div>
                                  <img src={preview} layout="fill" className="w-full h-200 object-cover" />
                                  <Input type="file" handleChange={onSelectFile} className="opacity-0" />
                                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Click here to change file</p>
                              </div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <p>Instruction</p>
                <ul className="list-inside list-disc text-sm">
                    <li>Upload clear photos</li>
                    <li>It is better to avoid group photos</li>
                    <li>Please upload your photos only.</li>
                    <li>Avoid adding photos of dolls, celebrities, pets scenery etc.</li>
                </ul>
            </div>
          <div className="flex items-center justify-center mt-4">
              <Button className="bg-gray-800 w-full hover:bg-gray-900 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center" processing={processing}>
                  <span>Next</span>
                  <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              </Button>
          </div>
      </form>
</Guest>;
}

export default UploadProfilePic;
