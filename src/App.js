import React from 'react';
import "./components/App.css";
import Navbar from "./components/Navbar.js";
import Caro from "./components/carousel.js";
import FiguresPage from "./components/card1.js"
import Mid from "./utils/img_mid.js"
import Ser2 from "./utils/ser_dos.js";
import Fs from "./utils/final_g"
import Footer from "./utils/footer.js";


export function App() {
    return (
        <div>
            <Navbar/>
            <Caro/>
            <FiguresPage/>
            <Mid/>
            <Ser2/>
            <Fs />
            <Footer />
        </div>
    );
}
