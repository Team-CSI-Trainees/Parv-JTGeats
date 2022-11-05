import React, { useState } from "react";
import cart from './image/Group.svg';
import search from './image/akar-icons_search.svg';
import "./header.css"
import Facebook from './image/Facebook.svg';
import IG from './image/ig.svg';
import bag from './image/bag.svg';

const Header = ({isFooter = false }) => {
    const[cart1,setcart]=useState(false);
    return (
        <section className="part">
        <div className="header">
            <a href="#imp" className='head'>JTGeats</a>
            <div className='navbar'>
                <a href="#imp">Home</a>
                <a href=" ">About</a>
                <a href="#menu">Menu</a>
                <a href=" ">Blog</a>
                <a href="#form">Contact</a>
            </div>
            {isFooter ? <div className='icon'>
            <button className="social"><img src={Facebook} alt="" /></button>
            <button className="social"><img src={IG} alt=""/></button>
            </div> : <div className='icon'>
                <button><img src={search} alt="" /></button>
                <button onClick={()=>{setcart(true)}}><img src={cart} alt=""/></button>
            </div>}
            <div className={cart1 ? "cart-pop":"close"}>
                <div className="bag"><img src={bag} alt=" "/></div>
                <div className="cart-head">Cart is Empty</div>
                <p>Add some items to the cart to checkout</p>
                <button className="cart-btn" onClick={()=>{setcart(false)}}>Back To Menu</button>
            </div>
        </div>
        {isFooter?<hr/>:" "}
        </section>
    )
};
export default Header;