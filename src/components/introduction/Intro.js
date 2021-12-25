import React from "react";
import "./intro.css";
import mukul from "../../images/mukul.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__left">
                <div className="intro__left_wrapper">
                    <h4 className="i_intro">Hello, My name is </h4>
                    <h2 className="i_name">Mukul Singh</h2>
                    <div className="i_title">
                        <div className="i_title_wrapper">
                            <div className="i_title_item">Web Developer</div>
                            <div className="i_title_item">UI/UX Designer</div>
                            <div className="i_title_item">Explorer</div>
                            <div className="i_title_item">Wanderlust</div>
                        </div>
                    </div>
                    <div className="i_desc">
                        Data Scientist Enthusiast, Aiming to leverage proven
                        critical thinking, problem-solving and management skills
                        to meet the WEB APPLICATION Developer role, frequently
                        praised as hardworking my peers.
                    </div>
                </div>
            </div>
            <div className="intro__right">
                <img src={mukul} alt="" className="i_image" />
            </div>
        </div>
    );
};

export default Intro;
