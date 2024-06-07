import React from 'react';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5.png",
    name: "John Doe",
    title: "UI Designer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5 (1).png",
    name: "Juhn Doe",
    title: "UI Designer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5 (2).png",
    name: "Jane Doe",
    title: "UI Designer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5 (1).png",
    name: "John Doe",
    title: "UI Designer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5 (2).png",
    name: "Jane Doe",
    title: "UI Designer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5 (1).png",
    name: "John Doe",
    title: "UI Designer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum aenean nunc eget posuere elit in curabitur nibh. Scelerisque pellentesque felis quis elementum accumsan eget.Lorem ipsum",
    imgSrc: "assets/img/Ellipse 5.png",
    name: "John Doe",
    title: "UI Designer"
  }
];

export default function Testimonial() {
  return (
    <div>
      <section className="testimonial">
        <div className="container">
          <div className="heading-text">
            <h3 className="text-center">
              <span>What Our</span> Clients Say
            </h3>
          </div>
          <div className="carousel-slider">
            <div className="owl-carousel owl-theme" id="testi">
              {testimonials.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="test-box">
                    <div className="fontawesome-test text-center">
                      <i className="fa-solid fa-quote-right" />
                    </div>
                    <div className="paragraph">
                      <p className="text-center">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="test-img">
                      <img src={testimonial.imgSrc} className="img-fluid" alt={`${testimonial.name}`} />
                    </div>
                    <div className="test-name">
                      <h5 className="text-center">{testimonial.name}</h5>
                      <h6 className="text-center">{testimonial.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
