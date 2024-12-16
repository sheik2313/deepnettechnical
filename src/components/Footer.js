import React from 'react'
import './footer.css'
import { MdFacebook } from "react-icons/md";
import { FaYoutubeSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
function Footer() {
    return (
        <div>
            <footer>
                <div className="contact">
                    <p className='conect'>CONNECT WITH US</p>
                    <p>📞 +91 9567483340</p>
                    <p>📧 info@deepnetsoft.com</p>
                </div>
                <div className="logo">
                    <p >DEEP NET SOFT</p>
                    <p className='icons'><MdFacebook /> <FaYoutubeSquare /> <CiTwitter /> <FaInstagram /></p>
                </div>

                <div className="location">
                    <p className='conect'>FIND US</p>
                    <p> <CiLocationOn />  First Floor, Geo Infopark, Infopark<br /> EXPY, Kakkanad</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
