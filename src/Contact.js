import React from "react";
import Rider from "./image/rider.svg";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_56unkxw', 'template_ewofegn', e.target, 'XXFfYMV5HPCIRkeVu').then(res => { console.log(res) })

    }
    return (
        <form className="form" id="form" onSubmit={sendEmail}>
            <div className="contact">
                <div className="conmain">
                    <div>
                        <div className="ch1">Do you have a question
                            or want to become a seller?
                        </div>
                        <div className="ch2">Fill this form and our manager will contact you next 48 hours.</div>
                        <div className="flex2">
                            <input className="cname" type="text" name="name" placeholder=" Your Name" required />
                            <input className="cemail" type="email" name="email" placeholder=" Your E-mail" required />
                        </div>
                        <div className="msg">
                            <textarea placeholder=" Your Message" name="msg" rows="8" cols="87" required />
                        </div>
                        <button className="consub" type="submit" onClick={()=>alert("Message sent Successfully")}>Submit</button>

                    </div>
                    <div className="rider">
                        <img src={Rider} alt="" />
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Contact;