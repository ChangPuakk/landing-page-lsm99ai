import React, {useState} from 'react'
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import '../assets/Style/main.css';

import headerFrame from '../assets/Images/header-frame.png'
import logo from '../assets/Images/logo.png'
import btnLogin from '../assets/Images/btn-login.png'
import btnRegister from '../assets/Images/btn-register.png'

import headerCenter from '../assets/Images/header-center.png'
import wallet from '../assets/Images/menu-wallet.png'
import deposit from '../assets/Images/menu-deposit.png'
import playGame from '../assets/Images/menu-games.png'
import withdraw from '../assets/Images/menu-withdraw.png'
import promotion from '../assets/Images/menu-promotion.png'

import login from '../assets/Images/btn-login.png'
import register from '../assets/Images/btn-register.png'

import headerLine from '../assets/Images/line.png'
import notify from '../assets/Images/notify.png'
import burgerBar from '../assets/Images/burger-menu.png'

import modalGame from '../assets/Images/menu-top-game.png'
import modalCashBack from '../assets/Images/menu-top-cashback.png'
import modalHistory from '../assets/Images/menu-top-history.png'
import modalPromotion from '../assets/Images/menu-top-promotion.png'
import modalAffiliate from '../assets/Images/menu-top-affiliate.png'
import modalContact from '../assets/Images/menu-top-contact.png'
import modalInstall from '../assets/Images/menu-top-install.png'

export default function Header() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.com/login");
  const [linkRegister, setLinkRegister] = useState("https://game.lsm99ai.com/register");
  const [linkHome, setLinkHome] = useState("/");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showNotification, setShowNotification] = useState(false);
  const handleNotificationClose = () => setShowNotification(false);
  const handleNotificationShow = () => setShowNotification(true);
  return (
    <>
      <div className='bg-gradients'></div>
      <div className='header'>
        <Container>
          <div className='header--bg pc'>
            <div className='left'>
              <a href={linkHome} title='Temmax168'><img src={logo} alt="logo" className='img--logo' /></a>
              <a href={linkLogin}><img src={btnLogin} alt="login" className='btn--logo' /></a>
              <a href={linkRegister}><img src={btnRegister} alt="register" className='btn--register' /></a>
            </div>
            <div className='center'>
              <div className='menu'>
                <a href={linkLogin} title="wallet"><img src={wallet} alt="wallet" className='btn--wallet' /></a>
                <a href={linkLogin} title="deposit"><img src={deposit} alt="deposit" className='btn--deposit' /></a>
                <a href={linkLogin} title="play games"><img src={playGame} alt="playGame" className='btn--playgame' /></a>
                <a href={linkLogin} title="withdraw"><img src={withdraw} alt="withdraw" className='btn--withdraw' /></a>
                <a href="/Promotion" title="promotion"><img src={promotion} alt="promotion" className='btn--promotion' /></a>
              </div>
              <img src={headerCenter} alt="center" className='header--center' />
            </div>
            <div className='right'>
              <a href='https://line.me/R/ti/p/@643ievtr' target='_blank' title='line'><img src={headerLine} alt="line" className='btn--line' /></a>
              <img src={notify} alt="notify" className='btn--notify' onClick={handleNotificationShow} />
              <img src={burgerBar} alt="burger bar" className='btn--burgerBar' onClick={handleShow} />
            </div>
          </div>

          <div className='header--bg mb'>
            <div className='left'>
              <a href={linkHome}><img src={logo} alt="logo" className='img--logo' /></a>
            </div>
            <div className='center'>
              <div className='menu'>
                <a href={linkLogin}><img src={login} alt="login" className='btn--login' /></a>
                <a href={linkRegister}><img src={register} alt="register" className='btn--register' /></a>
              </div>
            </div>
            <div className='right'>
              {/* <a href={linkHome}><img src={headerLine} alt="line" className='btn--line' /></a> */}
              <img src={notify} alt="notify" className='btn--notify' onClick={handleNotificationShow} />
              <img src={burgerBar} alt="burger bar" className='btn--burgerBar' onClick={handleShow} />
            </div>
          </div>
        </Container>
      </div>


      <Modal show={show} onHide={handleClose} className="showmenu--hamburgerbar--modal">
          <div className='wrapper--menu--hamburger'>
              <div className='wrapper--section--hamburger'>
                  <Row>
                      <Col xs={6} className='menu--hamburger'>
                          <a href={linkLogin}>
                              <div className='menu--hamburger--img'>
                                  <img src={modalGame} alt="play games" />
                              </div>
                          </a>
                      </Col>
                      <Col xs={6} className='menu--hamburger'>
                          <a href={linkLogin}>
                              <div className='menu--hamburger--img'>
                                  <img src={modalCashBack} alt="cash back" />
                              </div>
                          </a>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={6} className='menu--hamburger'>
                          <a href={linkLogin}>
                              <div className='menu--hamburger--img'>
                                  <img src={modalHistory} alt="history" />
                              </div>
                          </a>
                      </Col>
                      <Col xs={6} className='menu--hamburger'>
                          <a href='/Promotion'>
                              <div className='menu--hamburger--img'>
                                  <img src={modalPromotion} alt="promotion" />
                              </div>
                          </a>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={6} className='menu--hamburger'>
                          <a href={linkLogin}>
                              <div className='menu--hamburger--img'>
                                  <img src={modalAffiliate} alt="affiliate" />
                              </div>
                          </a>
                      </Col>
                      <Col xs={6} className='menu--hamburger'>
                          <a href={linkLogin}>
                              <div className='menu--hamburger--img'>
                                  <img src={modalContact} alt="contact us" />
                              </div>
                          </a>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12} className='menu--hamburger'>
                          <a href={linkLogin} className='menu--hamburger--btn'>
                              <div className='menu--hamburger--img'>
                                  <img src={modalInstall} alt="install app" />
                              </div>
                          </a>
                      </Col>
                  </Row>
              </div>
          </div>
      </Modal>


      <Modal show={showNotification} onHide={handleNotificationClose} className="show--notification--modal">
        <div className='wrapper--notification'>
        <Tabs defaultActiveKey="tab-1">
                <Tab eventKey="tab-1" title="ทั้งหมด">
                    <Row>
                        <Col xs={12}>คุณไม่มีข้อความ</Col>
                    </Row>
                </Tab>
                <Tab eventKey="tab-2" title="ฝากเงิน">
                    <Row>
                        <Col xs={12}>คุณไม่มีข้อความ</Col>
                    </Row>
                </Tab>
                <Tab eventKey="tab-2" title="ถอนเงิน">
                    <Row>
                        <Col xs={12}>คุณไม่มีข้อความ</Col>
                    </Row>
                </Tab>
                <Tab eventKey="tab-2" title="โบนัส">
                    <Row>
                        <Col xs={12}>คุณไม่มีข้อความ</Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
      </Modal>
    </>
  )
}
