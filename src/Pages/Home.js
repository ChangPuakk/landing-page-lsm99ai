import React, { useState, useEffect } from "react";
import "../Style/main.css";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Header from "../Pages/Header";

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

import iconGames1 from "../Images/new-ai/icon-games/s1.png";
import iconGames2 from "../Images/new-ai/icon-games/s2.png";
import iconGames3 from "../Images/new-ai/icon-games/s3.png";
import iconGames4 from "../Images/new-ai/icon-games/s4.png";
import iconGames5 from "../Images/new-ai/icon-games/s5.png";
import iconGames6 from "../Images/new-ai/icon-games/s6.png";
import iconGames7 from "../Images/new-ai/icon-games/s7.png";
import iconGames8 from "../Images/new-ai/icon-games/s8.png";

import iconGamec1 from "../Images/new-ai/icon-games/c1.png";
import iconGamec2 from "../Images/new-ai/icon-games/c2.png";
import iconGamec3 from "../Images/new-ai/icon-games/c3.png";
import iconGamec4 from "../Images/new-ai/icon-games/c4.png";
import iconGamec5 from "../Images/new-ai/icon-games/c5.png";
import iconGamec6 from "../Images/new-ai/icon-games/c6.png";
import iconGamec7 from "../Images/new-ai/icon-games/c7.png";
import iconGamec8 from "../Images/new-ai/icon-games/c8.png";

import iconGamesp1 from "../Images/new-ai/icon-games/sp1.png";
import iconGamesp2 from "../Images/new-ai/icon-games/sp2.png";
import iconGamesp3 from "../Images/new-ai/icon-games/sp3.png";
import iconGamesp4 from "../Images/new-ai/icon-games/sp4.png";
import iconGamesp5 from "../Images/new-ai/icon-games/sp5.png";

import iconGamel1 from "../Images/new-ai/icon-games/l1.png";
import iconGamel2 from "../Images/new-ai/icon-games/l2.png";
import iconGamel3 from "../Images/new-ai/icon-games/l3.png";

import bannerquestion from "../Images/new-ai/img-question.png";

import footerlogo from "../Images/new-ai/logo.png";

import iconBank1 from "../Images/new-ai/icon-bank/b1.png";
import iconBank2 from "../Images/new-ai/icon-bank/b2.png";
import iconBank3 from "../Images/new-ai/icon-bank/b3.png";
import iconBank4 from "../Images/new-ai/icon-bank/b4.png";
import iconBank5 from "../Images/new-ai/icon-bank/b5.png";
import iconBank6 from "../Images/new-ai/icon-bank/b6.png";
import iconBank7 from "../Images/new-ai/icon-bank/b7.png";

export default function Home() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.asia/login");
  const [linkRegister, setLinkRegister] = useState(
    "https://game.lsm99ai.asia/register"
  );

  const [selectedCategory, setSelectedCategory] = useState("slot");
  const [displayedGames, setDisplayedGames] = useState([]);
  const gameCategories = ["slot", "lotto", "casino", "sport"];

  const [currentBanner, setCurrentBanner] = useState(0);

  const gameImages = {
    slot: [iconGames1, iconGames2, iconGames3, iconGames4, iconGames5, iconGames6, iconGames7, iconGames8],
    lotto: [iconGamel1, iconGamel2, iconGamel3],
    casino: [iconGamec1, iconGamec2, iconGamec3, iconGamec4, iconGamec5, iconGamec6, iconGamec7, iconGamec8],
    sport: [iconGamesp1, iconGamesp2, iconGamesp3, iconGamesp4, iconGamesp5],
  };

  // Resize effect to control displayed games
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setDisplayedGames(gameImages[selectedCategory].slice(0, 6));
      } else {
        setDisplayedGames(gameImages[selectedCategory]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedCategory]);

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
        <Header />
        <div className="group-container">
          <div className="section-start container-box">
            <div className="flex-section-start">
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
            <Splide
              className="section-menu-custom-slider"
              options={{
                rewind: true,
                gap: "10px",
                type: "loop",
                autoplay: true,
                interval: 3000,
                arrows: false,
                pauseOnHover: false,
                perPage: 1,
                focus: 'center',
                padding: {
                  left: '20%',
                  right: '20%'
                }
              }}
            >
              <SplideSlide className="section-menu-custom-slider">
                <img src={titlemenu1} alt="" className="w-100" />
              </SplideSlide>
              <SplideSlide className="section-menu-custom-slider">
                <img src={titlemenu2} alt="" className="w-100" />
              </SplideSlide>
              <SplideSlide className="section-menu-custom-slider">
                <img src={titlemenu3} alt="" className="w-100" />
              </SplideSlide>
            </Splide>
          </div>
          <div className="section-title">
            <div>
              <div className="box-bg-title">
                <div className="bg-title">โปรโมขั่น</div>
              </div>
            </div>
          </div>
          <div className="section-promotion container-box">
            <div className="flex-container">
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
          <div className="section-games container-box">
            <div>
              <div className="games-box">
                <div className="games-category">
                  {gameCategories.map((category) => (
                    <div
                      key={category}
                      className={`category ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <div className={`category-${category}`}></div>
                      <span>{category === 'slot' ? 'สล็อต' : category === 'lotto' ? 'หวย' : category === 'casino' ? 'คาสิโน' : 'กีฬา'}</span>
                    </div>
                  ))}
                </div>

                <div className="games-list">
                  {displayedGames.map((image, index) => (
                    <a href={linkLogin} key={index}>
                      <div className="icon-games">
                        <img src={image} alt={selectedCategory} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="section-question container-box">
            <div className="flex-container">
              <div className="section-question-banner">
                <img src={bannerquestion} alt="banner" />
              </div>
              <div className="section-question-text">
                <p>ทำไมคุณควรตัดสินใจเลือกเรา ?<br /><br />

                  เว็บคาสิโนออนไลน์ที่ครองใจผู้เล่นทั่วโลก ไม่ใช่แค่ประเทศจีน
                  ด้วยมาตรฐานระดับโลก เทคโนโลยี และการบริการดีที่สุด
                  ไร้ปัญหา ให้บริการครบทั้ง dg บาคาร่าออนไลน์ ไฮโล เสือมังกร
                  รูเล็ต หรือ โป๊กเกอร์ บริษัทพัฒนาต่อเนื่องรวดเร็ว มั่นคง
                  พร้อมการ ใช้งาน ผ่าน Casino App ยิ่งตอกย้ำ ความเป็นเจ้า
                  ตลาดของ เกมคาสิโน ภาพ Full HD ได้ประสบการณ์พร้อมกับ
                  สนุกทุกที่และลุ้นโชค ไปกับเกมส์ของเรา
                </p>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <div className="section-footer-group">
              <div className="footerlogo">
                <img src={footerlogo} alt="logo" />
              </div>
              <div className="footer-text">
                <span>
                  LSM99Ai ศูนย์รวมเว็บพนันออนไลน์ทุกชนิด ฝาก-ถอนด้วยระบบ<br />
                  ออโต้ทำรายการไม่กี่วินาที พร้อมรูปแบบการเล่นง่าย สมัครง่ายในไม่กี่ขั้น ตอนบริการด้วยระบบออนไลน์มาตรฐานสากล เท่าไหร่ก็จ่าย
                </span>
              </div>
              <div className="icon-bank">
                <img src={iconBank1} alt="icon-bank" />
                <img src={iconBank2} alt="icon-bank" />
                <img src={iconBank3} alt="icon-bank" />
                <img src={iconBank4} alt="icon-bank" />
                <img src={iconBank5} alt="icon-bank" />
                <img src={iconBank6} alt="icon-bank" />
                <img src={iconBank7} alt="icon-bank" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
