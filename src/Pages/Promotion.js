import React,{ useState} from 'react'
import '../assets/Style/promotion.css';

import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import menuWallet from '../assets/Images/menu-wallet.png'
import menuDeposit from '../assets/Images/menu-deposit.png'
import menuPlayGame from '../assets/Images/menu-games.png'
import menuWithdraw from '../assets/Images/menu-withdraw.png'
import menuPromotion from '../assets/Images/menu-promotion.png'

import promotionTitle from '../assets/Images/promotion-title.png'

import casino1 from '../assets/Images/promotion/casino1.png'
import casino2 from '../assets/Images/promotion/casino2.png'
import casino3 from '../assets/Images/promotion/casino3.png'
import casino4 from '../assets/Images/promotion/casino4.png'
import lotto1 from '../assets/Images/promotion/lotto1.png'
import slot1 from '../assets/Images/promotion/slot1.png'
import slot2 from '../assets/Images/promotion/slot2.png'
import slot3 from '../assets/Images/promotion/slot3.png'
import slot4 from '../assets/Images/promotion/slot4.png'
import slot5 from '../assets/Images/promotion/slot5.png'
import slot6 from '../assets/Images/promotion/slot6.png'
import slot7 from '../assets/Images/promotion/slot7.png'
import slot8 from '../assets/Images/promotion/slot8.png'
import sport1 from '../assets/Images/promotion/sport1.png'
import sport2 from '../assets/Images/promotion/sport2.png'
import sport3 from '../assets/Images/promotion/sport3.png'
import sport4 from '../assets/Images/promotion/sport4.png'
import sport5 from '../assets/Images/promotion/sport5.png'
import sport6 from '../assets/Images/promotion/sport6.png'
import sport7 from '../assets/Images/promotion/sport7.png'
import sport8 from '../assets/Images/promotion/sport8.png'
import sport9 from '../assets/Images/promotion/sport9.png'
import sport10 from '../assets/Images/promotion/sport10.png'
import sport11 from '../assets/Images/promotion/sport11.png'
import sport12 from '../assets/Images/promotion/sport12.png'
import sport13 from '../assets/Images/promotion/sport13.png'

import logo from '../assets/Images/logo.png'

import login from '../assets/Images/btn-login.png'
import register from '../assets/Images/btn-register.png'

import headerLine from '../assets/Images/line.png'
import notify from '../assets/Images/notify.png'
import burgerBar from '../assets/Images/burger-menu.png'

export default function Promotion() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.com/login");
  const [linkRegister, setLinkRegister] = useState("https://game.lsm99ai.com/register");
  const [linkHome, setLinkHome] = useState("/");
  return (
    <>
      <div className='promotion'>
        <div className='bg--promotion'>
          <div className='promotion--header'>
            <div className='pc promotion--header--box'>
              <a href={linkLogin}><img src={menuWallet} alt="menu" className='promotion--header--img' /></a>
              <a href={linkLogin}><img src={menuDeposit} alt="menu" className='promotion--header--img' /></a>
              <a href={linkLogin}><img src={menuPlayGame} alt="menu" className='promotion--header--img' /></a>
              <a href={linkLogin}><img src={menuWithdraw} alt="menu" className='promotion--header--img' /></a>
              <a href='/Promotion'><img src={menuPromotion} alt="menu" className='promotion--header--img' /></a>
            </div>
            <div className='mb'>
              <div className='mb--promotion--header'>
                <div className='mb--bg--top'>
                  <div className='left'>
                    <a href={linkHome}><img src={logo} alt="logo" /></a>
                  </div>
                  <div className='center'>
                    <a href={linkLogin}><img src={login} alt="login" /></a>
                    <a href={linkRegister}><img src={register} alt="register" /></a>
                  </div>
                  <div className='right'>
                    {/* <img src={headerLine} alt="line" /> */}
                    <img src={notify} alt="notify" />
                    <img src={burgerBar} alt="burgerbar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='promotion--body'>
            <div className='promotion--title'>
              <img src={promotionTitle} alt="promotion title" />
            </div>

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
                        <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot8} alt="promotion" className="w-100" /></a></Col>

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
                        <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport13} alt="promotion" className="w-100" /></a></Col>
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
                        <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={sport13} alt="promotion" className="w-100" /></a></Col>
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
                        <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={slot8} alt="promotion" className="w-100" /></a></Col>
                    </Row>
                </Tab>
                <Tab eventKey="tab-5" title="หวย">
                    <Row>
                        <Col md={6} xs={12} className='games mb-2'><a href={linkLogin}><img src={lotto1} alt="promotion" className="w-100" /></a></Col>
                    </Row>
                </Tab>
            </Tabs>
          </div>
          <div className='promotion--footer'></div>
        </div>
      </div>
    </>
  )
}
