import React, { useState } from 'react';

export default function ContactHome() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission delay
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            // Reset form data to clear the form fields
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div>
            <section className="contact-us">
                <div className="container">
                    <div className="contact-box">
                        <div className="heading-text">
                            <h3 className="text-center">
                                <span>Contact </span>Us
                            </h3>
                        </div>
                        <div className="group-container">
                            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 g-5">
                                <div className="col">
                                    <div className="contact-heading">
                                        <h2>
                                            <span>Leave us</span> a message
                                        </h2>
                                    </div>
                                    <div className="form-contact">
                                        <form className="form__container" onSubmit={handleSubmit}>
                                            <div className="form__group">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Name"
                                                />
                                                <label className="form__label" htmlFor="name">
                                                    Name
                                                </label>
                                            </div>
                                            <div className="form__group">
                                                <input
                                                    type="email"
                                                    className="form__input"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                />
                                                <label className="form__label" htmlFor="email">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form__group">
                                                <textarea
                                                    className="form__input"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Your message"
                                                />
                                                <label className="form__label" htmlFor="message">
                                                    Message
                                                </label>
                                            </div>
                                            <div className="form__group btns">
                                                <button type="submit" className="form__submit non_border" disabled={isLoading}>
                                                    {isLoading ? 'Submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                            {isLoading && (
                                                <div className="loader">
                                                    <img src="assets/img/loader.gif" alt="Loading" className="loader-img" />
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image-contact d-flex justify-content-center">
                                        <img src="assets/img/contact-img.png" className="img-fluid" alt="Contact" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
