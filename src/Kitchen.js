import React,{useState} from "react";
import sdata from "./sdata.js";
import Card from "./Card.js";
import "./Kitchen.css";
const Kitchen = ()=> {
    // const [sdata,setsdata] = useState();
    
    return (
        <section className="menu" id="menu">
            <h1>Home Kitchen</h1>
            <div className="cards">
                {sdata.map((val)=> {
                    return (
                        <Card
                            img={val.img}
                            name={val.name}
                            price={val.price}
                            rating={val.rating}
                            time={val.time}
                            item={val.item}
                        />
                    )
                })}
            </div>
        </section>
    )
};
export default Kitchen;