import React from 'react'
import logo from '../src/assets/Group 1.png'
export const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 mt-2">
                <div className="col-md-3 mb-2 mb-md-0">
                    <img src={logo} alt="logo" />
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0  ">
                    <li><a href="#" className="nav-link px-2 text-black fw-bold ">Home</a></li>
                    <li><a href="#" className="nav-link px-2 text-black fw-bold mx-5">Services</a></li>
                    <li><a href="#" className="nav-link px-2 text-black fw-bold">ContactUs</a></li>
                  
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn  me-2 fw-bold">Login</button>
                    <button type="button" className="btn btn-warning text-white rounded-pill fw-bold ">BookScooter</button>
                </div>
            </header>
        </div>
    )
}
export default Header;