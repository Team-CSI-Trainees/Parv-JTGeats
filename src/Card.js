import React, { useState } from "react";
import "./Card.css";
import star from "./image/star.png";
import addbtn from "./image/addtocart.png";
import add from "./image/addbtn.png";
import subbtn from "./image/subtocart.png";

const Card = ({val={}}) => {
    const {img,name,price,rating,time} = val
    const [q, setq] = useState(1);
    const [openquantity, setopenquantity] = useState(false);
    const increase = () => {
        setq(q+1);
    }
    const decrease = () => {
        if (q === 1)
            setopenquantity(false);
        setq(q - 1);
    }
    return (
        <div className="ncards">
            <img className="food" src={img} alt=""/>
            <div className="details">
            <span className="name">{name}</span> 
            <span className="price">{price}</span>
            <div className="details2">
            <div className="card-ratings">
                <img src={star} alt="" />
                <span>{rating}</span>
            </div>
            <div className="time">{time}</div>
            <img className={openquantity ? "hide-btn" : ""} id="card-add" src={add} onClick={() => setopenquantity(true) && setq===1} alt="" />
            <div className={openquantity ? "quantity" : "hide-btn"}>
                <img src={subbtn} onClick={decrease} alt="" />
                <p className="quantity-no">{q}</p>
                <img src={addbtn} onClick={increase} alt="" />
            </div>
            </div>
            </div>
        </div>
    )
}
export default Card;