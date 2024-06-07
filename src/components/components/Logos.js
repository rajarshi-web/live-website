import React from 'react';

const logos = [
  { imgSrc: 'assets/img/Codecov.png' },
  { imgSrc: 'assets/img/Magic Leap.png' },
  { imgSrc: 'assets/img/Magic Leap.png' },
  { imgSrc: 'assets/img/UserTesting.png' },
  { imgSrc: 'assets/img/Magic Leap.png' },
  { imgSrc: 'assets/img/UserTesting.png' },
  { imgSrc: 'assets/img/Group.png' }
];

export default function Logos() {
  return (
    <div>
      <section className="logos pt-5 pb-5">
        <div className="container">
          <div className="owl-carousel owl-theme" id="logos">
            {logos.map((logo, index) => (
              <div className="item" key={index}>
                <div className="box-logo">
                  <img src={logo.imgSrc} alt={`Logo ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
