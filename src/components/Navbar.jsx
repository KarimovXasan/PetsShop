import React, { useState } from 'react';
import { logo } from '../assets/data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Menyu holatini boshqarish

    return (
        <header className='bg-people'>
            <div className="container flex justify-between items-center py-6">
                <a href="#">
                    <img src={logo} alt="Logotip" />
                </a>
                {/* Hamburger menu for mobile */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
                </button>

                {/* Navigation */}
                <nav
                    className={`absolute md:static top-full left-0 w-full md:w-auto bg-people md:bg-transparent transition-all duration-300 ${
                        isOpen ? 'block' : 'hidden'
                    } md:flex items-center justify-between gap-6`}
                >
                    <ul className='flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-0'>
                        <li><a href="#" className="hover:text-red-500">Home</a></li>
                        <li><a href="#" className="hover:text-red-500">Category</a></li>
                        <li><a href="#" className="hover:text-red-500">About</a></li>
                        <li><a href="#" className="hover:text-red-500">Contact</a></li>
                    </ul>
                    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 p-4 md:p-0'>
                        <div className='bg-white py-3 px-8 rounded-full flex items-center space-x-1.5'>
                            <i className="bi bi-search"></i>
                            <input
                                className='outline-none w-full md:w-auto'
                                type="text"
                                placeholder="Search something here!"
                            />
                        </div>
                        <button className="Join">Join the community</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
