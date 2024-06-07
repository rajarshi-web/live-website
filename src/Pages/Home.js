import React from "react";
import Nav from "../components/components/Nav.js";
import Hero from "../components/Hero";
import Services from "../components/components/Services";
import Abouthome from "../components/components/About-home";
import Faq from "../components/components/Faq";
import WhyChoose from "../components/components/WhyChoose";
import Testimonial from "../components/components/Testimonial";
import News from "../components/components/News";
import Logos from "../components/components/Logos";
import ContactHome from "../components/components/ContactHome";
import Footer from "../components/components/Footer";

export default function Home() {
    return (
        <div>
            <>
                <Nav />
                {/* header */}
                {/* hero */}
                <Hero />
                {/* hero */}
                {/* planning */}
                <Services />
                {/* planning */}
                {/* about */}
                <Abouthome />
                {/* about */}
                {/* faq */}
                <Faq />
                {/* faq */}
                {/* why-choose */}
                <WhyChoose />
                {/* why-choose */}
                <Testimonial />
                {/* why-choose */}
                {/* news */}
                <News />
                {/* news */}
                {/* logos */}
                <Logos />
                {/* logos */}
                <ContactHome />
                <Footer />
            </>
        </div>
    )
}
