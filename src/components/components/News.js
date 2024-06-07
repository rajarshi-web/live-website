import React from 'react';
import Buttons from './Buttons';

const newsItems = [
  {
    imgSrc: 'assets/img/Rectangle 30.png',
    title: 'Financial Samurai',
    date: '21/05/2023',
    commentsCount: 123,
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    link: '#'
  },
  {
    imgSrc: 'assets/img/Rectangle 32.png',
    title: 'Financial Samurai',
    date: '21/05/2023',
    commentsCount: 123,
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    link: '#'
  },
  {
    imgSrc: 'assets/img/Rectangle 31.png',
    title: 'Financial Samurai',
    date: '21/05/2023',
    commentsCount: 123,
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    link: '#'
  },
  {
    imgSrc: 'assets/img/Rectangle 32.png',
    title: 'Financial Samurai',
    date: '21/05/2023',
    commentsCount: 123,
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    link: '#'
  }
];

export default function News() {
  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="heading-text">
            <h3 className="text--start">
              <span>News &amp; </span>Updates
            </h3>
          </div>
          <div className="owl-carousel owl-theme" id="news">
            {newsItems.map((news, index) => (
              <div className="item" key={index}>
                <div className="box-news">
                  <div className="box-img-news">
                    <img src={news.imgSrc} className="img-fluid" alt={`News ${index + 1}`} />
                  </div>
                  <div className="box-info">
                    <div className="item-box">
                      <h4>
                        <span>Financial</span> {news.title}
                      </h4>
                    </div>
                    <div className="item-drops d-flex justify-content-between">
                      <div>
                        <p>
                          <span>
                            <img src="assets/img/system-uicons_calendar-month.png" alt="Calendar icon" />
                          </span>
                          {news.date}
                        </p>
                      </div>
                      <div className="d-anc">
                        <a href={news.link}>
                          <span>
                            <img src="assets/img/icon_private tours.png" alt="Comments icon" />
                          </span>
                          {news.commentsCount}
                        </a>
                      </div>
                    </div>
                    <div className="comments">
                      <p>
                        {news.description}
                      </p>
                    </div>
                    <div className="d-flex news-a">
                      <a href={news.link}>
                        See More{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className='d-flex justify-content-center'>
            <Buttons href="#see">See More</Buttons>
          </div>
          <div className="bg-img-animated">
            <img src="assets/img/Dot.png" alt="Background dot" />
          </div>
        </div>
      </section>
    </div>
  );
}
