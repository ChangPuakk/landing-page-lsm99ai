import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/main.css";
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
const promo1 = "https://fs.cdnxn.com/landingAi/Images/promo1.png"



const casino1 = 'https://fs.cdnxn.com/landingAi/Images/promotion/casino1.png'
const casino2 = 'https://fs.cdnxn.com/landingAi/Images/promotion/casino2.png'
const casino3 = 'https://fs.cdnxn.com/landingAi/Images/promotion/casino3.png'
const casino4 = 'https://fs.cdnxn.com/landingAi/Images/promotion/casino4.png'
const lotto1 = 'https://fs.cdnxn.com/landingAi/Images/promotion/lotto1.png'
const slot1 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot1.png'
const slot2 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot2.png'
const slot3 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot3.png'
const slot4 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot4.png'
const slot5 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot5.png'
const slot6 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot6.png'
const slot7 = 'https://fs.cdnxn.com/landingAi/Images/promotion/slot7.png'
const sport1 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport1.png'
const sport2 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport2.png'
const sport3 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport3.png'
const sport4 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport4.png'
const sport5 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport5.png'
const sport6 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport6.png'
const sport7 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport7.png'
const sport8 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport8.png'
const sport9 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport9.png'
const sport10 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport10.png'
const sport11 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport11.png'
const sport12 = 'https://fs.cdnxn.com/landingAi/Images/promotion/sport12.png'


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
