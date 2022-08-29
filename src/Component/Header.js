import React from 'react'
import banner from '../images/banner-image-with-product.jpg';
import most from '../images/most-compact-badge.png';

function Header() {
  return (
    <div>
      <div className='headerimage'>
        <img src={banner} alt='banner' width='100%' />
      </div>
      <div className='container-fluid'>
        <section className='row  text-center mb-3'>
          <div className='col-lg-3  col-md-4 col-xs-12 header mt-5'>
            <i class="fa  fa-handshake-o fa-2x mt-2" aria-hidden="true"></i>
            <h4>EASILY FITS</h4>
            <p>Lorem ipsum, dolor sit amet <b />
              consectetur adipisicing elit</p>
            <div className='hr1' ></div>
          </div>
          <div className='col-lg-5 col-md-4 col-xs-12'>
            <div className='semi-circle'>
              <img src={most} alt='most' width='20%' />
              <h4> Instant Water Heater* </h4>
              <p>Lorem ipsum, dolor sit amet
                consectetur elit.<br />
                consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-xs-12 header mt-5'>
            <i class="fa  fa-hourglass-end fa-2x" aria-hidden="true"></i>
            <h4>STRONGER <br />CONSTRUCTION QUALITY</h4>
            <p>Lorem ipsum, dolor sit amet consectetur<br />
              adipisicing elit. Illo,</p>
            <div className='hr2'></div>
          </div>
        </section>

        <section className='row text-center top'>

          <div className='col-lg-6 col-md-6 col-xs-12 header'>
            <i class="fa fa-bath fa-2x" aria-hidden="true"></i>
            <h4>GET INSTANT HOT WATER</h4>
            <p>Lorem ipsum, dolor sit amet consectetur
            </p>
            <div className='hr3' ></div>
          </div>

          <div className='col-lg-6 col-md-6 col-xs-12 header'>
            <i class="fa fa-bullseye fa-2x" aria-hidden="true"></i>
            <h4>DESGINED FOR HIGH RISE BUILDINGS</h4>
            <p>Lorem ipsum, dolor sit amet consectetur
            </p>
            <div className='hr4 '></div>
          </div>
        </section>

        <section className='row text-center top'>

          <div className='col-lg-12 col-md-12 col-sm-12 header'>
            <i class="fa fa-diamond fa-2x" aria-hidden="true"></i>
            <h4>LONGER LIFE</h4>
            <p>Lorem ipsum, dolor sit ametelit Illo, voluptas.<br />Quibusdam,
              quia. Accusantium,</p>
            <div className='hr5 '></div>
          </div>

          <p className='bottom-text mt-3 mb-4'>Lorem ipsum, dolor sit amet consectetur .voluptas. Quibusdam, quia.</p>
        </section>
      </div>

    </div>
  )
}

export default Header
