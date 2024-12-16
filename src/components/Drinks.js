import React from 'react'
import './drinks.css'
import '../components/Navbar'
import Navbar from '../components/Navbar'
import '../components/Footer'
import Footer from '../components/Footer'
import Menu from './Menu'

function Drinks() {
    return (

        <div>
            <Navbar />
            <Menu />
            <div className='outerview'>
                <div className="menu-content">
                    <h2>BRUNCH COCKTAILS</h2>

                    <div className="menu-items">
                        <div className='flexthecontent'>
                        <div className="item">
                            <h3>
                                CINNAMON TOAST CRUNCH....................................................... <span>$16</span>
                            </h3>
                            <p>
                                Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys,
                                egg white, cinnamon
                            </p>
                        </div>
                        <div className="item ">
                            <h3>
                                MOET SPRITZ ...........................................................................<span>$20</span>
                            </h3>
                            <p>
                                Aperol, St Germain, botanical liquor, fresh lime juice, mini brut
                                Moet topper
                            </p>
                        </div>
                        </div>
                        
                        <div className='flexthecontent'>
                        <div className="item">
                            <h3>
                                BAR 42 MARY.................................................................................. <span>$14</span>
                            </h3>
                            <p>
                                Titos, tomato juice, worcestershire,vanila celery salt, black pepper,
                                tabasco, fully loaded
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                BAR 42 MARY.......................................................................... <span>$14</span>
                            </h3>
                            <p>
                                Titos, tomato juice, worcestershire, celery salt, black pepper,
                                tabasco, fully loaded
                            </p>
                        </div>
                        </div>
                      

                      
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Drinks
