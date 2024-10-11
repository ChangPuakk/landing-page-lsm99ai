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
import iconGamesp6 from "../Images/new-ai/icon-games/sp6.png";
import iconGamesp7 from "../Images/new-ai/icon-games/sp7.png";

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
  const [linkLogin] = useState("https://game.lsm99ai.asia/login");

  const [selectedCategory, setSelectedCategory] = useState("slot");
  const [displayedGames, setDisplayedGames] = useState([]);
  const gameCategories = ["slot", "lotto", "casino", "sport"];

  const [currentBanner, setCurrentBanner] = useState(0);

  const gameImages = {
    slot: [iconGames1, iconGames2, iconGames3, iconGames4, iconGames5, iconGames6, iconGames7, iconGames8],
    lotto: [iconGamel1, iconGamel2, iconGamel3],
    casino: [iconGamec1, iconGamec2, iconGamec3, iconGamec4, iconGamec5, iconGamec6, iconGamec7, iconGamec8],
    sport: [iconGamesp1, iconGamesp2, iconGamesp3, iconGamesp4, iconGamesp5, iconGamesp6, iconGamesp7],
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
          ลุ้นรับโบนัส 50% ของยอดชนะการเดิมพันสูงสุด 30,000 บาท<br />

          แคปหน้าจอคู่ที่เดิมพัน มาแจ้งกับทางเเอดมิน (บอล 5 ลีกใหญ่เท่านั้น) โดยต้องทายผล ดังนี้..<br />

          หนึ่งคู่ให้ทายได้หนึ่งครั้ง, ทายฝั่งที่เดิมพันเท่านั้น<br />

          บิลที่แจ้งรับต้องได้เต็มเท่านั้นค่ะ<br />

          สกอร์ 0-0 ไม่สามารถทายได้ เพราะไม่เข้าตามเงื่อนไข คือไม่มีสกอร์เเละไม่มีทีมที่ยิงก่อน<br />

          **รับได้เฉพาะ กีฬา SPORT LSM / SPORT LSM V2. และ กีฬา SBOBET<br />
        </>
      ),
      conditions: [
        <span>เงื่อนไข</span>,
        "สมาชิกจะสามารถรับโบนัสได้ต้องทายถูกทั้ง 2 ข้อนี้",

        " 1 บิล ต่อ 1 สิทธิ์ ต่อ วัน เท่านั้น (เป็นฝั่งที่เดิมพันมาในบิลเท่านั้น)",

        "-โปรโมชั่นประเภทกีฬาเลือกรับได้ 1 โปรโมชั่น ต่อ วัน เท่านั้น",

        "ห้ามทายคู่ซ้ำ ทายคู่ไหนเเล้วไม่สามารถทายซ้ำได้อีกนะคะ",

        " ต้องทายก่อนบอลแข่ง 10 นาที",

        " เดิมพันฝั่งไหนทายผลสกอร์ฝั่งนั้น",

        " จ่ายโบนัส 50% โดยโบนัสคิดจากค่าน้ำ ของบิลที่เดิมพัน",

        "(ค่าน้ำดำ คิดจากค่าน้ำ ค่าน้ำแดง คิดจากยอดแทง)",

        " นับผลสกอร์ 90 นาทีเท่านั้น- ร่วมทายได้ทั้งบอลเดี่ยว และบอลสเต็ป สเต็ป 1 บิล = 1 สิทธิ์",

        " โปรทายสกอร์บอล สามารถแจ้งรับได้ 1 ครั้ง ต่อ 1 วัน ต่อ 1 ยูสเซอร์ เท่านั้น",

        " แจ้งรับได้ภายใน 24 ชั่วโมง (โดยยึดวันที่ วันต่อวัน ตามรอบบิลในประวัติการแทงนะคะ)",

        "-บิลที่แจ้งรับต้องได้เต็ม เท่านั้นตัวอย่างแทงบอล 100,000 บาท ราคา 0.90 ยอดชนะ 90,000 บาท",

        "รับโบนัสทันที 30,000 บาท",

        "**ทางเว็บ ขอสงวนสิทธิ์ในการตัดสินใจเพียงผู้เดียว",

        "หากมีสิ่งที่นอกเหนือจากนี้ คำตัดสินของทางเว็บจะถือเป็นข้อสิ้นสุดค่ะ **",
        <span> Call Center Line ID : @lsm99ai ตลอด 24 ชั่วโมง</span>,
      ]
    },
    {
      title: (
        <>
          <span>รายละเอียดโปรโมชั่น</span><br />
          โบนัสสล็อตแตก 0 บาท (ซื้อฟีเจอร์คืนทุน) 100%<br />
          เมื่อลูกค้าเริ่มการซื้อฟรีสปินหรือซื้อฟีเจอร์ในการปั่นสล็อต หลังจากจบการหมุนฟีเจอร์ครบแล้ว<br />
          ยอดรวมตั้งแต่เริ่มจนจบจะต้องเป็น 0 บาท (ต้องเป็น 0.00 บาทเท่านั้น ถึงเเจ้งรับโบนัสได้) รับทุนการซื้อฟีเจอร์คืนทันที<br />
        </>
      ),
      conditions: [
        <span>เงื่อนไขโปรโมชั่น</span>,
        "โปรโมชั่นสำหรับค่ายเกมส์ PG พ็อกเก็ตเกมส์ และ ค่าย Pragmatic Play (2 ค่ายเกมส์นี้เท่านั้น)",

        "รอบการหมุนฟรีสปิน ต้อง 10 รอบขึ้นไป ถึงจะสามารถรับได้ค่ะ",

        "ต้องเข้าสัญลักษณ์ Scatter ที่ไม่มีการจ่ายยอดให้ และฟรีสปินเท่านั้น",

        "สัญลักษณ์ Scatter ที่ได้จากการไหลของเกมส์จะไม่สามารถรับได้ค่ะ เนื่องจากจะมียอดที่ได้รับก่อนเข้าฟรีค่ะ",

        "ยูสเซอร์ 1 ยูส สามารถแจ้งรับได้ 1 ครั้งต่อวัน",

        "เพื่อความรวดเร็ว รบกวนลูกค้าแคปประวัติการเล่น หรือแจ้งช่วงเวลาและเบทที่เดิมพันมานะคะ",

        "﻿- แจ้งรับโบนัสทางไลน์นะคะ",

        "โปรสล๊อตทั้งหมดไม่สามารถนำบิลที่ได้รับไปแล้วมาแจ้งรับซ้ำในอีกโปรได้นะคะ",

        "-โปรโมชั่นประเภทเกมส์เลือกรับได้ 1 โปรโมชั่น ต่อ วัน เท่านั้น",

        "**แจ้งรับภายใน 24 ชั่วโมง(การนับบิลเริ่มเวลา 11.00 น. ถึง 11.00 น. ของอีกวันตามหน้ารายงานค่ะ)",
        <span>ตัวอย่าง</span>,
        "ลูกค้าเล่นสล็อตค่าย PG พ็อกเก็ตเกมส์ เบ็ท 2 บาท แล้วซื้อฟีเจอร์ 150 บาท",

        "หลังจากจบการหมุนฟีเจอร์ครบแล้วยอดรวมเป็น 0 บาท รับโบนัสคืนทุนทันที 150 บาท",

        "(หากชื่อซ้ำ หรือ IP ซ้ำกันทางเว็บจะตัดสิทธิ์ในการรับโบนัสทันที)",

        "ทางเว็บ ขอสงวนสิทธิ์ในการตัดสินใจเพียงผู้เดียว หากมีสิ่งที่นอกเหนือจากนี้ คำตัดสินของทางเว็บจะถือเป็นข้อสิ้นสุดค่ะ",

        "**สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่",
        <span> Call Center Line ID : @lsm99ai ตลอด 24 ชั่วโมง</span>,
      ]
    },
    {
      title: (
        <>
          <span>รายละเอียดโปรโมชั่น</span><br />
          ถูก หรือ ผิด ติดต่อกัน 10 ตา รับ 1,000 บาท<br />

          (ยอดเดิมพันต่อบิล 5 - 99 บาท)<br />

          <span>เงื่อนไขโปรโมชั่น</span><br />

          1.ถ้าถูก ต้องถูกติดกันทั้งหมด 10 ตา หรือ ถ้าผิด ก็ต้องผิดติดกันทั้งหมด 10 ตา(จะนำถูกกับผิดมารวมกันไม่ได้นะคะ)<br />

          2.บาคาร่า/เสือมังกร สามารถวางเดิมพันได้ทุกอย่าง (ยกเว้นการเดิมพันทั้ง 2 ฝั่ง จะถือเป็นโมฆะ เริ่มนับใหม่)<br />

          3.การจ่ายโบนัส คิดจากการเดิมพันเฉพาะ Banker/Player และ Dragon/Tiger ที่ถูกหรือผิดติดต่อกันเท่านั้นค่ะ<br />

          4.หากผลเดิมพันออกเสมอจะเริ่มนับ 1 ใหม่<br />

          5.ค่ายที่สามารถรับได้<br />

          ALLBET / SA / WM / SEXY / DG / PRETTY / XG / Cherry / EBET<br />

          ยกเว้น บาคาร่า ประกันภัย และ Blockchain Baccarat<br />

          6.โปรโมชั่นประเภทคาสิโนเลือกรับได้ 1 โปรโมชั่น ต่อ วัน เท่านั้น<br />

          7.แจ้งรับได้ภายใน 24 ชั่วโมง (โดยยึดวันที่ วันต่อวัน ตามรอบบิลในหน้ารายงานของทางเว็บนะคะ)<br />

          (การนับบิลเริ่มเวลา 11.00 น. ถึง 11.00 น. ของอีกวันตามหน้ารายงานค่ะ)<br />

          8.หากมีการซอยบิลมาในตาเดียวกัน จะนับเป็น 1 ตานะคะ<br />

          9.การเดิมพันทั้งหมดต้องเป็นการเดิมพันจากคาสิโนค่ายเดียวกันเท่านั้น<br />
        </>
      ),
      conditions: [
        <span>ตัวอย่าง</span>,
        "หากลูกค้าเดิมพันใน 10 ตา และชนะติดต่อกัน ",
        "เช่น เดิมพัน Player 20 บาท หากเข้าตามเงื่อนไข",
        "ยอดโบนัสที่ลูกค้าจะได้รับคือ 1,000 บาท",
        "1 ยูสเซอร์สามารถแจ้งรับได้ 1 ครั้งต่อวัน แจ้งรับโบนัสภายใน 24 ชั่วโมง (โดยยึดวันที่ วันต่อวัน ตามรอบบิลในประวัติการแทงนะคะ)",
        "-หากมีการซอยบิลมาในตาเดียวกัน จะนับเป็น 1 ตานะคะ",
        <span>หมายเตุ บิลที่แจ้งรับโปรโมชั่นอิงตามเวลาที่คิดผลเท่านั้น</span>,
        "**ทางเว็บ ขอสงวนสิทธิ์ในการตัดสินใจเพียงผู้เดียว หากมีสิ่งที่นอกเหนือจากนี้ คำตัดสินของทางเว็บจะถือเป็นข้อสิ้นสุดค่ะ",
        "**สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่",
        <span> Call Center Line ID : @lsm99ai ตลอด 24 ชั่วโมง</span>,
      ]
    },
    {
      title: (
        <>
          เลขท้ายบิลหวย ลุ้นโชค (โปรโมชั่นวันหวยออก)<br />

          รหัสอ้างอิง ที่แจ้งรับไม่ใช่เบอร์โทร ต้องเป็นรหัสอ้างอิงที่อยู่หน้าแทงหวยเท่านั้นนะคะ<br />

          <span>ตัวอย่างเช่น</span><br />

          Xbgc1671122334455 รหัสอ้างอิง 3 ตัวท้าย ตรงกับ 3 ตัวรางวัลที่ 1 คือ 455 ค่ะ<br />

          รหัสอ้างอิง 3 ตัวท้าย<br />

          ตรงกับ 3 ตัวรางวัลที่ 1 รับทันที 1,000 บาท<br />

          รหัสอ้างอิง 2 ตัวท้าย<br />

          ตรงกับ 2 ตัวล่าง รับทันที 500 บาท<br />

          เลขที่บิลหวย 3 ตัวท้าย<br />

          ตรงกับ 3 ตัวรางวัลที่ 1 รับทันที 2,000 บาท<br />

          เลขที่บิลหวย 2 ตัวท้าย<br />

          ตรงกับ 2 ตัวล่าง รับทันที 999 บาท<br />

          เลขท้ายบิลกีฬา 3 ตัวท้าย<br />

          ตรงกับ 3 ตัวรางวัลที่ 1 รับทันที 1,000 บาท<br />

          เลขท้ายบิลกีฬา 2 ตัวท้าย<br />

          ตรงกับ 2 ตัวล่าง  รับทันที 499 บาท<br />

          (บิลกีฬา ต้องเป็นบิลที่มีการแทงในวันหวยออกและต้องแทงก่อนเวลาหวยออกเท่านั้นถึงแจ้งรับโบนัสได้)<br />
        </>
      ),
      conditions: [
        <span>เงื่อนไข</span>,
        "สมาชิกต้องมีการเล่นต่อเนื่องภายใน 15 วัน",

        "บิลการเล่นขั้นต่ำ 50 บาทขึ้นไป",

        "บิลกีฬา ต้องเป็นบิลที่มีการแทงในวันหวยออกและต้องแทงก่อนเวลาหวยออกเท่านั้น",

        "เเจ้งรับภายในวันหวยออกเท่านั้นนะคะ",

        "-โปรโมชั่นประเภทหวยเลือกรับได้ 1 โปรโมชั่น ต่อ วัน เท่านั้น",

        "หมายเหตุ หากมีการเดิมพันที่ผิดปกติ เพื่อล่าโบนัสทางเว็บจะตัดสิทธิ์ทันที",
        "**ทางเว็บ ขอสงวนสิทธิ์ในการตัดสินใจเพียงผู้เดียว หากมีสิ่งที่นอกเหนือจากนี้ คำตัดสินของทางเว็บจะถือเป็นข้อสิ้นสุดค่ะ",
        "**สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่",
        <span> Call Center Line ID : @lsm99ai ตลอด 24 ชั่วโมง</span>,
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
                <h1 className="start-text-mb" >“การเดิมพันออนไลน์ที่ทันสมัยที่สุดกับ”</h1>
                <div className="img-start-logo">
                  <img src={logostart} alt="logo" />
                </div>
                <h1 className="start-text-pc" >“การเดิมพันออนไลน์ที่ทันสมัยที่สุดกับ”</h1>
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
