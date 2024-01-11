import Button from "@/Components/Button";
import ChatUser from "@/Components/Chat/ChatUser";
import MessageForm from "@/Components/Chat/MessageForm";
import EmptyState from "@/Components/EmptyState";
import Input from "@/Components/Input";
import UserSideNav from "@/Components/UserSideNav";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";

import Img from "../../../../public/assets/images/user-avatar.png";

function Chat({ auth }) {
    const { users } = usePage().props;
    const { messages } = usePage().props;
    const { last_message } = usePage().props;
    const [chat, setChat] = useState("");

    const formatDate = (date) => {
        if(date !== ''){
            let d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear(),
            hours = "" + d.getHours(),
            min = "" + d.getMinutes();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            if (hours.length < 2) hours = "0" + hours;
            if (min.length < 2) min = "0" + min;

            return [day, month, year].join(".") + " " + hours + ":" + min;
        } else {
            return "";
        }
    };

    const selectUser = (user) => {
        setChat(user);
    };

    return (
        <Authenticated
            auth={auth}
            // errors={errors}
        >
            <div class="hidden md:block h-screen">
                <div class="flex h-full">
                    <div class="hidden xl:block sm:block md:block dark:bg-slate-900 dark:shadow-xl w-1/3">
                        <div className="p-2 flex items-center justify-between">
                            <div class="heading flex-2">
                                <h1 class="text-2xl font-bold text-gray-700 dark:text-slate-50 mb-2">Chat</h1>
                            </div>
                            <div> 
                                <Link as="button"  href={route("chat")} className="bg-transparent text-slate-700 dark:text-slate-50 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-900 px-2 py-1 border border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-medium rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        />
                                    </svg>
                                    <span className="hidden sm:block text-xs">Back</span>
                                </Link>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 w-full">
                            <div class="h-full w-full">
                                <div class="relative w-full bg-white shadow-lg rounded-lg">
                                    <header class="pt-6 pb-4 px-5 border-b border-gray-200">
                                        <div class="flex justify-between items-center mb-3">
                                            <div class="flex items-center">
                                                <a class="inline-flex items-start mr-3" href="#0">
                                                    <img class="rounded-full h-10 w-10" src={auth.user.profile_image} width="48" height="48" alt={auth.user.username} />
                                                </a>
                                                <div class="pr-1">
                                                    <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                                        <h2 class="text-md leading-snug font-semibold">{auth.user.username}</h2>
                                                    </a>
                                                    <a class="block text-sm font-medium hover:text-indigo-500" href="#0">{auth.user.country}, {auth.user.city}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </header>

                                    <div class="py-3 px-5">
                                        <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                                        {users.map(user => (
                                            <div class="divide-y divide-gray-200">
                                                <Link href={route('chatwithuser', user.username)}>
                                                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                                        <div class="flex items-center">
                                                            <img class="rounded-full h-9 w-9 items-start flex-shrink-0 mr-3" src={user.profile_image} alt={user.username} />
                                                            <div>
                                                                <h4 class="text-sm font-semibold text-gray-900">{user.username}</h4>
                                                                <div class="text-[13px]">{user.last_message != '' ? user.last_message : 'Start conversation' }  {formatDate(user.time) != '' ? '· '+formatDate(user.time) : '' }</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </Link>
                                            </div>
                                        ))}
                                        {(users.length == 0 &&
                                            <div>
                                                <a class="block py-4 px-12 border-l-4 border-gray-800 dark:border-indigo-300 bg-gray-300 dark:bg-blue-900 dark:text-white text-black hover:bg-gray-300 hover:text-black dark:hover:text-slate-300" href="javascript:return false;">
                                                    <span class="inline-block align-text-bottom mr-2">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                                    </span>
                                                    Empty Chat
                                                </a>

                                                <Link as="a" href={route("home")} class="mt-20 absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                                                    <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                                                        <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
                                                    </svg>
                                                    <span>Browse</span>
                                                </Link>
                                            </div>
                                        )}
                                        
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                        {/* <div class="menu mt-2">
                            {users.map(user => (
                                <ChatUser key={user.id} user={user} active={user}/>
                            ))}
                            {(users.length == 0 &&
                                <a class="block py-4 px-12 border-l-4 border-gray-800 dark:border-indigo-300 bg-gray-300 dark:bg-blue-900 dark:text-white text-black hover:bg-gray-300 hover:text-black dark:hover:text-slate-300" href="javascript:return false;">
                                    <span class="inline-block align-text-bottom mr-2">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                    </span>
                                    Empty Chat
                                </a>
                            )}
                        </div> */}
                    </div>

                    <div className="p-0 m-0 w-full h-auto">
                        <EmptyState
                            bgimage="bg-empty-chat-background"
                            title="Choose a match to start conversion!"
                            subtitle="Keep it halal &amp; brief."
                            btnName="Browse now"
                            linktext="Looking for a match ?"
                            href={route("home")}
                        />
                        {/* <p className="text-2xl font-semibold text-slate-800 dark:text-slate-50">Looks like you've reached to the end. Please come back later!</p>  */}
                    </div>
                    
                </div>
            </div>


            <section class="md:hidden flex flex-col justify-center antialiased bg-gray-50 text-gray-600">
                <div class="h-full">
                    <div class="relative w-full bg-white shadow-lg rounded-lg">

                        <header class="pt-6 pb-4 px-5 border-b border-gray-200">
                            <div class="flex justify-between items-center mb-3">

                                <div class="flex items-center">
                                    <a class="inline-flex items-start mr-3" href="#0">
                                        <img class="rounded-full h-10 w-10" src={auth.user.profile_image} width="48" height="48" alt={auth.user.username} />
                                    </a>
                                    <div class="pr-1">
                                        <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                            <h2 class="text-xl leading-snug font-bold">@{auth.user.username}</h2>
                                        </a>
                                        <a class="block text-sm font-medium hover:text-indigo-500" href="#0">{auth.user.country}, {auth.user.city}</a>
                                    </div>
                                </div>

                                <div class="relative inline-flex flex-shrink-0">
                                    <button class="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                        <span class="sr-only">Settings</span>
                                        <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                            <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </header>

                        <div class="py-3 px-5">
                            <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                            {users.map(user => (
                                <div class="divide-y divide-gray-200">
                                    <Link href={route('chatwithuser', user.username)}>
                                        <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                            <div class="flex items-center">
                                                <img class="rounded-full h-9 w-9 items-start flex-shrink-0 mr-3" src={user.profile_image} alt={user.username} />
                                                <div>
                                                    <h4 class="text-sm font-semibold text-gray-900">{user.username}</h4>
                                                    <div class="text-[13px]">{user.last_message != '' ? user.last_message : 'Start conversation' }  {formatDate(user.time) != '' ? '· '+formatDate(user.time) : '' }</div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            ))}
                            {(users.length == 0 &&
                                <a class="block py-4 px-12 border-l-4 border-gray-800 dark:border-indigo-300 bg-gray-300 dark:bg-blue-900 dark:text-white text-black hover:bg-gray-300 hover:text-black dark:hover:text-slate-300" href="javascript:return false;">
                                    <span class="inline-block align-text-bottom mr-2">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                    </span>
                                    Empty Chat
                                </a>
                            )}
                            
                        </div>

                        <Link as="a" href={route("home")} class="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                            <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                                <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
                            </svg>
                            <span>Browse</span>
                        </Link>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
}

export default Chat;

{
    /* <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
        </svg>
        </button> */
}

{
    /* <label className="inline-flex items-center justify-center cursor-pointer rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <div className="flex flex-col items-center justify-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            </div>
            <input  accept="image/*" type="file" className="opacity-0" />
        </label> */
}
