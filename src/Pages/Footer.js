import React, { useState } from "react";
import "../Style/main.css";

const footerWallet = "https://fs.cdnxn.com/landingAi/Images/footer-wallet.png";
const footerDepositWithdraw = "https://fs.cdnxn.com/landingAi/Images/footer-deposit-withdraw.png";
const footerPlay = "https://fs.cdnxn.com/landingAi/Images/footer-play.png";
const footerAffiliate = "https://fs.cdnxn.com/landingAi/Images/footer-aff.png";
const footerPromotion = "https://fs.cdnxn.com/landingAi/Images/footer-promotion.png";
export default function Footer() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
  return (
    <>
      <div>
        <div className="footer">
          <div class="footer-section-mb">
            <a href={linkLogin} className="-img-wallet-div"><div className="-img-wallet"></div></a>
            <a href={linkLogin} className="-img-deposit-div"><div className="-img-deposit"></div></a>
            <a href="/" className="-img-play-div"><div className="-img-play"></div></a>
            <a href={linkLogin} className="-img-affiliate-div"><div className="-img-affiliate"></div></a>
            <a href="/promotion" className="-img-promotion-div"><div className="-img-promotion"></div></a>
          </div>
        </div>
      </div>
    </>
  );
}
