import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Nusaiba Mahmood</h1>
            <h3>Full Stack Developer</h3>
            <div className="navbar-socials">
                <span>
                    <a target="_blank" href="https://www.linkedin.com/in/iffatnusaibamahmood/">
                        <FaLinkedin className="navbar-socials-icon" />
                    </a>
                </span>
                <span>
                    <a target="_blank" href="https://github.com/smeraldoflower">
                        <FaGithub className="navbar-socials-icon" />
                    </a>
                </span>
                <span>
                    <a target="_blank" href="https://twitter.com/NusaibaMahmood">
                        <FaTwitter className="navbar-socials-icon" />
                    </a>
                </span>
            </div>

        </div>
    );
}

export default NavBar;
