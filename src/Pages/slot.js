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


const promo1 = "https://fs.cdnxn.com/landingAi/Images/promotion/proslot1.png"
const promo2 = "https://fs.cdnxn.com/landingAi/Images/promotion/proslot2.png"
const promo3 = "https://fs.cdnxn.com/landingAi/Images/promotion/proslot3.png"
const promo4 = "https://fs.cdnxn.com/landingAi/Images/promotion/proslot4.png"
const promo5 = "https://fs.cdnxn.com/landingAi/Images/promotion/proslot5.png"

//slot
// const slot1 = "https://fs.cdnxn.com/landingAi/Images/games/slot/ae.png";
// const slot2 = "https://fs.cdnxn.com/landingAi/Images/games/slot/allbet.png";
const slot3 = "https://fs.cdnxn.com/landingAi/Images/games/slot/ap.png";
// const slot4 = "https://fs.cdnxn.com/landingAi/Images/games/slot/bacarat.png";
const slot5 = "https://fs.cdnxn.com/landingAi/Images/games/slot/cg.png";
// const slot6 = "https://fs.cdnxn.com/landingAi/Images/games/slot/dg.png";
const slot7 = "https://fs.cdnxn.com/landingAi/Images/games/slot/ebet.png";
const slot8 = "https://fs.cdnxn.com/landingAi/Images/games/slot/evo.png";
const slot9 = "https://fs.cdnxn.com/landingAi/Images/games/slot/gw.png";
const slot10 = "https://fs.cdnxn.com/landingAi/Images/games/slot/hotgraph.png";
const slot11 = "https://fs.cdnxn.com/landingAi/Images/games/slot/jili.png";
const slot12 = "https://fs.cdnxn.com/landingAi/Images/games/slot/joker.png";
const slot13 = "https://fs.cdnxn.com/landingAi/Images/games/slot/ka.png";
const slot14 = "https://fs.cdnxn.com/landingAi/Images/games/slot/kingmaker.png";
const slot15 = "https://fs.cdnxn.com/landingAi/Images/games/slot/mg.png";
const slot16 = "https://fs.cdnxn.com/landingAi/Images/games/slot/mp.png";
const slot17 = "https://fs.cdnxn.com/landingAi/Images/games/slot/naga.png";
const slot18 = "https://fs.cdnxn.com/landingAi/Images/games/slot/next.png";
const slot19 = "https://fs.cdnxn.com/landingAi/Images/games/slot/pg.png";
const slot20 = "https://fs.cdnxn.com/landingAi/Images/games/slot/playstar.png";
// const slot21 = "https://fs.cdnxn.com/landingAi/Images/games/slot/pp.png";
// const slot22 = "https://fs.cdnxn.com/landingAi/Images/games/slot/pretty.png";
const slot23 = "https://fs.cdnxn.com/landingAi/Images/games/slot/righ88.png";
const slot24 = "https://fs.cdnxn.com/landingAi/Images/games/slot/sg.png";
// const slot25 = "https://fs.cdnxn.com/landingAi/Images/games/slot/skywind.png";
const slot26 = "https://fs.cdnxn.com/landingAi/Images/games/slot/sp.png";
// const slot27 = "https://fs.cdnxn.com/landingAi/Images/games/slot/xg.png";


export default function Slot() {
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

                  {/* <img src={slot1} alt="promotion" /> */}
                  {/* <img src={slot2} alt="promotion" /> */}
                  <img src={slot3} alt="promotion" />
                  {/* <img src={slot4} alt="promotion" /> */}
                  <img src={slot5} alt="promotion" />
                  {/* <img src={slot6} alt="promotion" /> */}
                  <img src={slot7} alt="promotion" />
                  <img src={slot8} alt="promotion" />
                  <img src={slot9} alt="promotion" />
                  <img src={slot10} alt="promotion" />
                  <img src={slot11} alt="promotion" />
                  <img src={slot12} alt="promotion" />
                  <img src={slot13} alt="promotion" />
                  <img src={slot14} alt="promotion" />
                  <img src={slot15} alt="promotion" />
                  <img src={slot16} alt="promotion" />
                  <img src={slot17} alt="promotion" />
                  <img src={slot18} alt="promotion" />
                  <img src={slot19} alt="promotion" />
                  <img src={slot20} alt="promotion" />
                  {/* <img src={slot21} alt="promotion" /> */}
                  {/* <img src={slot22} alt="promotion" /> */}
                  <img src={slot23} alt="promotion" />
                  <img src={slot24} alt="promotion" />
                  {/* <img src={slot25} alt="promotion" /> */}
                  <img src={slot26} alt="promotion" />
                  {/* <img src={slot27} alt="promotion" /> */}

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
                  <img src={promo5} style={{ marginBottom: "10px" }} alt="promo5" />
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
