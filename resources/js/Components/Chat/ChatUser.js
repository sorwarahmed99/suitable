import { Link } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import Img from '../../../../public/assets/images/user-avatar.png'

function ChatUser({user, active}) {
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
    
    return (
        <Link href={route('chatwithuser', user.username)}>
            <div className="block text-gray-600 border-l-2 border-red-400 hover:text-black mb-2 rounded-md" >
                <div className={`entry cursor-pointer p-2 border-l-4 hover:border-red-400 transform hover:scale-105 duration-300 transition-transform bg-white dark:bg-slate-700 dark:text-slate-50 flex shadow-md rounded-md ${active && 'cursor-pointer p-2 border-l-4 hover:border-red-400 transform hover:scale-105 duration-300 transition-transform bg-white flex shadow-md rounded-md' }`}>
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img className="w-12 h-12 rounded-full mx-auto" src={user.profile_image} alt={`${user.username}'s Profile photo`} />
                            <span className={`absolute w-4 h-4  rounded-full right-0 bottom-0 border-2 border-white ${user.isOnline ? 'bg-green-400' : 'bg-slate-400'}`}></span>
                        </div>
                    </div>
                        <div className="flex-1 px-2">
                            <div className="truncate w-32"><span className="text-gray-800 font-bold text-md dark:text-slate-50">{user.username}</span></div>
                            
                            <p className="text-gray-600 dark:text-slate-200 text-xs font-semibold truncate">{user.last_message}</p>
                        </div>
                    <div className="flex-2 text-right">
                        <div><small className="text-gray-500 dark:text-slate-50 text-xs">{formatDate(user.time)}</small></div>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default ChatUser