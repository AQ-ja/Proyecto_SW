import React from 'react';
import logo_footer from '../img/logo-footer.png';
import './footer.css';

const Footer = () => {
    return(
        <div class="main-footer">
            <div class="container">
                <div class="row">
                    {/* Column1 */}
                    <div class="col">
                        <h4 class ="title1">COMMUNITY</h4>
                        <ul class="list-unstyled">
                            <li>MSI Reward Program</li>
                            <li>Forums</li>
                            <li>Social Media</li>
                            <li>Videos</li>
                            <li>Gaming Teams</li>
                            <li>Blogs</li>
                            <li>Customer Stories</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div class="col2">
                        <h4 class ="title2">SUPPORT</h4>
                        <ul class="list-unstyled">
                            <li>Downloads</li>
                            <li>Member Center</li>
                            <li>Online Customer Service</li>
                            <li>Warranty</li>
                        </ul>
                    </div>
                    {/* column3 */} 
                    <div class="col3">
                        <h4 class ="title3">NEWS</h4>
                        <ul class="list-unstyled">
                            <li>News</li>
                            <li>Awards</li>
                            <li>RSS</li>
                        </ul>
                    </div> 
                    {/* column4 */} 
                    <div class="col4">
                        <h4 class ="title4">MEDIA</h4>
                        <ul class="list-unstyled">
                            <li>Brochure</li>
                            <li>Wallpaper</li>
                            <li>MSI Apps</li>
                        </ul>
                    </div>  
                    {/* column5 */}
                    <div class="col5">
                        <h4 class ="title5">ABOUT MSI</h4>
                        <ul class="list-unstyled">
                            <li>MSI Vision</li>
                            <li>Brand Story</li>
                            <li>Investor Information</li>
                            <li>Innovation DNA</li>
                            <li>Certificate</li>
                            <li>CSR</li>
                            <li>Supreme Quality Standard</li>
                        </ul>
                    </div>                     
                </div>
                <hr />
                <div class="row2">
                    <p class="col-sm">
                         Copyright 2021 Micro-Star INT'L CO., LTD. ALL right reserved.                                                
                    </p>
                    <p class='col-rg'>
                         Cookie Policy  Privacy Policy  Terms of Use  Contact Us
                    </p>
                    <p>
                        <img class="flogo" src={logo_footer} width="38px" height="15px" />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;