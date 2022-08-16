import React from "react";


function ContactCard({name, code, number}){
    return (
        <div className="contact__card">
            <div className="contact__image"><img src="./user.png"></img></div>
            <div className="contact__info">
                <p className="contact__info--name"> { name } </p>
                <p className="contact__info--number"> { code } { number } </p>
            </div>

        </div>
    )
}

export { ContactCard }