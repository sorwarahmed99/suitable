import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import Button from '../Button';
import Input from '../Input';

function MessageForm({recipient}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        recipient_id: recipient,
        message: '',
    });

    useEffect(() => {
        return () => {
            reset('message');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value, event.target.type === 'radio' ? event.target.checked : event.target.value );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('storechat'));
    };

    return (
        <div className="border-t-2 border-gray-200 dark:border-slate-700 px-4 pt-4 mb-2 sm:mb-0">
            <form  onSubmit={submit} autocomplete="off">
                <div className="relative flex">
                    <span className="absolute inset-y-0 flex items-center pl-2">
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        type="text"
                        value={data.message}
                        name="message" 
                        onChange={onHandleChange}
                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-xl py-3" 
                        placeholder="Type a message..." 
                        autofocus
                    />
                    {/* <input
                        type="hidden"
                        value={data.recipient_id}
                        name="recipient_id" 
                        onChange={onHandleChange}
                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-xl py-3" 
                        placeholder="" 
                        autofocus
                    /> */}
                    <div className="absolute right-0 items-center inset-y-0 flex">
                        {/* <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                        </button> */}
                        
                        
                        {/* <label className="inline-flex items-center justify-center cursor-pointer rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <div className="flex flex-col items-center justify-center pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <input  accept="image/*" type="file" className="opacity-0" />
                        </label> */}
                        
                        <Button className="inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-white bg-slate-600 hover:bg-slate-700 focus:outline-none p-3">
                            <span className="font-bold hidden sm:block">Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 sm:ml-2 ml-1 transform rotate-90">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default MessageForm