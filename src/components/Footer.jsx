import React from 'react'
import { logo } from '../assets/data'

const Footer = () => {
    return (
        <footer className='bg-people'>
            <div className="container py-5 ">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 bg-blue px-7 py-5 rounded-xl'>
                    <div>
                        <h3 className='text-white'>Register now so you don't miss <br /> our programs</h3>
                    </div>
                    <div className='bg-white items-center py-2 md:py-0 px-5 space-x-0 space-y-2 md:space-y-0 md:space-x-4 flex rounded-lg'>
                        <input type="text" className='border outline-none px-4 py-2 md:px-8 md:py-2 border-gray rounded-lg' placeholder='Enter your Email' />
                        <button className="py-2 px-7 bg-blue rounded-lg text-white hidden md:flex
                        ">Subcribe Now</button>
                    </div>
                </div>
                <div className='block md:flex justify-between'>
                    <ul className='flex flex-col md:flex-row items-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 py-6'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 py-6'>
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i class="bi bi-youtube"></i></a></li>
                    </ul>
                </div>
                <hr />
                <div className='block text-center space-y-7 md:flex md:text-start md:space-y-0 items-center justify-between py-10'>
                    <p>© 2022 Monito. All rights reserved.</p>
                    <img className='mx-auto' src={logo} alt="Logotip" />
                    <p>Terms of Service          Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer