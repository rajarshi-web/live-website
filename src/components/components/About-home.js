import React from 'react';
import Buttons from './Buttons';
const paragraph = [
    { para: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Old World knifefish pike conger burbot pollock herring? Tetra electric eel jellynose fish inconnu murra cod treefish false trevally orangespine. Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Old World knifefish pike conger burbot pollock herring? Tetra electric eel jellynose' },
    { para: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Old World knifefish pike conger burbot pollock herring? Tetra electric eel jellynose fish inconnu murray cod treefish false trevally orangespine.'}
];

export default function Abouthome() {
    return (
        <div>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="heading-text">
                                <h3 className="text--start">
                                    <span>About</span> Us
                                </h3>
                            </div>
                            <div className="head-paragraph">
                                <p>
                                   {paragraph[0].para}
                                </p>
                            </div>
                            <div className="about-bg">
                                <div className="about-why">
                                    <h5>
                                        <span>01</span>Clinet Satisfaction
                                    </h5>
                                    <h5>
                                        <span>02</span>Best Price
                                    </h5>
                                </div>
                            </div>
                            <div className="head-paragraph">
                                <p>
                                    {paragraph[1].para}
                                </p>
                            </div>
                            <Buttons href="#contact">Contact Us</Buttons>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="about-box">
                                <div className="about-img">
                                    <img src="assets/img/about us.png" className="img-fluid" />
                                    <div className="play">
                                        <a href="#">
                                            <img src="assets/img/play.png" className="img-fluid" />
                                            <span className="ripple" />
                                        </a>
                                    </div>
                                </div>
                                <div className="aria-current">
                                    <img src="assets/img/Group 114.png" />
                                </div>
                                <div className="about-call text-white">
                                    <h5>Contact us :</h5>
                                    <h6>+91 333 000 4444</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
