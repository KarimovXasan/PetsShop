import React from 'react'
import { ourproduct } from '../assets/data'

const OurProduct = () => {
    return (
        <section>
            <div className="container">
                <div className='flex flex-col md:flex-row text-center md:text-start space-y-2 items-center justify-between py-5'>
                    <div>
                        <p>Hard to choose right products for your pets?</p>
                        <h3 className='text-blue'>Our Products</h3>
                    </div>
                    <div>
                        <button className="transparetn !py-2 !px-5">View more <span><i class="bi bi-arrow-right-short"></i></span></button>
                    </div>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 py-5'>
                    {ourproduct.map((e, index) => {
                        return (
                            <li key={index} className='shadow-product px-2 space-y-1 py-2 rounded-xl'>
                                <img className='rounded-lg mx-auto w-full' src={e.img} alt="Image2" />
                                <div>
                                    <h4>{e.title}</h4>
                                    <p>{e.price}</p>
                                </div>
                                <button className='bg-people w-full rounded font-bold text-dark-blue py-1'>Free Toy & Free Shaker</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default OurProduct