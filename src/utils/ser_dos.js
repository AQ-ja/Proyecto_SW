import React from "react";
import mid_down1 from '../img/mid_down1.jpg';
import mid_down2 from '../img/mid_down2.jpg';
import icon_pr from '../img/icon_pr.png';
import icon_s from '../img/icon_s.png';
import './ser_dos.css';


const Ser2 = () => {
    return (
        <div class="contenedork">
        <div class='mid_right'> 
        <img class="tec" src={mid_down1}  width="100%" height="370px" alt="MSI Product Registration" />
        <img class="icon1" src={icon_pr} width="90px" height="90px" />
        <div class="txt1">Product Registration</div>
        <div class="txt2">To enjoy a host of benefits, promotions and events</div>
        </div>
        <div class="mid_left">
         <img class="sup" src={mid_down2} width="100%" height="100%" alt="Product Registration" />
         <img class="icon2" src={icon_s} width="90px" height="90px" />
        <div class="txt1_2">Service</div>
        <div class="txt2_2">Customized services especially for you</div>
        </div>
</div>
    );
}

export default Ser2;


//import icon_pr from '../img/icon_pr.png';
//<div class="ic1">
//<img class="sr" src={icon_pr} width="60px" height="330px" />
//</div>
//