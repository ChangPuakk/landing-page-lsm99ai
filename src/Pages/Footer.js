import React, { useState } from "react";
import "../Style/main.css";

import footerWallet from "../Images/footer-wallet.png";
import footerDepositWithdraw from "../Images/footer-deposit-withdraw.png";
import footerPlay from "../Images/footer-play.png";
import footerAffiliate from "../Images/footer-aff.png";
import footerPromotion from "../Images/footer-promotion.png";
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
