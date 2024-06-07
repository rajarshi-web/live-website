import React from 'react';

const faqs = [
  {
    question: 'What are the three types of finance?',
    answer: 'Finance can be divided broadly into three distinct categories: public finance, corporate finance, and personal finance. More recent subcategories of finance include social finance and behavioral finance.',
    id: 'collapseOne',
    show: true
  },
  {
    question: 'How does personal finance work?',
    answer: 'Personal finance involves managing individual or family financial activities such as budgeting, saving, investing, and planning for retirement.',
    id: 'collapseTwo',
    show: false
  },
  {
    question: 'What is corporate finance?',
    answer: 'Corporate finance deals with the capital structure of a corporation, including its funding and the actions management takes to increase the value of the company to the shareholders.',
    id: 'collapseThree',
    show: false
  },
  {
    question: 'What does public finance entail?',
    answer: 'Public finance is the study of the role of the government in the economy, focusing on government revenue and expenditure.',
    id: 'collapseFour',
    show: false
  },
  {
    question: 'What is social finance?',
    answer: 'Social finance is an approach to managing investments that generate social and environmental impact alongside a financial return.',
    id: 'collapseFive',
    show: false
  },
  {
    question: 'What is behavioral finance?',
    answer: 'Behavioral finance studies the effects of psychological, social, cognitive, and emotional factors on the economic decisions of individuals and institutions.',
    id: 'collapseSix',
    show: false
  },
];

export default function Faq() {
  return (
    <div>
      <section className="faq">
        <div className="container">
          <div className="heading-text">
            <h3 className="text--end">
              <span>Frequently Asked</span>
              <br /> Questions
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="faq-img">
                <img src="assets/img/faq.png" className="img-fluid" alt="FAQ" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 col-12">
              <div className="faq-question">
                <div className="accordion" id="accordionExample">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${!faq.show ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${faq.id}`}
                          aria-expanded={faq.show ? 'true' : 'false'}
                          aria-controls={faq.id}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={faq.id}
                        className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
