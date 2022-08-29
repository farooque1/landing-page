import React from 'react'
import Footerbanner from './Footerbanner'

function Footer() {
    return (
        <>
            <Footerbanner />

            <div class="">
                <footer class="d-flex flex-wrap py-3 bg-dark footer">
                    <p class="col-md-5 col-md-12 col-xs-12 mb-0 text-muted text-decoration-none px-5 ">Privacy Policy Trems & Conditions</p>

                    <a href="/" class="col-md-3 col-md-12 col-xs-12 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    </a>

                    <ul class="nav col-md-4 col-md-12 col-xs-12 justify-content-end">
                        <li class="nav-item"><span className='nav-link px-4 text-muted'>All rights reserved. </span></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-3 text-muted"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>

                    </ul>
                </footer>
            </div>

        </>


    )
}

export default Footer
