import React from 'react'

function Footerbanner() {
    return (
        <>
            <div className='banner_img text-center'>
               <div>
                <br /><br />
               <h1 className='bannerh1'>A.O.Smith Service</h1>
                <h4 className='bannerh4'>Get peace of mind with A.O.Smith Service advantage.</h4>
               </div>                
                <div className='container'>
                    <section className='row banner'>
                        <div className='col-lg-5 col-md-12 col-xs-12 mt-3 space'>
                            <h3> <i class="fa fa-volume-control-phone " aria-hidden="true"></i>
                                &nbsp; 1860 425 2288 / 1800 103 2468</h3><br /><br />
                            <span>Express Service Assistance</span>
                        </div>
                        <div className='col-lg-1'>
                            <div className='vertical'></div>
                        </div>

                        <div className='col-lg-6 col-md-12 col-xs-12 mt-3'>
                            <h3> <i class="fa fa-calendar-check-o fa-1x" style={{ transform: 'rotate(-0deg)' }} aria-hidden="true"></i>
                                &nbsp; Product Enquiry</h3><br /><br />
                            <span>Enquiry Now</span>
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export default Footerbanner
