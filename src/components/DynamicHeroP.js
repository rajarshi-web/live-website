import React from 'react'
import Hero from './Hero'


export default function DynamicHeroP() {

    const dynamicDescription = "We are business consultants with a wide array of skills who assist business owners with their endeavors. Consultants are knowledgeable because of their education and previous experience.";

    return (
        <div>
            <div className="App">
                <Hero description={dynamicDescription} />
            </div>
        </div>
    )
}
