import React from 'react'
import Buttons from './Buttons';

const paragraph = [
    { para: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet' },
    { para: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet'}
];

const headingOfFast = [
    { heading: 'Fast Solution', para: 'Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo erat amet'},
    { heading: 'Fast Solution', para: 'Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo erat amet'},
    { heading: 'Fast Solution', para: 'Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo erat amet'}
]


export default function WhyChoose() {
    return (
        <div>
            <section className="choose">
                <div className="container">
                    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1">
                        <div className="col">
                            <div className="choose-left">
                                <div className="heading-text">
                                    <h3 className="text--start">
                                        <span>Why </span>Choose Us ?
                                    </h3>
                                </div>
                                <div className="head-paragraph">
                                    <p>
                                        {paragraph[0].para}
                                    </p>
                                    <p>
                                        {paragraph[1].para}
                                    </p>
                                </div>
                                <Buttons href="#see">See More</Buttons>
                            </div>
                        </div>
                        <div className="col">
                            <div className="choose-right">
                                <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1">
                                    <div className="col">
                                        <div className="box-choose mar-tip">
                                            <a href="#"></a>
                                            <div className="fontawesome">
                                                <a href="#">
                                                    <img src="assets/img/Vector.png" className="img-fluid" />
                                                    <h6>{headingOfFast[0].heading}</h6>
                                                    <p>
                                                        {headingOfFast[0].para}
                                                    </p>
                                                </a>
                                                <div className="d-flex news-a">
                                                    <a href="#" />
                                                    <a href="#">
                                                        See More{" "}
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-choose mar-tip">
                                            <a href="#"></a>
                                            <div className="fontawesome">
                                                <a href="#">
                                                    <img src="assets/img/Vector.png" className="img-fluid" />
                                                    <h6>{headingOfFast[1].heading}</h6>
                                                    <p>
                                                      {headingOfFast[1].para}
                                                    </p>
                                                </a>
                                                <div className="d-flex news-a">
                                                    <a href="#" />
                                                    <a href="#">
                                                        See More{" "}
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="box-choose mar-top">
                                            <a href="#"></a>
                                            <div className="fontawesome">
                                                <a href="#">
                                                    <img src="assets/img/Vector.png" className="img-fluid" />
                                                    <h6>{headingOfFast[2].heading}</h6>
                                                    <p>
                                                       {headingOfFast[2].para}
                                                    </p>
                                                </a>
                                                <div className="d-flex news-a">
                                                    <a href="#" />
                                                    <a href="#">
                                                        See More{" "}
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
