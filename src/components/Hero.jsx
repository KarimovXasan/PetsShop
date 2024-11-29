import React from 'react'
import { dogPeople } from '../assets/data'

const Hero = () => {
    return (
        <section className='bg-people'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center md:text-start'>
                    <div className='text-dark-blue space-y-5'>
                        <div>
                            <h1>One more friend</h1>
                            <h2>Thousands more fun!</h2>
                        </div>
                        <p>Having a pet means you have more joy, a new friend, a happy <br /> person who will always be with you to have fun. We have 200+ <br /> different pets that can meet your needs!</p>
                        <div className='space-x-5'>
                            <button className="transparetn">View Intro <span><i class="bi bi-play-circle"></i></span></button>
                            <button className="Join !py-3 !px-7">Explore Now</button>
                        </div>
                    </div>
                    <div>
                        <img src={dogPeople} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero