import React from "react";
import msif from '../img/msif.jpg';
import msiI from '../img/msiI.jpg';
import msiRP from '../img/msiRP.jpg';
import vid from '../img/vid.jpg';
import './final_g.css';

const Fs = () => {
    return (
        <div class="seccion">
        <div class='msif'> 
         <img class="era" src={msif}  width="100%" height="100%" alt="MSI Product Registration" />
         <div class="ax">MSI Forums</div>
        </div>
        <div class="msiRP">
         <img class="gunda" src={msiRP} width="100%" height="100%" alt="Product Registration" />
         <div class="b">MSI Reward Program</div>
        </div>
        <div class="vid">
         <img class="cera" src={vid} width="100%" height="100%" alt="Product Registration" />
         <div class="c">Videos</div>
        </div>
        <div class="msiI">
         <img class="arta" src={msiI} width="100%" height="100%" alt="Product Registration" />
         <div class="d">MSI Insider</div>
        </div>
    </div>
    );
}

export default Fs;