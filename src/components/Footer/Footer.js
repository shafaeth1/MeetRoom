import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div class="footer flex flex-wrap justify-between py-10 bg-neutral text-neutral-content px-2 lg:px-12">
                <div>
                    <span class="footer-title">About</span> 
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact us</Link>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span class="footer-title">Download</span> 
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span class="footer-title">Feature</span> 
                    <Link to='/single' class="link link-hover">Single</Link>
                    <Link to='/receive' class="link link-hover">Receive</Link>
                    <Link to='/chat' class="link link-hover">Chat</Link>
                    <a class="link link-hover">Video</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span> 
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='flex justify-between bg-neutral text-neutral-content px-2 lg:px-12 pb-2'>
                <p className='text-sm'>All right reserved by MeetRoom &copy; 2022</p>
                <div class="grid grid-flow-col gap-2">
                    <i className='fab fa-facebook text-md'></i>
                    <i className='fab fa-twitter text-md'></i>  
                    <i className='fab fa-instagram text-md'></i>                  
                </div>
            </div>
        </footer>
    );
};

export default Footer;