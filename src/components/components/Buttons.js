import React from 'react';

export default function Buttons(props) {
    const { href, children } = props;

    return (
        <div>
            <div className="buttons">
                <a href={href} className="non_border">
                    {children}
                </a>
            </div>
        </div>
    );
}
