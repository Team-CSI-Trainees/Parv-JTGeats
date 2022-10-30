import React from "react";
import cart from './image/Group.svg';
import search from './image/akar-icons_search.svg';
import "./header.css"
import Facebook from './image/Facebook.svg';
import IG from './image/ig.svg';

const Header = ({ isFooter = false }) => {
    return (
        <section className="part">
        <div className="header">
            <div className='head'>JTGeats</div>
            <div className='navbar'>
                <a>Home</a>
                <a>About</a>
                <a>Menu</a>
                <a>Blog</a>
                <a>Contact</a>
            </div>
            {isFooter ? <div className='icon'>
                <img src={Facebook} />
                <img src={IG} />
            </div> : <div className='icon'>
                <img src={search} />
                <img src={cart} />
            </div>}
        </div>
        {isFooter?<hr/>:" "}
        </section>
    )
};
export default Header;