import React from 'react'
import { banner, product } from '../assets/data'

const ProductPets = () => {
    return (
        <section>
            <div className="container py-16">
                <div className='flex flex-col md:flex-row text-center md:text-start space-y-2 items-center justify-between py-5'>
                    <div>
                        <p>Whats new?</p>
                        <h3 className='text-blue'>Take a look at some of our pets</h3>
                    </div>
                    <div>
                        <button className="transparetn !py-2 !px-5">View more <span><i class="bi bi-arrow-right-short"></i></span></button>
                    </div>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 py-5'>
                    {
                        product.map((i, index) => {
                            return (
                                <li key={index} className='shadow-pets p-1 rounded-lg'>
                                    <img className='rounded-lg p-1 mx-auto w-full' src={i.img} alt="Image" />
                                    <div className='px-0.5'>
                                        <h4>{i.title}</h4>
                                        <p>{i.price}VND</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <br /> <br />
                <img src={banner} alt="Banner" />
                <br /><br /><br />
            </div>
        </section>
    )
}

export default ProductPets