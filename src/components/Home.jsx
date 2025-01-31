import React from "react";
import './Home.css';
import Headline from "./Header/Header";
import Counsultant from "./Form/Form";
import clip from "./../atsses/image/clip.mkv";
import logo from "./../atsses/image/logo.png";
import Benfit from "./Benfits/Benfit";
import Proof2 from "./Proof2/Proof2"
import Proof1 from "./Proof1/Proof1";

import Rebenfit from "./Rebenfit/Rebenfit";

function Home() {
    return (
        <div>
            <div className="home-section1">
                <div className="logo-container">
                    <img className="logo" src={logo} />
                    <p>Haru design flower shop</p>
                </div>
                <Headline />

                <div className="section-two">
                    <div>
                        <Counsultant />
                    </div>
                    <div>
                        <video controls className="clip" >
                            <source src={clip} ></source>
                        </video>

                        <Benfit />
                    </div>

                </div>
            </div>

            <div className="home-section2">
                <Proof1/>
                <Proof2/>
                 <Rebenfit/>
            </div>
        </div>

    )
}

export default Home;