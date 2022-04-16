import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li><a href='#'>Daraz</a></li>
                                <li><a href='#'>Cricbuzz</a></li>
                                <li><a href='#'>Foodpanda</a></li>
                                <li><a href='#'>Rokomari</a></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Support</h2>
                            <ul>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Help</a></li>
                                <li><a href='#'>Terms</a></li>
                                <li><a href='#'>Policy</a></li>
                                
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Project</h2>
                            <ul>
                                <li><a href='#'>Food</a></li>
                                <li><a href='#'>E-Commerce</a></li>
                                <li><a href='#'>Bank</a></li>
                                <li><a href='#'>Tutorial</a></li>
                               
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Follow Us</h2>
                            <div className='row'>
                            <div className='col-3 fontawesome'>
                                    <a><i><FaInstagram/></i>Insta</a>
                                         
                                </div>
                                <div className='col-3 fontawesome'>
                                    <a><i><FaYoutube/></i>Youtube</a>
                                         
                                </div>
                                <div className='col-3 fontawesome'>
                                    <a><i><FaFacebook/></i>Facebook</a>
                                         
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className='mt-5'>
                        <p className='text-center w-100'>Copyright @ 2022 Alif Ahmed. All rights reserverd.</p>
                    </div>

                </div>

            </div>

        </div>

    </footer>

    </>
  )
}

export default Footer