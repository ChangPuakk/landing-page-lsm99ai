import React, { useState } from "react";
import "../Style/main.css";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

import login from "../Images/btn-login.png";
import register from "../Images/btn-register.png";

import gamesCasino from "../Images/games-btn-casino.png";
import gamesSlot from "../Images/games-btn-slot.png";
import gamesSport from "../Images/games-btn-sport.png";
import gamesLotto from "../Images/games-btn-lotto.png";

import line from "../Images/line.png";

import labelPromotion from "../Images/label-promotion.png"
import labelPlay from "../Images/label-playgames.png"
import promo1 from "../Images/promotion/procasino1.png"
import promo2 from "../Images/promotion/procasino2.png"
import promo3 from "../Images/promotion/procasino3.png"
import promo4 from "../Images/promotion/procasino4.png"

// casino
import casino1 from "../Images/games/casino/allbet.png";
import casino2 from "../Images/games/casino/bacarat.png";
import casino3 from "../Images/games/casino/wm.png";
import casino4 from "../Images/games/casino/sa.png";
import casino5 from "../Images/games/casino/dg.png";
import casino6 from "../Images/games/casino/pretty.png";
import casino7 from "../Images/games/casino/playtech.png";
import casino8 from "../Images/games/casino/xg.png";
import casino9 from "../Images/games/casino/pp.png";
import casino10 from "../Images/games/casino/skywind.png";


export default function Casino() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.com/login");
  return (
    <>
      <div>
        <div className="home">
          <Header />
          <div className="main">
            <div className="pc">
              <div class="marquee">
                <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
              </div>
            </div>
            <div className="container">
              <div className="left">
                <div className="mobile">
                  <div class="marquee">
                    <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
                  </div>
                </div>

                <div className="mobile">
                  <div className="login-register">
                    <a href={linkLogin}><img src={login} alt="login" /></a>
                    <a href={linkLogin}><img src={register} alt="register" /></a>
                  </div>
                </div>

                <div className="pc">
                  <img src={labelPlay} alt="play" className="labels labelsPlay" />
                </div>

                <div className="games-menu">
                  <a href="/casino"><div className="-gamesCasino"></div></a>
                  <a href="/slot"><div className="-gamesSlot"></div></a>
                  <a href="/sport"><div className="-gamesSport"></div></a>
                  <a href="/lotto"><div className="-gamesLotto"></div></a>
                </div>

                <div className="games-all">
                  <img src={casino1} alt="casino1" />
                  <img src={casino2} alt="casino2" />
                  <img src={casino3} alt="casino3" />
                  <img src={casino4} alt="casino4" />
                  <img src={casino5} alt="casino5" />
                  <img src={casino6} alt="casino6" />
                  <img src={casino7} alt="casino7" />
                  <img src={casino8} alt="casino8" />
                  <img src={casino9} alt="casino9" />
                  <img src={casino10} alt="casino10" />
                </div>

                <div className="mobile"><div className="line"><a href="/"><img src={line} alt="line" /></a></div></div>
              </div>
              <div className="right pc">
                <a href="/promotion"><img src={labelPromotion} alt="โปรโมชั่น" className="labels labelsPromotion" /></a>
                <div className="promotionlist">
                  <img src={promo1} style={{ marginBottom: "10px" }} alt="promo1" />
                  <img src={promo2} style={{ marginBottom: "10px" }} alt="promo2" />
                  <img src={promo3} style={{ marginBottom: "10px" }} alt="promo3" />
                  <img src={promo4} style={{ marginBottom: "10px" }} alt="promo4" />
                </div>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
