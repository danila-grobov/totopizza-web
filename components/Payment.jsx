import React, { Component } from 'react';
export default () => {
    return (
        <div className="payment">
            <span className="payment__info">
                Užsakant už 8,80€ ir daugiau Šilutės mieste pristatymas NEMOKAMAS!
            </span>
            <span className="payment__info">
                Užsakant iki 8,80€ taikoma 1€ pristatymo mokęstis
                (pageidaujant pristatysime ir mažą picą).
            </span>
            <span className="payment__info">
                Už miesto ribų pristatymas sutartinis, teirautis telefonu.
            </span>
        </div>
    )
}