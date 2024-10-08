// import React, { useState } from "react";
// import "../Style/main.css";
// import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Header";
// import Footer from "./Footer";

// const login = "https://fs.cdnxn.com/landingAi/Images/btn-login.png";
// const register = "https://fs.cdnxn.com/landingAi/Images/btn-register.png";

// const gamesCasino = "https://fs.cdnxn.com/landingAi/Images/games-btn-casino.png";
// const gamesSlot = "https://fs.cdnxn.com/landingAi/Images/games-btn-slot.png";
// const gamesSport = "https://fs.cdnxn.com/landingAi/Images/games-btn-sport.png";
// const gamesLotto = "https://fs.cdnxn.com/landingAi/Images/games-btn-lotto.png";

// const line = "https://fs.cdnxn.com/landingAi/Images/line.png";

// const labelPromotion = "https://fs.cdnxn.com/landingAi/Images/label-promotion.png"
// const labelPlay = "https://fs.cdnxn.com/landingAi/Images/label-playgames.png"
// const promo1 = "https://fs.cdnxn.com/landingAi/Images/promotion/procasino1.png"
// const promo2 = "https://fs.cdnxn.com/landingAi/Images/promotion/procasino2.png"
// const promo3 = "https://fs.cdnxn.com/landingAi/Images/promotion/procasino3.png"
// const promo4 = "https://fs.cdnxn.com/landingAi/Images/promotion/procasino4.png"

// // casino
// const casino1 = "https://fs.cdnxn.com/landingAi/Images/games/casino/allbet.png";
// const casino2 = "https://fs.cdnxn.com/landingAi/Images/games/casino/bacarat.png";
// const casino3 = "https://fs.cdnxn.com/landingAi/Images/games/casino/wm.png";
// const casino4 = "https://fs.cdnxn.com/landingAi/Images/games/casino/sa.png";
// const casino5 = "https://fs.cdnxn.com/landingAi/Images/games/casino/dg.png";
// const casino6 = "https://fs.cdnxn.com/landingAi/Images/games/casino/pretty.png";
// const casino7 = "https://fs.cdnxn.com/landingAi/Images/games/casino/playtech.png";
// const casino8 = "https://fs.cdnxn.com/landingAi/Images/games/casino/xg.png";
// const casino9 = "https://fs.cdnxn.com/landingAi/Images/games/casino/pp.png";
// const casino10 = "https://fs.cdnxn.com/landingAi/Images/games/casino/skywind.png";


// export default function Casino() {
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
//                   <img src={casino1} alt="casino1" />
//                   <img src={casino2} alt="casino2" />
//                   <img src={casino3} alt="casino3" />
//                   <img src={casino4} alt="casino4" />
//                   <img src={casino5} alt="casino5" />
//                   <img src={casino6} alt="casino6" />
//                   <img src={casino7} alt="casino7" />
//                   <img src={casino8} alt="casino8" />
//                   <img src={casino9} alt="casino9" />
//                   <img src={casino10} alt="casino10" />
//                 </div>

//                 <div className="mobile"><div className="line"><a href="/"><img src={line} alt="line" /></a></div></div>
//               </div>
//               <div className="right pc">
//                 <a href="/promotion"><img src={labelPromotion} alt="โปรโมชั่น" className="labels labelsPromotion" /></a>
//                 <div className="promotionlist">
//                   <img src={promo1} style={{ marginBottom: "10px" }} alt="promo1" />
//                   <img src={promo2} style={{ marginBottom: "10px" }} alt="promo2" />
//                   <img src={promo3} style={{ marginBottom: "10px" }} alt="promo3" />
//                   <img src={promo4} style={{ marginBottom: "10px" }} alt="promo4" />
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
