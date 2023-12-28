import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/main.css";
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
import promo1 from "../Images/promo1.png"



import casino1 from '../Images/promotion/casino1.png'
import casino2 from '../Images/promotion/casino2.png'
import casino3 from '../Images/promotion/casino3.png'
import casino4 from '../Images/promotion/casino4.png'
import lotto1 from '../Images/promotion/lotto1.png'
import slot1 from '../Images/promotion/slot1.png'
import slot2 from '../Images/promotion/slot2.png'
import slot3 from '../Images/promotion/slot3.png'
import slot4 from '../Images/promotion/slot4.png'
import slot5 from '../Images/promotion/slot5.png'
import slot6 from '../Images/promotion/slot6.png'
import slot7 from '../Images/promotion/slot7.png'
import sport1 from '../Images/promotion/sport1.png'
import sport2 from '../Images/promotion/sport2.png'
import sport3 from '../Images/promotion/sport3.png'
import sport4 from '../Images/promotion/sport4.png'
import sport5 from '../Images/promotion/sport5.png'
import sport6 from '../Images/promotion/sport6.png'
import sport7 from '../Images/promotion/sport7.png'
import sport8 from '../Images/promotion/sport8.png'
import sport9 from '../Images/promotion/sport9.png'
import sport10 from '../Images/promotion/sport10.png'
import sport11 from '../Images/promotion/sport11.png'
import sport12 from '../Images/promotion/sport12.png'


export default function Promotion() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
  return (
    <>
      <div>
        <div className="promotion">
          <Header />
          <div className="main">
            <div className="pc">
              <div class="marquee">
                <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
                {/* <div class="marquee-text"><p>ยินดีต้อนรับสู่ LSM99AI เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></div> */}
              </div>
            </div>
            {/* <div className="container"> */}

            <div className="games-menu">
              <Tabs defaultActiveKey="tab-1">
                <Tab eventKey="tab-1" title="ทั้งหมด">
                  <Row>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino1} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino2} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino3} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino4} alt="promotion" className="w-100" /></a></Col>

                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={lotto1} alt="promotion" className="w-100" /></a></Col>

                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot1} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot2} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot3} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot4} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot5} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot6} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot7} alt="promotion" className="w-100" /></a></Col>


                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport1} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport2} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport3} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport4} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport5} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport6} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport7} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport8} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport9} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport10} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport11} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport12} alt="promotion" className="w-100" /></a></Col>

                  </Row>
                </Tab>
                <Tab eventKey="tab-2" title="กีฬา">
                  <Row>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport1} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport2} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport3} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport4} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport5} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport6} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport7} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport8} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport9} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport10} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport11} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport12} alt="promotion" className="w-100" /></a></Col>

                  </Row>
                </Tab>
                <Tab eventKey="tab-3" title="คาสิโน">
                  <Row>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino1} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino2} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino3} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={casino4} alt="promotion" className="w-100" /></a></Col>
                  </Row>
                </Tab>
                <Tab eventKey="tab-4" title="สล็อต">
                  <Row>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot1} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot2} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot3} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot4} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot5} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot6} alt="promotion" className="w-100" /></a></Col>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot7} alt="promotion" className="w-100" /></a></Col>

                  </Row>
                </Tab>
                <Tab eventKey="tab-5" title="หวย">
                  <Row>
                    <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={lotto1} alt="promotion" className="w-100" /></a></Col>
                  </Row>
                </Tab>
              </Tabs>
            </div>

            {/* </div> */}

          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
