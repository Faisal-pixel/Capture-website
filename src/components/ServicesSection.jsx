import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>

                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock-svg"/>
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork-svg"/>
                            <h3>Teamwork</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm-svg"/>
                            <h3>Diaphragm</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money-svg"/>
                            <h3>Affordable</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="" />
            </div>
        </div>
    )
}

export default ServicesSection;