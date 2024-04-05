import React, { useState } from "react";
import "../Style/main.css";

// import logo from "../Images/logo.png";
import headerCoin from "../Images/icon-coid.png";
import headerNofi from "../Images/icon-nofi.png";
import headerBurger from "../Images/icon-burger.png";
import headerLine from "../Images/icon-line.png";

import login from "../Images/btn-login-pc.png";
import register from "../Images/btn-register-pc.png";

export default function Header() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
  const [linkRegister, setLinkRegister] = useState("https://game.lsm99ai.asia/register");
  const [linkHome, setLinkHome] = useState("/");
  return (
    <>
      <div class="header-wrapper">
        <div className="header">
          <div class="left">
            {/* <div className="container-left">
              <div className="username">Alanwalker.jr</div>
              <div className="credit">
                <img src={headerCoin} className="coid" alt="lsm99ai coid" />
                <span className="font-bold font-italic">0</span>
              </div>
            </div> */}
            <div className="pc">
              <div className="login-register">
                <a href={linkLogin}><img src={login} alt="login" /></a>
                {/* <a href={linkRegister}><img src={register} alt="register" /></a> */}
              </div>
            </div>
          </div>
          <a href="/">
            <div class="center">
              <div className="pc">
              </div>
            </div>
          </a>
          <div class="right">
            <div className="container-right">
              <div className="line-pc"><a href="https://lin.ee/izXwWe4" target="_blank"><img src={headerLine} alt="line" className="pc" /></a></div>
              <div className="notification"><a href={linkLogin}><img src={headerNofi} alt="notification" /></a></div>
              <div className="burger"><a href={linkLogin}><img src={headerBurger} alt="hamburger bar" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}