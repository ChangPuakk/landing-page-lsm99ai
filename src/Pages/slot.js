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


import promo1 from "../Images/promotion/proslot1.png"
import promo2 from "../Images/promotion/proslot2.png"
import promo3 from "../Images/promotion/proslot3.png"
import promo4 from "../Images/promotion/proslot4.png"
import promo5 from "../Images/promotion/proslot5.png"

//slot
// import slot1 from "../Images/games/slot/ae.png";
// import slot2 from "../Images/games/slot/allbet.png";
import slot3 from "../Images/games/slot/ap.png";
// import slot4 from "../Images/games/slot/bacarat.png";
import slot5 from "../Images/games/slot/cg.png";
// import slot6 from "../Images/games/slot/dg.png";
import slot7 from "../Images/games/slot/ebet.png";
import slot8 from "../Images/games/slot/evo.png";
import slot9 from "../Images/games/slot/gw.png";
import slot10 from "../Images/games/slot/hotgraph.png";
import slot11 from "../Images/games/slot/jili.png";
import slot12 from "../Images/games/slot/joker.png";
import slot13 from "../Images/games/slot/ka.png";
import slot14 from "../Images/games/slot/kingmaker.png";
import slot15 from "../Images/games/slot/mg.png";
import slot16 from "../Images/games/slot/mp.png";
import slot17 from "../Images/games/slot/naga.png";
import slot18 from "../Images/games/slot/next.png";
import slot19 from "../Images/games/slot/pg.png";
import slot20 from "../Images/games/slot/playstar.png";
// import slot21 from "../Images/games/slot/pp.png";
// import slot22 from "../Images/games/slot/pretty.png";
import slot23 from "../Images/games/slot/righ88.png";
import slot24 from "../Images/games/slot/sg.png";
// import slot25 from "../Images/games/slot/skywind.png";
import slot26 from "../Images/games/slot/sp.png";
// import slot27 from "../Images/games/slot/xg.png";


export default function Slot() {
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
