import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="about">
            <div className="about__left">
                <div className="about_left_card bg"></div>
                <div className="about_left_card">
                    <img
                        src="https://scontent.fbek1-2.fna.fbcdn.net/v/t1.6435-9/204986559_3060013427612042_5835764892003315112_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=XxpkrPBJhAAAX9kUNMn&_nc_ht=scontent.fbek1-2.fna&oh=00_AT_ZbDkI6T5dItUNpsgf1-n_l5k0j2-GWtQZtrTah2ShdQ&oe=61F001E9"
                        alt=""
                        className="about_img"
                    ></img>
                </div>
            </div>
            <div className="about__right">right</div>
        </div>
    );
};

export default About;
