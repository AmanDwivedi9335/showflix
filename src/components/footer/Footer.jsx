import React from "react";
import {
    FaChrome,
    FaGithub,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to Showflix, your ultimate destination for movies, TV shows, anime, and beyond. Dive into our extensive library, explore ratings, cast information, and plot summaries, and stay in the loop with the latest trending content. Experience seamless entertainment and find your next favorite watch with ease. <br /><br />
                <span className="credit">
                ❤️ by Aman Dwivedi
                </span>
                </div>
                <div className="socialIcons">
                    <a href="https://showflix-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaChrome />
                    </a>
                    <a href="https://www.linkedin.com/in/i-am-aman-dwivedi/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/AmanDwivedi9335" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaGithub />
                    </a>
                    <a href="https://showflix-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaYoutube />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;