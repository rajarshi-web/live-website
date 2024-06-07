import React from 'react';


const p = [
  { para: 'We are business consultants with a wide array of skills who assist business owners with their endeavors. Consultants are knowledgeable because of their education and previous experience.' },
];

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="hero-text">
                <h6>Get a Solution</h6>
                <h1>
                  <span>Get Smart</span> Solution
                  <br /> For Your Business
                </h1>
                <p>{p[0].para}</p>
                <div className="buttons">
                  <a href="#" className="non_border">
                    Contact Us
                  </a>
                  <a href="#" className="border">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="hero-img">
                <img src="assets/img/hero-img.png" className="img-fluid" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
