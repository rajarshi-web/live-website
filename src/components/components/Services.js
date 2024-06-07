import React from 'react';

const services = [
    { imgSrc: 'assets/img/chess_3307255.png', title: 'Strategic', subtitle: 'Planning' },
    { imgSrc: 'assets/img/handshake_1786971.png', title: 'Business', subtitle: 'Planning', marginTop: true },
    { imgSrc: 'assets/img/life-insurance_1518636.png', title: 'Insurance', subtitle: 'Policy' },
    { imgSrc: 'assets/img/hotel_1426251.png', title: 'Child', subtitle: 'Planning', marginTop: true }
];

export default function Services() {
    return (
        <div>
            <section className="planning">
                <div className="container">
                    <div className="heading-text">
                        <h3 className="text--end">
                            <span>We Do</span> Financial Planning
                        </h3>
                    </div>
                    <div className="Service">
                        <div className="Service-mains">
                            {services.map((service, index) => (
                                <a href="#" key={index}>
                                    <div className={`box-serv ${service.marginTop ? 'margin-top-ext' : ''}`}>
                                        <div className="box-img">
                                            <img src={service.imgSrc} alt={`${service.title} ${service.subtitle}`} />
                                        </div>
                                        <h6>
                                            <span>{service.title}</span> {service.subtitle}
                                        </h6>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
