import React from "react";
import cuate from './image/cuate.svg';
import "./LandingSection.css"
const LandingSection=()=>{;
    return(
      <>
      <div className="LandingSection" id="LandingSection">
        <div className='flex1'>
          <div>
            <div className='head1'>Authentic Home food in India</div>
            <div className='head2'>JTGeats is a courier service in which authentic home cook food is delivered to a customer.</div>
            <input type="text" placeholder='Search Food you Love' />
            <span><button>Search</button></span>
          </div>
          <img className="cuate" alt="" src={cuate} />
        </div>
      </div>
    </>
)
}
export default LandingSection;