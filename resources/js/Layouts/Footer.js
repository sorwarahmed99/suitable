import { Link } from '@inertiajs/inertia-react';
import React from 'react';

function Footer() {
    return <>
        <footer className="relative z-10 mt-10 pt-10 bg-white shadow-sm dark:bg-slate-800">
            {/* <div className="bg-[url('/img/footer-texture.svg')]"></div> */}
            <div className="container">
                <div className="px-6 pb-10 mb-20 bg-white dark:bg-slate-800 rounded-lg shadow-xl md:px-12 subscribe-area">
                    <div className="row">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:mt-12 subscribe-content">
                                <h2 className="text-2xl font-semibold sm:text-3xl subscribe-title text-slate-800 dark:text-slate-100">
                                    Subscribe Our Newsletter
                                    <span className="block font-normal">to get reguler updates</span>
                                </h2>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mt-12 subscribe-form">
                                <form action="#" className="relative focus:outline-none">
                                    <input type="email" placeholder="Enter eamil" className="w-full py-4 pl-6 pr-40 duration-300 rounded focus:ring-2 focus:ring-red-400 focus:border-none focus:outline-none" />
                                    <button className="main-btn gradient-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-wrap -mx-4 footer-widget px-4 pb-5 bg-white dark:bg-slate-800">
                        <div className="w-full sm:w-2/3 lg:w-3/12 px-4">
                            <div className="w-full mb-10">
                                <Link href="/" className="flex">
                                    <img className="mr-3 h-10 w-10" src="assets/images/logo.png" alt="shape" />
                                    <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-800 dark:text-slate-50">Suitable</span>
                                </Link>
                                <p className="text-base text-slate-800 dark:text-white mb-7 p-4">
                                    Suitable is a trusted muslim match
                                    making platform performing all over the world. We are working to
                                    connect you with your partner without the exception of race, color, and ethnicity
                                </p>

                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-2/12 px-4">
                            <div className="w-full mb-10">
                            <h4 className="text-dark text-lg font-semibold mb-9 text-slate-800 dark:text-slate-50 ">Resources</h4>
                            <ul className="link">
                                <li>
                                    <a
                                        href="/"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Read Faq
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Support
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-2/12 px-4">
                            <div className="w-full mb-10">
                            <h4 className="text-dark text-lg font-semibold mb-9 text-slate-800 dark:text-slate-50">Company</h4>
                            <ul className="link">
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    About Suitable
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Success Stories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-2/12 px-4">
                            <div className="w-full mb-10">
                            <h4 className="text-dark text-lg font-semibold mb-9 text-slate-800 dark:text-slate-50">Quick Links</h4>
                            <ul className="link">
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Join Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Read Our Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Premium Support
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="
                                        inline-block
                                        text-base text-slate-800 dark:text-slate-50
                                        hover:text-primary
                                        leading-loose
                                        mb-2
                                        "
                                        >
                                    Data Protection Policy
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-3/12 px-4">
                            <div className="w-full mb-10">
                                <h4 className="text-lg font-semibold mb-9 text-slate-800 dark:text-slate-50">Contact Us</h4>
                                <div className="flex items-center mb-6">
                                    <ul className="link">
                                        <li><a href="#"><i className="lni lni-envelope"></i>info@suitable.com</a></li>
                                        <li><a href="#"><i className="lni lni-facebook"></i>fb.com/suitable</a></li>
                                        <li><a href="#"><i className="lni lni-twitter"></i>@suitable</a></li>
                                        <li><i className="lni lni-instagram"></i><a href="#">@suitable</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="absolute left-0 bottom-0 z-[-1]">
                        <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                            fill="url(#paint0_linear_1179_5)"
                            />
                            <defs>
                            <linearGradient
                                id="paint0_linear_1179_5"
                                x1="76.5"
                                y1="281"
                                x2="76.5"
                                y2="1.22829e-05"
                                gradientUnits="userSpaceOnUse"
                                >
                                <stop stopColor="#3056D3" stopOpacity="0.08" />
                                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute top-10 right-10 z-[-1]">
                        <svg
                            width="75"
                            height="75"
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                            fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                            <linearGradient
                                id="paint0_linear_1179_4"
                                x1="-1.63917e-06"
                                y1="37.5"
                                x2="75"
                                y2="37.5"
                                gradientUnits="userSpaceOnUse"
                                >
                                <stop stopColor="#13C296" stopOpacity="0.31" />
                                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
                <div className="py-8 border-t border-gray-200 footer-copyright">
                    <p className="text-slate-800 dark:text-slate-200 text-center">
                        Copyright &copy; www.suitable.com | All right reserved
                    </p>
                </div>
            </footer>
    </>;
}

export default Footer;
