import React, { useState } from "react";
import "../Style/main.css";

// img
import logo from "../Images/new-ai/logo.png";

export default function Header() {
    const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
    const [linkRegister, setLinkRegister] = useState("https://game.lsm99ai.asia/register");
    const [linkHome, setLinkHome] = useState("/");
    return (
        <>
            <div class="header-wrapper">
                <div className="head-group">
                    <a href={linkLogin}>
                        <div className="head-login">
                            <span>เข้าสู่ระบบ</span>
                        </div>
                    </a>

                    <div className="head-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <a href={linkRegister}>
                        <div className="head-register">สมัครสมาชิก</div>
                    </a>

                </div>
                <div className="head-grou-mb">
                    <a href={linkLogin}>
                        <div className="head-login-mb">เข้าสู่ระบบ</div>
                    </a>
                    <a href={linkRegister}>
                        <div className="head-register-mb">สมัครสมาชิก</div>
                    </a>
                </div>
            </div>
        </>
    );
}