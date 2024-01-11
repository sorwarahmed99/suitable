import { Link } from '@inertiajs/inertia-react';
import React from 'react';

function Footer() {
    return <>
        <footer className="relative z-10 mt-10 pt-10 bg-white shadow-sm dark:bg-slate-800">
            <div className="container">
                    <div className="flex flex-wrap -mx-4 footer-widget px-4 pb-5 bg-white dark:bg-slate-800">
                        <div className="w-full sm:w-2/3 lg:w-3/12 px-4">
                            <div className="w-full mb-10">
                                <Link as="a" href="/" className="flex items-start justify-start">
                                    {/* <img className="h-7 w-full" src="assets/images/s.svg" alt="shape" /> */}
                                    <span className="self-center text-3xl whitespace-nowrap pl-[0.5px] text-purple-800 font-bold dark:text-white">Suitable</span>
                                </Link>
                                <p className="text-base text-slate-800 dark:text-white mb-7 p-4 pl-0">
                                    Suitable is a trusted muslim match
                                    making platform performing all over the world. We are working to
                                    connect you with your partner.
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
                                {/* <li>
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
                                </li> */}
                                <li>
                                    <a
                                        href="/faq"
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
                                        href="/contact-support"
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
                                        href="/"
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
                                        href="/contact-support"
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
                                        href="/"
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
                                        href="/terms"
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
                                        href="/privacy-policy"
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
                                        <li><a href="#"><i className="lni lni-envelope"></i>hello@suitable.one</a></li>
                                        {/* <li><a href="#"><i className="lni lni-facebook"></i>fb.com/suitable</a></li> */}
                                        <li><i className="lni lni-instagram"></i><a href="#">suitableone</a></li>
                                        <li className="flex">
                                            <svg fill="#1C2033" width="18" height="18" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_412_113)"><path d="M33.4133 0.0533333C36.9067 0 40.3733 0.0266667 43.84 0C44.0533 4.08 45.52 8.24 48.5067 11.12C51.4933 14.08 55.7067 15.44 59.8133 15.8933V26.64C55.9733 26.5067 52.1067 25.7067 48.6133 24.0533C47.0933 23.36 45.68 22.48 44.2933 21.5733C44.2667 29.36 44.32 37.1467 44.24 44.9067C44.0267 48.64 42.8 52.3467 40.64 55.4133C37.1467 60.5333 31.0933 63.8667 24.88 63.9733C21.0667 64.1867 17.2533 63.1467 14 61.2267C8.61334 58.0533 4.82668 52.24 4.26668 46C4.21334 44.6667 4.18668 43.3333 4.24001 42.0267C4.72001 36.96 7.22668 32.1067 11.12 28.8C15.5467 24.96 21.7333 23.12 27.52 24.2133C27.5733 28.16 27.4133 32.1067 27.4133 36.0533C24.7733 35.2 21.68 35.44 19.36 37.04C17.68 38.1333 16.4 39.8133 15.7333 41.7067C15.1733 43.0667 15.3333 44.56 15.36 46C16 50.3733 20.2133 54.0533 24.6933 53.6533C27.68 53.6267 30.5333 51.8933 32.08 49.36C32.5867 48.48 33.1467 47.5733 33.1733 46.5333C33.44 41.76 33.3333 37.0133 33.36 32.24C33.3867 21.4933 33.3333 10.7733 33.4133 0.0533333Z"/></g><defs><clipPath id="clip0_412_113"><rect width="64" height="64" fill="white"/></clipPath></defs></svg>
                                            <a href="#" className='flex ml-5'>suitable.one</a>
                                        </li>
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
