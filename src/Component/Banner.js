import React from 'react'
import black from '../images/FastOn_Black_Front.png';

function Banner() {
  return (
    <>
      <div className='poster'>
        <section>
          <div className='col-lg-12'>
            <img src={black} alt='black' />
            <h1>Black</h1>
            <p>Lorem ipsum, dolor sit ametelit voluptas.<br />
              Quibusdam, quia. Accusantium,</p>
            <button type="button" class="btn btn-success"> Boy Now </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Banner
