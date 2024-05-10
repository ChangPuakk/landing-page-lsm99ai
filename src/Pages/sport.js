import React, { useState } from "react";
import "../Style/main.css";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

import login from "../Images/btn-login.png";
import register from "../Images/btn-register.png";

import gamesCasino from "../Images/games-btn-casino.png";
import gamesSlot from "../Images/games-btn-slot.png";
import gamesSport from "../Images/games-btn-sport.png";
import gamesLotto from "../Images/games-btn-lotto.png";

import line from "../Images/line.png";

import labelPromotion from "../Images/label-promotion.png"
import labelPlay from "../Images/label-playgames.png"
import promo1 from "../Images/promotion/prosport1.png"
import promo2 from "../Images/promotion/prosport2.png"
import promo3 from "../Images/promotion/prosport3.png"
import promo4 from "../Images/promotion/prosport4.png"

//sport
import sport1 from "../Images/games/sport/3sign.png";
import sport2 from "../Images/games/sport/lsm99.png";
import sport3 from "../Images/games/sport/mpy.png";
import sport4 from "../Images/games/sport/pinn.png";
import sport5 from "../Images/games/sport/saba.png";
import sport6 from "../Images/games/sport/sbo.png";
import sport7 from "../Images/games/sport/slsm.png";


export default function Sport() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
  return (
    <>
      <div>
        <div className="home">
          <Header />
          <div className="main">
            <div className="pc">
              <div class="marquee">
                <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
                {/* <div class="marquee-text"><p>ยินดีต้อนรับสู่ LSM99AI เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></div> */}
              </div>
            </div>
            <div className="container">
              <div className="left">
                <div className="mobile">
                  <div class="marquee">
                    <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
                    {/* <div class="marquee-text"><p>ยินดีต้อนรับสู่ LSM99AI เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></div> */}
                  </div>
                </div>

                <div className="mobile">
                  <div className="login-register">
                    <a href="https://game.lsm99ai.bet/login"><img src={login} alt="login" /></a>
                    <a href="https://game.lsm99ai.bet/register"><img src={register} alt="register" /></a>
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
                  <img src={sport1} alt="promotion" />
                  <img src={sport2} alt="promotion" />
                  <img src={sport3} alt="promotion" />
                  <img src={sport4} alt="promotion" />
                  <img src={sport5} alt="promotion" />
                  <img src={sport6} alt="promotion" />
                  <img src={sport7} alt="promotion" />
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
