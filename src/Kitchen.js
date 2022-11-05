import React from "react";
import sdata from "./sdata.js";
import Card from "./Card.js";
import "./Kitchen.css";
const Kitchen = ()=> {
    
    return (
        <section className="menu" id="menu">
            <h1>Home Kitchen</h1>
            <div className="cards" >
                {sdata.map((val)=> {
                    return (
                        <Card
                            key={val.id}
                            val={val}
                        />
                    )
                })}
            </div>
        </section>
    )
};
export default Kitchen;