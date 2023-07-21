import React, {useState} from 'react'

import footerBgFrame from '../assets/Images/bottom-menu-frame.png'
// import footerMenuHome from '../assets/Images/bottom-menu.png'

import footerMenuWallet from '../assets/Images/f-menu-wallet.png'
import footerMenuDeposit from '../assets/Images/f-menu-deposit.png'
import footerMenuGames from '../assets/Images/f-menu-games.png'
import footerMenuWithdraw from '../assets/Images/f-menu-withdraw.png'
import footerMenuPromotion from '../assets/Images/f-menu-promotion.png'

export default function Footer() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.com/login");
  return (
    <>
      <div className='footer--section'>
        <div className='footer--home'>
          <div className='footer--home--page'>
            <a href={linkLogin}><img src={footerMenuWallet} alt="menu wallet" className='f-top' /></a>
            <a href={linkLogin}><img src={footerMenuDeposit} alt="menu deposit" className='f-bottom' /></a>
            <a href={linkLogin}><img src={footerMenuGames} alt="menu games" className='f-top f-playgames' /></a>
            <a href={linkLogin}><img src={footerMenuWithdraw} alt="menu withdraw" className='f-bottom' /></a>
            <a href='/Promotion'><img src={footerMenuPromotion} alt="menu promotion" className='f-top' /></a>
          </div>
          {/* <img src={footerMenuHome} alt="menu" className='footer--home--page' /> */}
        </div>
        <img src={footerBgFrame} className="footer--bg-frame--img" alt="footer menu" />
      </div>
    </>
  )
}
