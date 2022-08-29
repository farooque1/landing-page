import React from 'react'
import minmax from '../images/min-size-max-power-products-New.png';
import min from '../images/mini.svg';
import max from '../images/max.svg'

function Minmax() {
    return (
        <div className='background'>
            <section className='container '>
                <div className='row'>
                    <div className='col-lg-6 mt-5 mb-5'>
                        <img src={minmax} alt='minmax' className='minmax'/>
                    </div>

                    <div className='col-lg-6 mt-5 mb-5'>
                        <h1 className='margin'><img src={min} alt='mini' /> Size, </h1>
                        <h1><img src={max} alt='max' /> Power. </h1>
                            
                         <h3 className='mt-3'>A powerful instant water heater that gives you
                             hot water in no time with <span>Super compact Desgin.</span> it's
                              perfect for your<span> Bathroom or Kitchen</span> use.</h3>       
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Minmax
