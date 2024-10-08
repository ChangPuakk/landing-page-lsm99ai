import React, { useState, useEffect } from "react";
import "../Style/main.css";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

// img
import logostart from "../Images/new-ai/logo-start.png";
import bannerstart from "../Images/new-ai/bander-start.png";

import titlemenu1 from "../Images/new-ai/menu1.png";
import titlemenu2 from "../Images/new-ai/menu2.png";
import titlemenu3 from "../Images/new-ai/menu3.png";

import BannerPro1 from "../Images/new-ai/Promotion/Pro1.png";
import BannerPro2 from "../Images/new-ai/Promotion/Pro2.png";
import BannerPro3 from "../Images/new-ai/Promotion/Pro3.png";
import BannerPro4 from "../Images/new-ai/Promotion/Pro4.png";

export default function Home() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
  const [linkRegister, setLinkRegister] = useState(
    "https://game.lsm99ai.asia/register"
  );

  const [selectedCategory, setSelectedCategory] = useState("slot");
  const [displayedGames, setDisplayedGames] = useState([]);
  const gameCategories = ["slot", "lotto", "casino", "sport"];

  const [currentBanner, setCurrentBanner] = useState(0);

  // const gameImages = {
  //   slot: [iconGames1, iconGames2, iconGames3, iconGames4, iconGames5, iconGames6, iconGames7, iconGames8],
  //   lotto: [iconGamel1, iconGamel2, iconGamel3],
  //   casino: [iconGamec1, iconGamec2, iconGamec3, iconGamec4, iconGamec5, iconGamec6, iconGamec7, iconGamec8],
  //   sport: [iconGamesp1, iconGamesp2, iconGamesp3, iconGamesp4, iconGamesp5],
  // };

  // Resize effect to control displayed games
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1100) {
  //       setDisplayedGames(gameImages[selectedCategory].slice(0, 6));
  //     } else {
  //       setDisplayedGames(gameImages[selectedCategory]);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [selectedCategory]);

  // Auto switch categories
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedCategory((prevCategory) => {
        const currentIndex = gameCategories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % gameCategories.length;
        return gameCategories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const promotionTexts = [
    {
      title: (
        <>
          บอลสเต็ป ถูกหรือผิดติดต่อกัน 5-9 คู่บอลสเต็ป<br />
          - ถูกเต็มทั้งหมด 5-9 คู่ หรือผิดเต็มทั้งหมด 5-9 คู่<br />
          - รับโบนัส 10 เท่าของยอดแทง จ่ายสูงสุด 3,999 บาท <br />
          - บิลขั้นต่ำ 10 บาทขึ้นไป
        </>
      ),
      conditions: [
        <span>เงื่อนไข</span>,
        "- บอลแต่ละคู่ต้องมีค่าน้ำ 1.75 - 2.35 เท่านั้น",
        "- บอล นับเฉพาะเต็มเวลา (HDP) ไม่รวมการเล่น 1x2",
        "- สามารถแทงสลับคู่ต่อบิลได้ไม่เกิน 4 บิล",
        "- โปรโมชั่นประเภทกีฬาทั้งหมด ***สามารถแจ้งรับได้แค่ 1 โปรเท่านั้น",
        "- แจ้งรับได้ภายใน 24 ชั่วโมง (โดยยึดวันที่ วันต่อวัน ตามรอบบิลในประวัติการแทงนะคะ",
        <span>**รับได้เฉพาะ กีฬา SPORT LSM และ กีฬา SBOBET</span>
      ]
    },
    {
      title: (
        <>
          ทายหวยง่าย ๆ เพียง แคปหน้าจอประวัติยอดเงินรวมการซื้อหวยส่งให้ทางแอดมิน <br />
          - ทายถูก 3 ตัวบน รับ ทองคำหนัก 1 บาท<br />
          - ทายถูก 2 ตัวล่าง รับ ทองคำหนัก 1 สลึง<br />
        </>
      ),
      conditions: [
        <span>เงื่อนไขโปรโมชั่น</span>,
        "- บิลการเล่นหวยทุกชนิดสามารถลุ้นรับได้ เพียงเเค่มีการแทงหวย 2,000 บาทขึ้นไป",
        "- สามารถทายได้ก่อนวันหวยออก 3 วัน",
        "- 1 สิทธิ์ สามารถเลือกทายได้แค่ 1 อย่าง (ทาย 3 ตัวบน หรือ 2 ตัวล่าง) (ให้เลือกทายหวย 3 ตัวบน หรือ 2 ตัวล่าง อย่างใดอย่างหนึ่งเท่านั้น)",
        "- ต้องเป็นบิลที่ไม่สามารถยกเลิกได้",
        "- หากเลขนั้นๆมีผู้ทายก่อนแล้ว จะไม่สามารถทายซ้ำได้",
      ]
    },
    {
      title: "โบนัสสล็อตแตก 0 บาท (ซื้อฟีเจอร์คืนทุน 100%)",
      conditions: [
        "หลังจากจบการหมุนฟีเจอร์ครบแล้วยอดรวมเป็น 0 บาท รับโบนัสคืนทุนทันที 150 บาท",
        "(หากชื่อซ้ำ หรือ IP ซ้ำกันทางเว็บจะตัดสิทธิ์ในการรับโบนัสทันที)",
        <span>ทางเว็บ ขอสงวนสิทธิ์ในการตัดสินใจเพียงผู้เดียว หากมีสิ่งที่นอกเหนือจากนี้ คำตัดสินของทางเว็บจะถือเป็นข้อสิ้นสุดค่ะ</span>
      ]
    },
    {
      title: (
        <>
          เดิมพันคาสิโน บิล 100 บาทขึ้นไป ลุ้นรับโบนัสสูงสุด 100,000 บาท <br />
          - ถูก หรือ ผิด ติดต่อกัน 9 ตา รับเพิ่ม 5 เท่า สูงสุดถึง 5,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 10 ตา รับเพิ่ม 10 เท่า สูงสุดถึง 10,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 11 ตา รับเพิ่ม 15 เท่า สูงสุดถึง 20,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 13 ตา รับเพิ่ม 20 เท่า สูงสุดถึง 50,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 15 ตา รับเพิ่ม 30 เท่า สูงสุดถึง 100,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 20 ตา รับทันที 100,000 บาท<br />
          - ยอดเดิมพันต่อบิล 100 บาทขึ้นไป
        </>
      ),
      conditions: [
        <span>ตัวอย่าง</span>,
        "หากลูกค้าเดิมพันใน 15 ตา และชนะติดต่อกัน จะนับโบนัสจากยอดเดิมพัน ที่ต่ำสุด ",
        "เช่น ตาที่ต่ำสุดคือ เดิมพัน Player 3,000 บาท หากเข้าตามเงื่อนไข",
        "ยอดโบนัสที่ลูกค้าจะได้รับเพิ่มคือ 3,000X30 เท่ากับ 90,000 บาท",
      ]
    },
  ];

  const handleMove = (splide, newIndex) => {
    setCurrentBanner(newIndex);
  };

  return (
    <>
      <div>
        <div className="group-container">
          <div className="section-start container-box">
            <div className="flex-container">
              <div className="section-start-text">
                <div className="img-start-logo">
                  <img src={logostart} alt="logo" />
                </div>
                <h1>“การเดิมพันออนไลน์ที่ทันสมัยที่สุดกับ”</h1>
                <p>ยินดีต้อนรับสู่โลกแห่งการเดิมพันออนไลน์ที่ล้ำสมัยกว่ากับ LSM99Ai <br />
                  ที่นี่คือจุดหมายปลายทางสำหรับนักเดิมพันที่ต้องการสัมผัสประสบการณ์สุดพิเศษ</p>
              </div>
              <div className="section-start-banner">
                <img src={bannerstart} alt="banner" />
              </div>
            </div>
          </div>
          <div className="section-menu">
            <div className="menu-flex">
              <img src={titlemenu1} alt="menu" />
              <img src={titlemenu2} alt="menu" />
              <img src={titlemenu3} alt="menu" />
            </div>
          </div>
          <div className="section-title">
            <div>
              <div className="box-bg-title">
                <div className="bg-title">โปรโมขั่น</div>
              </div>
            </div>
          </div>
          <div className="section-promotion">
            <div className="promotion-box">
              <div>
                <div className="promotion-banner">
                  <Splide
                    className="slide_promotion"
                    options={{
                      rewind: true,
                      gap: "10px",
                      type: "loop",
                      autoplay: true,
                      interval: 3000,
                      arrows: false,
                      pauseOnHover: false,
                    }}
                    onMove={handleMove}
                  >
                    <SplideSlide className="slide_promotion">
                      <img src={BannerPro1} alt="" className="w-100" />
                    </SplideSlide>
                    <SplideSlide className="slide_promotion">
                      <img src={BannerPro2} alt="" className="w-100" />
                    </SplideSlide>
                    <SplideSlide className="slide_promotion">
                      <img src={BannerPro3} alt="" className="w-100" />
                    </SplideSlide>
                    <SplideSlide className="slide_promotion">
                      <img src={BannerPro4} alt="" className="w-100" />
                    </SplideSlide>
                  </Splide>
                </div>
                <div className="promotion-banner-mini">
                  <Splide
                    className="custom-slider"
                    options={{
                      rewind: true,
                      gap: "10px",
                      type: "loop",
                      autoplay: true,
                      interval: 3000,
                      arrows: false,
                      pauseOnHover: false,
                      perPage: 3,
                      focus: 'center',
                    }}
                  >
                    <SplideSlide className="custom-slider">
                      <img src={BannerPro1} alt="" className="w-100" />
                    </SplideSlide>
                    <SplideSlide className="custom-slider">
                      <img src={BannerPro2} alt="" className="w-100" />
                    </SplideSlide>
                    <SplideSlide className="custom-slider">
                      <img src={BannerPro3} alt="" className="w-100" />
                    </SplideSlide>
                    <SplideSlide className="custom-slider">
                      <img src={BannerPro4} alt="" className="w-100" />
                    </SplideSlide>
                  </Splide>

                </div>
              </div>
              <div className="promotion-text">
                <div className="promotion-text-box">
                  <p>{promotionTexts[currentBanner].title}</p>
                  <p>
                    {promotionTexts[currentBanner].conditions.map((condition, index) => (
                      <React.Fragment key={index}>
                        {condition}<br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title">
            <div>
              <div className="box-bg-title">
                <div className="bg-title">ค่ายเกมส์ทั้งหมด</div>
              </div>
            </div>
          </div>
          <div className="section-games"></div>
          <div className="section-question"></div>
        </div>
      </div>
    </>
  );
}
