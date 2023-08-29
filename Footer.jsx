import React from 'react';
import logo from '../assets/logo.png'
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
       <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="" className="w-10 " />
    <p>MindConnect.<br/>Providing reliable tech since 2023</p>
        <a className="link link-hover">Being a full-time psychologist,i make<br/>my patients feel special so
         they can<br/>discuss their problems openly.My<br/>goal is to help people fighting their<br/> 
         fears and life issues.</a> 
             

  
  </div> 
  <div>
    <span className="footer-title">Contact Details</span> 
    <a className="link link-hover">Address</a> 
    <a className="link link-hover">Phone Number</a> 
    <a className="link link-hover">Email</a>
     <a className="link link-hover"><FaFacebookF></FaFacebookF>Facebook</a>
     
     
    <a className="link link-hover">Time</a>
  </div> 
  <div>
    <span className="footer-title">Our Programs</span> 
    <a className="link link-hover">Dating and Relationship</a> 
    <a className="link link-hover">Grief and Loss Counseling</a> 
    <a className="link link-hover">Self Esteem Therapy</a>
        <a className="link link-hover">Kids and Family</a>
            <a className="link link-hover">Life and Future Planning</a>
                <a className="link link-hover">Old Age  Therapy</a>



  </div> 
  <div>
    <span className="footer-title">Book Appoinment</span> 
    <a className="link link-hover">let's chat(01816-149281)</a> 
    <a className="link link-hover">Contact us now for a quote about<br/> consultation(Available 24/7)</a> 
  </div>
</footer>
        </div>
    );
};

export default Footer;