import React from "react";


function ContactCard({key_index,name, code, number, onClick}){
    return (
        <div className="contact__card"
            onClick={()=>{
                onClick(key_index);
            }}>
            <div className="contact__image"><img src="./user.png"></img></div>
            <div className="contact__info">
                <p className="contact__info--name"> { name } </p>
                <p className="contact__info--number"> { code } { number } </p>
            </div>

        </div>
    )
}

export { ContactCard }