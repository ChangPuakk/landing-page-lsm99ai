import React, { useState } from "react";
import "../Style/main.css";

// img
import logo from "../Images/new-ai/logo.png";

export default function Header() {
    const [linkLogin] = useState("https://game.lsm99ai.asia/login");
    const [linkRegister] = useState("https://game.lsm99ai.asia/register");
    return (
        <>
            <div className="header-wrapper">
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
                <div className="head-group-mb">
                    <a href={linkLogin}>
                        <div className="head-login-mb"><span>เข้าสู่ระบบ</span></div>
                    </a>
                    <a href={linkRegister}>
                        <div className="head-register-mb">สมัครสมาชิก</div>
                    </a>
                </div>
            </div>
        </>
    );
}