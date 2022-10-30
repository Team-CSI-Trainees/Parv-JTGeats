import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Vedio from "./image/Vedio.mp4";
import "./service.css";
const Service = () => {
    return (
        <section className="ser">
            <div className="main">
                <div className="serhead1">We are providing best
                    home cooked food delivery service.</div>
                <div className="serhead2">Away from home and craving the tasty homemade recipes?
                    Choose from a selection of our delicious home cooked dishes </div>

                <div class="video">
                    <ReactPlayer className="myvedio" width="600px" controls url={Vedio} />
                </div>
            </div>
            <div className="cover">

            </div>
        </section>
    )
};
export default Service;