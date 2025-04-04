import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-animation">
                    <div className='banner-image banner-image1'></div>
                    <div className='banner-image banner-image2'></div>
                </div>
                <div className="banner-contant">
                    <h1>Unlimited Movies, Tv shows, and more.</h1>
                    <p>Watch anywher, Cancle anytime.</p>

                    <div className="banner-button">
                        <div className="btn btn-play">Get Started</div>
                        <div className="btn btn-info">Learn more</div>
        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner