import Button from "@/Components/Button";
import ChatUser from "@/Components/Chat/ChatUser";
import Dropdown from "@/Components/Dropdown";
import EmptyState from "@/Components/EmptyState";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";
import Img from "../../../../public/assets/images/user-avatar.png";

const ChatMessages = ({ auth }) => {
    const { user } = usePage().props;
    const { messages } = usePage().props;
    const { users } = usePage().props;
    const { last_message } = usePage().props;
    

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

    const messagelist = messages.map((message) => {
        if (message.recipient_id === auth.user.id) {
            return (
                <div key={message.id} class="hidden md:flex items-end">
                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div className="flex items-end justify-end rounded-lg rounded-br-none  bg-slate-200">
                            <span class="px-4 py-2  text-slate-800 ">
                                {message.message}
                            </span>
                            <span class="text-xs text-slate-400 pr-2 pl-2 pb-1 ">
                                {formatDate(message.created_at)}
                            </span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={message.id} class="flex items-end justify-end">
                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div className="flex items-end justify-end rounded-lg rounded-br-none  bg-purple-600">
                            <span class="px-4 py-2  text-white ">
                                {message.message}
                            </span>
                            <span class="text-xs text-slate-300 pr-2 pl-2 pb-1 ">
                            {formatDate(message.created_at)}

                            </span>
                        </div>
                    </div>
                </div>
            );
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            Inertia.reload({ only: ['messages'] })
            // messagelist;

        }, 1000)        
        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messagelist]);


    const bottomRef = useRef(null);
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.name
                : event.target.value,
            event.target.type === "radio"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("storechat", user.id));
        reset("message");
        scrollToBottom();
    };

    return (
        <Authenticated
            auth={auth}
        >
            <div class="w-full h-screen">
                <div class="flex h-full">
                    <div class="hidden xl:block sm:flex-2 dark:bg-slate-900 ">
                        <div className="p-2 flex items-center justify-between">
                            <div class="hidden lg:block heading flex-2">
                                <h1 class="text-2xl font-bold text-gray-700 dark:text-slate-50 mb-2">Chat</h1>
                            </div>
                            <div> 
                                <Link as="a" href={route("chat")} className="bg-transparent text-slate-700 dark:text-slate-50 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-900 px-2 py-1 border border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-medium rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
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
                            {/* <div class="search flex-2 pb-2 px-2">
                                <input type="text" class="outline-none py-2 block w-full bg-transparent border-gray-200" placeholder="Search" />
                            </div> */}
                        </div>

                        <div class="menu mt-2">
                            {users.map(user => (
                                <ChatUser key={user.id} user={user} active={user} />
                            ))}
                            
                            <a class="block py-4 px-12 border-l-4 border-gray-800 dark:border-indigo-300 bg-gray-300 dark:bg-blue-900 dark:text-white text-black hover:bg-gray-300 hover:text-black dark:hover:text-slate-300" href="javascript:return false;">
                                <span class="inline-block align-text-bottom mr-2">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                </span>
                                Chat
                            </a>
                        </div>
                    </div>

                    <div class="flex-1 bg-gray-100 dark:bg-slate-900 w-full h-full">
                        <div class="main-body container m-auto w-11/12 h-full flex flex-col">
                            <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                                <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 dark:border-slate-700">
                                    <div class="relative flex items-center space-x-4">
                                        <div class="relative">
                                            <span class="absolute text-green-500 right-0 bottom-0">
                                                <svg width="20" height="20">
                                                    <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="8"
                                                        fill="currentColor"
                                                    ></circle>
                                                </svg>
                                            </span>
                                            <img
                                                src={user.profile_image}
                                                alt=""
                                                class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                                            />
                                        </div>
                                        <div class="flex flex-col leading-tight">
                                            <div class="text-xl font-semibold mt-1 flex items-center">
                                                <span class="text-gray-700 dark:text-slate-50 mr-3">
                                                    {user.username}, {user.age}
                                                </span>
                                            </div>
                                            <span class="text-sm text-gray-600 dark:text-slate-200">
                                                From {user.country}, {user.city}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-lg font-semibold text-slate-500">
                                        <Link as="a" href={route("chat")} className="bg-transparent text-slate-700 dark:text-slate-50 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-900 px-2 py-1 border border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-medium rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
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
                                            <span className="text-xs">Back</span>
                                        </Link>
                                    </div>
                                </div>

                                <div
                                    id="messages"
                                    class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch "
                                >
                                    {messages.length === 0 && (
                                        <div className="flex items-center justify-center">
                                            {/* <EmptyState
                                                bgimage="bg-empty-chat-background"
                                                title="Start conversion"
                                                subtitle="Keep it halal &amp; brief."
                                                btnName="Report"
                                                linktext=""
                                                href={route("report", user.id)}
                                                className={`h-10 w-50`}
                                            /> */}
                                            <div>
                                                <h2 className="text-xl font-medium text-slate-600 dark:text-slate-100">Start conversion</h2>
                                                <p className="text-sm font-medium text-slate-600 dark:text-slate-100">Keep it halal &amp; brief!</p>
                                            </div>
                                        </div>
                                    )}
                                    {messagelist}
                                    <div ref={bottomRef} />


                                    <div className="border-t-2 border-gray-200 dark:border-slate-700 px-4 pt-4 mb-2 sm:mb-0">
                                        <form
                                            onSubmit={submit}
                                            autoComplete="off"
                                        >
                                            <div className="relative flex">
                                                <span className="absolute inset-y-0 flex items-center pl-2">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            className="h-6 w-6 text-gray-600"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            ></path>
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
                                                    required
                                                />

                                                <div className="absolute right-0 items-center inset-y-0 flex">
                                                    <Button className="inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-white bg-slate-600 hover:bg-slate-700 focus:outline-none p-3">
                                                        <span className="font-bold hidden sm:block">
                                                            Send
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="h-5 w-5 sm:ml-2 ml-1 transform rotate-90"
                                                        >
                                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                                        </svg>
                                                    </Button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default ChatMessages;
