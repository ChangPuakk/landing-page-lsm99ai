// import React, { useState } from "react";
// import "../Style/main.css";

// // const logo = "https://fs.cdnxn.com/landingAi/Images/logo.png";
// const headerCoin = "https://fs.cdnxn.com/landingAi/Images/icon-coid.png";
// const headerNofi = "https://fs.cdnxn.com/landingAi/Images/icon-nofi.png";
// const headerBurger = "https://fs.cdnxn.com/landingAi/Images/icon-burger.png";
// const headerLine = "https://fs.cdnxn.com/landingAi/Images/icon-line.png";

// const login = "https://fs.cdnxn.com/landingAi/Images/btn-login-pc.png";
// const register = "https://fs.cdnxn.com/landingAi/Images/btn-register-pc.png";

// export default function Header() {
//   const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
//   const [linkRegister, setLinkRegister] = useState("https://game.lsm99ai.asia/register");
//   const [linkHome, setLinkHome] = useState("/");
//   return (
//     <>
//       <div class="header-wrapper">
//         <div className="header">
//           <div class="left">
//             <div className="pc">
//               <div className="login-register">
//                 <a href="https://game.lsm99ai.bet/login"><img src={login} alt="login" /></a>
//                 <a href="https://game.lsm99ai.bet/register"><img src={register} alt="register" /></a>
//               </div>
//             </div>
//           </div>
//           <a href="/">
//             <div class="center">
//               <div className="pc">
//               </div>
//             </div>
//           </a>
//           <div class="right">
//             <div className="container-right">
//               <div className="line-pc"><a href="https://lin.ee/izXwWe4" target="_blank"><img src={headerLine} alt="line" className="pc" /></a></div>
//               <div className="notification"><a href={linkLogin}><img src={headerNofi} alt="notification" /></a></div>
//               <div className="burger"><a href={linkLogin}><img src={headerBurger} alt="hamburger bar" /></a></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }