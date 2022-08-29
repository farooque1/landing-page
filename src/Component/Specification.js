import React from 'react'
import most from '../images/specification.png';
function Specification() {

  return (

    <>
      <section className='back'>
        <div className='container text-center'><br /><br />
          <h1 class="fancy-title"><span>Specification</span></h1>
          <section className='row circle mt-5 mb-3'>

            <div className='col-lg-3 col-md-6 col-xs-12 mt-5'>
              <div class="res-circle">
                <div class="circle-txt"> <h4>Voltage /Frq <br />[V/Hz] <br /> <span style={{ color: 'green' }}>230~/50</span></h4>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-xs-6'>
              <div class="res-circle">
                <div class="circle-txt"> <h4>Retad water <br />[Bar] <br /> <span style={{ color: 'green' }}>230~/50</span></h4>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-xs-6'>
              <div class="res-circle">
                <div class="circle-txt"> <h4>Height in mm <br />[A] <br /> <span style={{ color: 'green' }}>230~/50</span></h4>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-xs-12 mt-5'>
              <div class="res-circle">
                <div class="circle-txt"> <h4>Width in mm <br />[B] <br /> <span style={{ color: 'green' }}>230~/50</span></h4>
                </div>
              </div>
            </div>
          </section>

          <section className='row ' style={{ 'margin-top': '-20px', 'margin-left': '75px', 'margin-right': '35px' }}>
            <div className='col-lg-6 col-md-10 col-xs-12'>
              <div class="res-circle2">
                <div class="circle-txt"> <h4>Power <br />[W] <br /> <span style={{ color: 'green' }}>300/450</span></h4>
                </div>
              </div>
            </div>


            <div className='col-lg-6 col-md-10 col-xs-12 d-flex flex-row-reverse'>
              <div class="res-circle2">
                <div class="circle-txt"> <h4>Depth in mm <br />[C] <br /> <span style={{ color: 'green' }}>209</span></h4>
                </div>
              </div>
            </div>
          </section>

          <section className='row mt-2' style={{ 'margin-top': '-10px', 'margin-left': '45px' }}>
            <div className='col-lg-3 col-md-6 col-xs-12'>
              <div class="res-circle3">
                <div class="circle-txt"> <h4>Volum <br />[L] <br /> <span style={{ color: 'green' }}>3</span></h4>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-xs-12'>
              <div className='semi-circle2'>
                <img src={most} alt='most' width='50%' />
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-xs-12 d-flex flex-row-reverse'>
              <div class="res-circle3">
                <div class="circle-txt"> <h4>Net Weight <br />[kg] <br /> <span style={{ color: 'green' }}>4.2</span></h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

    </>
  )
}

export default Specification
