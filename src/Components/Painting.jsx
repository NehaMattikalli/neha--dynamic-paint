import React from 'react'
import { useEffect } from 'react'
import "./Painting.css"
import shifting from "../Assets/Images/shifting.png"
import color from "../Assets/Images/color.png"
import transparent from "../Assets/Images/transparent.png"
import Aos from "aos";
import "aos/dist/aos.css"
function Painting() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div data-aos="zoom-in-right" className="painting">
            <div className="container-fluid paintContainer">
                <div className="row rows">
                    <div className="col-lg-6 offset-lg-6 columns">
                        <div className="container">
                            <div data-aos="fade-up" className="row change">
                                <h1>
                                    Why Our <span className="service"> Painting Service</span> Is Better Than Others
                                </h1>
                            </div>


                            <div data-aos="flip-up" data-aos-delay="500" className="shifting">
                                <div className="row cont">
                                    <div className="col-2 imagu">
                                        <img src={shifting} alt="" />
                                    </div>
                                    <div className="col-10 colucolu">
                                        <h1>Shifting and protection of home and furniture</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, autem?</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-delay="500" className="color ">
                                <div className="row cont">
                                    <div className="col-2 imagu">
                                        <img src={color} alt="" />
                                    </div>
                                    <div className="col-10 colucolu">
                                        <h1>Color consultant to help in color selection</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, autem?</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-up" data-aos-delay="500" className="transparent">
                                <div className="row cont">
                                    <div className="col-2 imagu">
                                        <img src={transparent} alt="" />
                                    </div>
                                    <div className="col-10 colucolu">
                                        <h1>Transparent pricing and value for money</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, autem?</p>
                                    </div>
                                </div>

                            </div>





                            <div className="row flexBox">
                                <div className="icon">

                                </div>
                                <div className="iconContent">

                                </div>
                            </div>
                            <div className="row"></div>
                            <div className="row"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Painting
