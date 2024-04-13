import React,{useState}from 'react'
import {Link,NavLink} from 'react-router-dom'
export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className=" rounded-lg shadow sticky z-50 top-0 overflow-hidden ">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 sm:px-0 py-0">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <div className='flex'>
                        <Link to="/" className="flex justify-start">
                            <img
                                src='/logo.png'
                                className="mr-3 h-15 w-1/2 sm:w-50 h-15  md: lg:w-24"
                                alt="Logo"
                            />
                        </Link>
                        {/* this is menu button for mobile */}
                        <div className="lg:hidden flex justify-end">
                            <button
                            onClick={toggleMobileMenu}
                            className="text-gray-800 focus:outline-none"
                            >
                            {/* You can use an icon here (e.g., hamburger icon) */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" /> */}
                            <svg className="mr-3 h-15 w-1/2 sm:w-30 h-30" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div
                        className={`${isMobileMenuOpen?'block ' :'hidden'} justify-between items-center w-full lg:flex lg:justify-center lg:w-auto lg:order-1 `}
                    >   <div className="flex justify-center lg:justify-end lg:order-2">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign Up
                            </Link>
                        </div>
                        <ul className="flex flex-col  mt-4 font-medium lg:justify-center lg:flex-row lg:space-x-8 lg:mt-0 lg:mx-auto">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => 
                                    ` block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) => 
                                    ` block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) => 
                                    ` block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                    Contact
        
                                </NavLink>
                            </li>    
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    );
}

