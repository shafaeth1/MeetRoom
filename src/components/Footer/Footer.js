import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div class="footer py-10 bg-base-200 text-base-content px-2 lg:px-6">
                <div>
                    <span class="footer-title">Services</span> 
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span class="footer-title">Company</span> 
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact us</Link>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span class="footer-title">Legal</span> 
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='px-2 lg:px-6 bg-base text-base-content text-center'>
                <p>All right reserved by MeetRoom &copy; 2022</p>
            </div>
        </footer>
    );
};

export default Footer;