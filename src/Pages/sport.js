import React, { useState } from "react";
import "../Style/main.css";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

const login = "https://fs.cdnxn.com/landingAi/Images/btn-login.png";
const register = "https://fs.cdnxn.com/landingAi/Images/btn-register.png";

const gamesCasino = "https://fs.cdnxn.com/landingAi/Images/games-btn-casino.png";
const gamesSlot = "https://fs.cdnxn.com/landingAi/Images/games-btn-slot.png";
const gamesSport = "https://fs.cdnxn.com/landingAi/Images/games-btn-sport.png";
const gamesLotto = "https://fs.cdnxn.com/landingAi/Images/games-btn-lotto.png";

const line = "https://fs.cdnxn.com/landingAi/Images/line.png";

const labelPromotion = "https://fs.cdnxn.com/landingAi/Images/label-promotion.png"
const labelPlay = "https://fs.cdnxn.com/landingAi/Images/label-playgames.png"
const promo1 = "https://fs.cdnxn.com/landingAi/Images/promotion/prosport1.png"
const promo2 = "https://fs.cdnxn.com/landingAi/Images/promotion/prosport2.png"
const promo3 = "https://fs.cdnxn.com/landingAi/Images/promotion/prosport3.png"
const promo4 = "https://fs.cdnxn.com/landingAi/Images/promotion/prosport4.png"

//sport
const sport1 = "https://fs.cdnxn.com/landingAi/Images/games/sport/3sign.png";
const sport2 = "https://fs.cdnxn.com/landingAi/Images/games/sport/lsm99.png";
const sport3 = "https://fs.cdnxn.com/landingAi/Images/games/sport/mpy.png";
const sport4 = "https://fs.cdnxn.com/landingAi/Images/games/sport/pinn.png";
const sport5 = "https://fs.cdnxn.com/landingAi/Images/games/sport/saba.png";
const sport6 = "https://fs.cdnxn.com/landingAi/Images/games/sport/sbo.png";
const sport7 = "https://fs.cdnxn.com/landingAi/Images/games/sport/slsm.png";


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
