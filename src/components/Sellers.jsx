import React from 'react'
import { banner2, iconsCompany } from '../assets/data'

const Sellers = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='flex items-center justify-between '>
                    <div>
                        <p>Proud to be part of</p>
                        <h3>Pet Sellers</h3>
                    </div>
                    <div>
                        <button className="transparetn">
                            View all our sellers <span><i class="bi bi-arrow-right-short"></i></span>
                        </button>
                    </div>
                </div>
                <br /> <br />
                <div>
                    <img className='w-full' src={iconsCompany} alt="Company Logotips" />
                </div>
                <br /><br />
                <img src={banner2} alt="" />
            </div>
        </section>
    )
}

export default Sellers