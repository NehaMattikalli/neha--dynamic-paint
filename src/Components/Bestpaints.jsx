import React from 'react'
import "./Bestpaints.css"
import bp1 from "../Assets/Images/bp1.png"
import bp2 from "../Assets/Images/bp2.png"
import bp3 from "../Assets/Images/bp3.png"
import bp4 from "../Assets/Images/bp4.png"
function bestpaints() {
    return (
        <div className="bestpaints">
            <div className="container-fluid">
                <div className="row best">
                    <div data-aos="fade-down-right" className="col-md-6 bestideas">
                        <div className="besthands">
                            <h1> The Best Paints, the Best Hands & Your Ideas</h1>
                        </div>
                        <button className="learnButton">
                            LEARN MORE
                        </button>
                    </div>
                    <div  className="col-md-6">
                        <div className="row paint2">
                            <div className="col-md-6 lcol">
                                <div className="dabbi1">
                                    <div data-aos="fade-down-left" data-aos-delay="300" className="box1">
                                        <div className="img1">
                                            <img src={bp1} alt="" />
                                        </div>
                                        <p>Satisfied Clients</p>
                                    </div>

                                    <div data-aos="fade-down-left" data-aos-delay="600" className="box2">
                                        <div className="img2">
                                            <img src={bp2} alt="" />
                                        </div>
                                        <p>Active Clients</p>
                                    </div>
                                </div>

                            </div>
                            <div  className="col-md-6 rcol">
                                <div className="dabbi2">
                                    <div data-aos="fade-down-left" data-aos-delay="900" className="box3">
                                        <div className="img3">
                                            <img src={bp3} alt="" />
                                        </div>
                                        <p>Industry Solution</p>
                                    </div>
                                    <div data-aos="fade-down-left" data-aos-delay="1200" className="box4">
                                        <div className="img4">
                                            <img src={bp4} alt="" />
                                        </div>
                                        <p> Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
               
                
                
                
            </div> */}

        </div>
    )
}

export default bestpaints
