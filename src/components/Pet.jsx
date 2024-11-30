import React from 'react'
import { useful } from '../assets/data'

const Pet = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='flex flex-col md:flex-row text-center md:text-start space-y-2 items-center justify-between py-5'>
                    <div>
                        <p>You already know ?</p>
                        <h3 className='text-blue'>Useful pet knowledge</h3>
                    </div>
                    <div>
                        <button className="transparetn !py-2 !px-5">View more <span><i class="bi bi-arrow-right-short"></i></span></button>
                    </div>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {useful.map((a, index) => {
                        return (
                            <li key={index} className='shadow-usefullshd px-1.5 py-1 rounded-lg mx-auto w-full'>
                                <img className='rounded-lg' src={a.img} alt="Dogs Image" />
                                <div>
                                    <h3>{a.title}</h3>
                                    <p>{a.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Pet