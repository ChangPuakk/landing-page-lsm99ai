import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../assets/Style/home.css";

import frame from "../assets/Images/Frame.png";
import banner from "../assets/Images/banner.png";

import casino1 from "../assets/Images/promotion/casino1.png";
import casino2 from "../assets/Images/promotion/casino2.png";
import lotto1 from "../assets/Images/promotion/lotto1.png";
import slot1 from "../assets/Images/promotion/slot1.png";
import slot2 from "../assets/Images/promotion/slot2.png";
import sport1 from "../assets/Images/promotion/sport1.png";
import sport2 from "../assets/Images/promotion/sport2.png";

import categoryTitle from "../assets/Images/category-game-title.png";
import allGames from "../assets/Images/category-allgame.png";
import slot from "../assets/Images/category-slot.png";
import sport from "../assets/Images/category-sport.png";
import casino from "../assets/Images/category-casino.png";
import lotto from "../assets/Images/category-lotto.png";

import hotGame from "../assets/Images/hot-game.png";

import dg from "../assets/Images/game-camp/dg.png";
import sexy from "../assets/Images/game-camp/sb.png";
import pp from "../assets/Images/game-camp/pp.png";
import km from "../assets/Images/game-camp/km.png";
import pg from "../assets/Images/game-camp/pg.png";
import sa from "../assets/Images/game-camp/sa.png";
import sportBreak from "../assets/Images/game-camp/sport-break.png";
import sportLsm from "../assets/Images/game-camp/sport-lsm.png";
import sportSbo from "../assets/Images/game-camp/sport-sbo.png";


import marqueeClose from "../assets/Images/marquee-btn-close.png";
import mbBtnLine from "../assets/Images/mb-btn-line.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99ai.com/login");
  return (
    <>
      <Header />
      <div className="home">
        <div className="bg">
          <Container className="mt-5">
            <Row>
              <div className="mb marquee">
                <div className="marquee--border">
                  <marquee>
                    เมื่ออยากหาอะไรสนุกเล่นแก้เบื่อ ให้นึกถึงเรา TEMMAX168
                    เว็บพนันออนไลน์ที่มีทั้งเกมส์ กีฬา คาสิโน หวย
                    พร้อมด้วยโปรโมชั่นที่รองรับการเล่นของสมาชิกทุกชนิด
                    บริการรวดเร็วทันใจด้วยระบบ Auto แอดมินบริการ 24 ชม.
                    ติดปัญหาส่วนไหนเเจ้งแอดมินได้ตลอดเลยนะคะ
                  </marquee>
                  <img
                    className="marquee--close"
                    src={marqueeClose}
                    alt="TEMMAX Title"
                  />
                </div>
              </div>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <div className="slide-section">
                  <Splide
                    className="slide"
                    options={{
                      rewind: false,
                      gap: "10px",
                      type: "loop",
                      autoplay: true,
                      arrows: false,
                    }}
                  >
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={casino1}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={casino2}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={lotto1}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={slot1}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={slot2}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={sport1}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                    <SplideSlide>
                      <a href={linkLogin}>
                        <img
                          src={sport2}
                          alt="temmax168"
                          className="slide--banner--img"
                        />
                      </a>
                    </SplideSlide>
                  </Splide>
                  <img src={frame} alt="temmax" className="slide--frame" />
                </div>
              </Col>
              <Col md={6} xs={12} className="all--games--section">
                <Row>
                  <Col xs={12} className="text-center">
                    <img
                      src={categoryTitle}
                      alt="หมวดหมู่เกมส์"
                      className="h-24"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={12}
                    className="text-center cate--game cate--allgames"
                  >
                    <a href={linkLogin}>
                      <img src={allGames} alt="เกมส์ทั้งหมด" />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={6}
                    className="text-center cate--game--sub cate--game--sub--left cate--slot"
                  >
                    <a href={linkLogin}>
                      <img src={slot} alt="สล็อต" />
                    </a>
                  </Col>
                  <Col
                    xs={6}
                    className="text-center cate--game--sub cate--game--sub--right cate--sport"
                  >
                    <a href={linkLogin}>
                      <img src={sport} alt="กีฬา" />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={6}
                    className="text-center cate--game--sub cate--game--sub--left cate--casino"
                  >
                    <a href={linkLogin}>
                      <img src={casino} alt="คาสิโน" />
                    </a>
                  </Col>
                  <Col
                    xs={6}
                    className="text-center cate--game--sub cate--game--sub--right cate--lotto"
                  >
                    <a href={linkLogin}>
                      <img src={lotto} alt="หวย" />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="text-center">
                <img
                  src={hotGame}
                  alt="ค่ายเกมยอดนิยม"
                  className="h-24 hot--game"
                />
              </Col>
            </Row>
            <Row className="text-center">
              <Col xs={12} className="hot--game--img">
                <a href={linkLogin}>
                  <img
                    src={pg}
                    alt="ค่ายเกมยอดนิยม pg"
                    className="hot--game--img--mb"
                  />
                </a>
                <a href={linkLogin}>
                  <img
                    src={pp}
                    alt="ค่ายเกมยอดนิยม pp"
                    className="hot--game--img--mb"
                  />
                </a>
                <a href={linkLogin}>
                  <img
                    src={km}
                    alt="ค่ายเกมยอดนิยม km"
                    className="hot--game--img--mb"
                  />
                </a>

                <a href={linkLogin}>
                  <img
                    src={sexy}
                    alt="ค่ายเกมยอดนิยม sexy"
                    className="hot--game--img--pc"
                  />
                </a>
                <a href={linkLogin}>
                  <img
                    src={dg}
                    alt="ค่ายเกมยอดนิยม dg"
                    className="hot--game--img--pc"
                  />
                </a>
                <a href={linkLogin}>
                  <img
                    src={sa}
                    alt="ค่ายเกมยอดนิยม sa"
                    className="hot--game--img--pc"
                  />
                </a>

                <a href={linkLogin}>
                  <img
                    src={sportLsm}
                    alt="ค่ายเกมยอดนิยม sportLsm"
                    className="hot--game--img--pc"
                  />
                </a>
                <a href={linkLogin}>
                  <img
                    src={sportSbo}
                    alt="ค่ายเกมยอดนิยม sportSbo"
                    className="hot--game--img--pc"
                  />
                </a>
                <a href={linkLogin}>
                  <img
                    src={sportBreak}
                    alt="ค่ายเกมยอดนิยม sportBreak"
                    className="hot--game--img--pc"
                  />
                </a>
              </Col>
            </Row>

            <Row>
              <div className="mb mb-btn-line">
                <a href="https://line.me/R/ti/p/@643ievtr" target="_blank">
                  <img
                    src={mbBtnLine}
                    alt="contact line"
                    className="mb-btn-line-img"
                  />
                </a>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
