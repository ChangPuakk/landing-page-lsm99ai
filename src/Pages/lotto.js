// import React, { useState } from "react";
// import "../Style/main.css";
// import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../Pages/Header";
// import Footer from "../Pages/Footer";

// const login = "https://fs.cdnxn.com/landingAi/Images/btn-login.png";
// const register = "https://fs.cdnxn.com/landingAi/Images/btn-register.png";

// const gamesCasino = "https://fs.cdnxn.com/landingAi/Images/games-btn-casino.png";
// const gamesSlot = "https://fs.cdnxn.com/landingAi/Images/games-btn-slot.png";
// const gamesSport = "https://fs.cdnxn.com/landingAi/Images/games-btn-sport.png";
// const gamesLotto = "https://fs.cdnxn.com/landingAi/Images/games-btn-lotto.png";

// const line = "https://fs.cdnxn.com/landingAi/Images/line.png";

// const labelPromotion = "https://fs.cdnxn.com/landingAi/Images/label-promotion.png"
// const labelPlay = "https://fs.cdnxn.com/landingAi/Images/label-playgames.png"
// const promo1 = "https://fs.cdnxn.com/landingAi/Images/promotion/prolotto1.png"

// //lotto
// const lotto1 = "https://fs.cdnxn.com/landingAi/Images/games/lotto/lotto.png";
// const lotto2 = "https://fs.cdnxn.com/landingAi/Images/games/lotto/lottoexit.png";
// const lotto3 = "https://fs.cdnxn.com/landingAi/Images/games/lotto/qq.png";


// export default function Lotto() {
//   const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
//   return (
//     <>
//       <div>
//         <div className="home">
//           <Header />
//           <div className="main">
//             <div className="pc">
//               <div class="marquee">
//                 <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
//               </div>
//             </div>
//             <div className="container">
//               <div className="left">
//                 <div className="mobile">
//                   <div class="marquee">
//                     <marquee><p>ยินดีต้อนรับสู่ <span className="hotpink">LSM99AI</span> เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</p></marquee>
//                   </div>
//                 </div>

//                 <div className="mobile">
//                   <div className="login-register">
//                     <a href="https://game.lsm99ai.bet/login"><img src={login} alt="login" /></a>
//                     <a href="https://game.lsm99ai.bet/register"><img src={register} alt="register" /></a>
//                   </div>
//                 </div>

//                 <div className="pc">
//                   <img src={labelPlay} alt="play" className="labels labelsPlay" />
//                 </div>

//                 <div className="games-menu">
//                   <a href="/casino"><div className="-gamesCasino"></div></a>
//                   <a href="/slot"><div className="-gamesSlot"></div></a>
//                   <a href="/sport"><div className="-gamesSport"></div></a>
//                   <a href="/lotto"><div className="-gamesLotto"></div></a>
//                 </div>

//                 <div className="games-all">
//                   <img src={lotto1} alt="promotion" />
//                   <img src={lotto2} alt="promotion" />
//                   <img src={lotto3} alt="promotion" />

//                   {/* <Tabs defaultActiveKey="tab-1">
//                       <Tab eventKey="tab-1" title="คาสิโน">
//                           <Row>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={casino1} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={casino2} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={casino3} alt="promotion" className="w-100" /></a></Col>
//                           </Row>
//                       </Tab>
//                       <Tab eventKey="tab-2" title="สล็อต">
//                           <Row>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot1} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot2} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot3} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot4} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot5} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot6} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot7} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot8} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot9} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot10} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot11} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot12} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot13} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot14} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot15} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot16} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot17} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot18} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot19} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot20} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot21} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot22} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot23} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot24} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot25} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot26} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={slot27} alt="promotion" className="w-100" /></a></Col>
//                           </Row>
//                       </Tab>
//                       <Tab eventKey="tab-3" title="กีฬา">
//                           <Row>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport1} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport2} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport3} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport4} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport5} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport6} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={sport7} alt="promotion" className="w-100" /></a></Col>
//                           </Row>
//                       </Tab>
//                       <Tab eventKey="tab-4" title="หวย">
//                           <Row>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={lotto1} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={lotto2} alt="promotion" className="w-100" /></a></Col>
//                               <Col md={4} xs={6} className='games mb-2'><a href={linkLogin}><img src={lotto3} alt="promotion" className="w-100" /></a></Col>
//                           </Row>
//                       </Tab>
//                   </Tabs> */}
//                 </div>

//                 <div className="mobile"><div className="line"><a href="/"><img src={line} alt="line" /></a></div></div>
//               </div>
//               <div className="right pc">
//                 <a href="/promotion"><img src={labelPromotion} alt="โปรโมชั่น" className="labels labelsPromotion" /></a>
//                 <div className="promotionlist">
//                   <img src={promo1} alt="promo1" />

//                 </div>
//               </div>
//             </div>

//           </div>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }
