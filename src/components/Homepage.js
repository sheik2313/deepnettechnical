import React from 'react'
import './homepage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Menu from './Menu'

function Homepage() {
    return (
        <div>
            <Navbar />

            <div>
                <h1 className='homepagecontent'>Welcome to our Homepage</h1>
                

            </div>
            <Menu />

            <Footer />

        </div>
    )
}

export default Homepage
