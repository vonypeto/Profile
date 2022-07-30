import React, { useState } from "react";
import { Col, Row, Button, Form, Input } from "antd";
import { Parallax } from "rc-scroll-anim";
import { Tag } from "antd";
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";
import MailImage from "../../asset/images/mailz.d13d5e32.jpeg";
import Typical from "react-typical";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import emailjs from "emailjs-com";
import Project from "./project";

const { TabPane } = Tabs;
const Info = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    NotificationManager.info("Sending Message....", "Sending", 1500);
    emailjs
      .sendForm(
        "service_74wdx7s",
        "template_30nodm8",
        e.target,
        "user_7ZKHaVtOpvgkpPjiGBT9L"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          NotificationManager.success(
            "Message Sent Successful",
            "Success",
            2000
          );
        },
        function (err) {
          NotificationManager.error("Message Sent Error", "Error", 3000);

          console.log("FAILED...", err);
        }
      );
    console.log(e.target);
  };
  return (
    <>
      <NotificationContainer />

      <Parallax
        animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
        style={{ transform: "translateY(0)", opacity: 0 }}
      >
        {" "}
        <div id="about" className="container-about">
          <div className=" w-100">
            <div className="text-center text-black"></div>
          </div>{" "}
          <div className="heading-container">
            <div className="screen-heading">
              <span>
                <b>About Me</b>
              </span>
            </div>
            <div className="screen-sub-heading">
              <span>Why Choose Me?</span>
            </div>
            <div className="heading-seperator">
              <div className="seperator-line"></div>
              <div className="seperator-blob">
                <div></div>
              </div>
            </div>
          </div>
          <Row style={{ height: "600px" }} justify="center">
            <Col
              justify="center"
              className="text-center"
              xs={20}
              sm={14}
              md={14}
              lg={14}
              xl={14}
            >
              {" "}
              {/* <h1 className="text-center text-black font-size-about">
            <b>About Me</b>
          </h1>{" "}
          <p>Why Choose me?</p> */}
              {/* <Divider /> */}
              <div className="profile-container ">
                <Row>
                  <Col
                    style={{ height: "600px" }}
                    xs={0}
                    sm={0}
                    md={0}
                    lg={0}
                    xl={12}
                  >
                    <div className="about-me-profile"></div>
                  </Col>{" "}
                  <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <div className="about-me-details">
                      {" "}
                      <span className="about-me-description">
                        Full stack web and mobile developer with background
                        knowledge of MERN stacks with redux and context api,
                        also do bug bounty on free time mostly for security
                        purposes. New to the Industry and I am willing to be an
                        asset for an organization.
                      </span>
                      <div className="about-me-highlights">
                        <div className="highlight-heading">
                          <span>Here are a Few Highlights:</span>
                        </div>
                        <div className="highlight">
                          <div className="highlight-blob"></div>
                          <span>Full Stack web development</span>
                        </div>
                        <div className="highlight">
                          <div className="highlight-blob"></div>
                          <span>Average Front End designer</span>
                        </div>
                        <div className="highlight">
                          <div className="highlight-blob"></div>
                          <span>React & Laravel</span>
                        </div>
                        <div className="highlight">
                          <div className="highlight-blob"></div>
                          <span>Redux & Context for State Mnanagement</span>
                        </div>
                        <div className="highlight">
                          <div className="highlight-blob"></div>
                          <span>Building REST API</span>
                        </div>
                        <div className="highlight">
                          <div className="highlight-blob"></div>
                          <span>Managing database</span>
                        </div>
                      </div>{" "}
                      <div className="about-languages">
                        <div className="highlight-heading">
                          <span>Langauge & Services that I Learned:</span>
                        </div>{" "}
                        <div className="skills">
                          {" "}
                          <Tag icon={<FaReact />} color="#282C34">
                            React
                          </Tag>
                          <Tag icon={<SiFirebase />} color="#0396DF">
                            Firebase
                          </Tag>
                          <Tag icon={<FaLaravel />} color="#cd201f">
                            Laravel
                          </Tag>
                          <Tag icon={<FaNodeJs />} color="#026E00">
                            NodeJS
                          </Tag>
                          <Tag icon={<SiExpress />} color="#259DFF">
                            Express
                          </Tag>{" "}
                          <Tag icon={<SiMongodb />} color="#418B21">
                            MongoDB
                          </Tag>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col
                    justify="center"
                    className="text-center"
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                  >
                    {" "}
                    <div className="mt-5 heading-container">
                      <div className="screen-heading">
                        <span>
                          <b>Resume</b>
                        </span>
                      </div>
                      <div className="screen-sub-heading">
                        <span>My Biography Life</span>
                      </div>
                      <div className="heading-seperator">
                        <div className="seperator-line"></div>
                        <div className="seperator-blob">
                          <div></div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="resume-container">
                      <div className="nav-color"> </div>
                      <Tabs
                        tabPosition="left"
                        className=""
                        defaultActiveKey="1"
                        centered
                      >
                        <TabPane
                          tab={
                            <span>
                              <FacebookOutlined />
                              Education
                            </span>
                          }
                          key="1"
                        >
                          <div className="mt-2 resume-screen-container">
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">
                                  University of Rizal, Morong
                                </span>
                                <div className="heading-date">2014-2018</div>
                              </div>
                              <div className="resume-sub-heading ">
                                <span>
                                  <b> BACHELOR OF COMPUTER ENGINEERING</b>
                                </span>
                              </div>
                            </div>
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">
                                  Senior High School
                                </span>
                                <div className="heading-date">2019-2020</div>
                              </div>
                              <div className="resume-sub-heading ">
                                {" "}
                                <span>
                                  <b> TOMAS CLAUDIO COLLEGES</b>
                                </span>
                              </div>
                            </div>
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">
                                  Junior High School
                                </span>
                                <div className="heading-date">2007-2012</div>
                              </div>
                              <div className="resume-sub-heading ">
                                <span>
                                  <b> San Guillermo National High School </b>
                                </span>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane
                          tab={
                            <span>
                              <FaLaravel className="anticon" />
                              Work
                            </span>
                          }
                          key="2"
                        >
                          <div className="mt-2 resume-screen-container ">
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">TBA</span>
                                <div className="heading-date">TBA</div>
                              </div>
                              <div className="text-left resume-sub-heading">
                                <span>TBA</span>
                              </div>
                              <div className="resume-heading-description">
                                <span> TBA</span>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane
                          tab={
                            <span>
                              <FaLaravel className="anticon" />
                              Skills
                            </span>
                          }
                          key="3"
                        >
                          <div className="text-left resume-screen-container programming-skills-container">
                            <div className="skill-parent">
                              <div className="heading-bullet"></div>
                              <b>
                                {" "}
                                <span
                                  style={{ margin: "0 30px", fontSize: "14px" }}
                                >
                                  JavaScript
                                </span>{" "}
                              </b>
                              <div className="skill-percentage">
                                <div
                                  className="active-percentage-bar"
                                  style={{ width: "85%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="skill-parent">
                              <div className="heading-bullet"></div>
                              <b>
                                {" "}
                                <span
                                  style={{ margin: "0 30px", fontSize: "14px" }}
                                >
                                  Firebase
                                </span>{" "}
                              </b>
                              <div className="skill-percentage">
                                <div
                                  className="active-percentage-bar"
                                  style={{ width: "53%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="skill-parent">
                              <div className="heading-bullet"></div>
                              <b>
                                {" "}
                                <span
                                  style={{ margin: "0 30px", fontSize: "14px" }}
                                >
                                  MongoDb
                                </span>{" "}
                              </b>
                              <div className="skill-percentage">
                                <div
                                  className="active-percentage-bar"
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="skill-parent">
                              <div className="heading-bullet"></div>
                              <b>
                                {" "}
                                <span
                                  style={{ margin: "0 30px", fontSize: "14px" }}
                                >
                                  React JS
                                </span>{" "}
                              </b>
                              <div className="skill-percentage">
                                <div
                                  className="active-percentage-bar"
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                            </div>{" "}
                            <div className="skill-parent">
                              <div className="heading-bullet"></div>
                              <b>
                                {" "}
                                <b>
                                  {" "}
                                  <b>
                                    {" "}
                                    <span
                                      style={{
                                        margin: "0 30px",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Node JS
                                    </span>{" "}
                                  </b>
                                </b>
                              </b>
                              <div className="skill-percentage">
                                <div
                                  className="active-percentage-bar"
                                  style={{ width: "78%" }}
                                ></div>
                              </div>
                            </div>{" "}
                            <div className="skill-parent">
                              <div className="heading-bullet"></div>
                              <b>
                                {" "}
                                <span
                                  style={{ margin: "0 30px", fontSize: "14px" }}
                                >
                                  React Native
                                </span>{" "}
                              </b>
                              <div className="skill-percentage">
                                <div
                                  className="active-percentage-bar"
                                  style={{ width: "50%" }}
                                ></div>
                              </div>
                            </div>{" "}
                          </div>{" "}
                        </TabPane>
                        <TabPane
                          tab={
                            <span>
                              <YoutubeOutlined />
                              Project
                            </span>
                          }
                          key="4"
                        >
                          <div className="mt-2 resume-screen-container">
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">
                                  Personal Portfolio Website
                                </span>
                                <div className="heading-date">2021-2022</div>
                              </div>
                              <div className="resume-sub-heading ">
                                <span>
                                  <b>
                                    Technologies Used: React JS, Ant Design,
                                    Bootstrap
                                  </b>
                                </span>
                              </div>
                              <div className="resume-heading-description">
                                <span>
                                  A Personal Portfolio website to showcase all
                                  my details and projects at one place.
                                </span>
                              </div>
                            </div>
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">
                                  MitiveLane | Integrated Online Management Data
                                </span>
                                <div className="heading-date">2021-Present</div>
                              </div>
                              <div className="resume-sub-heading ">
                                {" "}
                                <span>
                                  <b>
                                    {" "}
                                    Techonologies Used: Mongodb, React JS,
                                    Firebase, Ant Design, Bootstrap
                                  </b>
                                </span>
                              </div>
                              <div className="resume-heading-description">
                                <span>
                                  MativeLane is a customer data platform (CDP)
                                  that helps you manage, provide, collect, and
                                  list group of data within your allocated area.
                                </span>
                              </div>
                            </div>{" "}
                            <div className="resume-heading">
                              <div className="resume-main-heading">
                                <div className="heading-bullet"></div>
                                <span className="heading-name">
                                  GenBioScope | Online Modular App
                                </span>
                                <div className="heading-date">2021-Present</div>
                              </div>
                              <div className="resume-sub-heading ">
                                {" "}
                                <span>
                                  <b>
                                    {" "}
                                    Techonologies Used: Mongodb, React JS,
                                    Firebase, Ant Design, Bootstrap
                                  </b>
                                </span>
                              </div>
                              <div className="resume-heading-description">
                                <span>
                                  GenBioScope purpose is a project based Web
                                  Application alternative for learning Biology
                                  lesson with Modular Support
                                </span>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
              </div>{" "}
              <div className="heading-container">
                <div className="screen-heading">
                  <span>
                    <b>My Project</b>
                  </span>
                </div>
                <div className="screen-sub-heading">
                  <span>My Project History</span>
                </div>
                <div className="heading-seperator">
                  <div className="seperator-line"></div>
                  <div className="seperator-blob">
                    <div></div>
                  </div>
                </div>
              </div>{" "}
              <Row>
                <Col justify="center" xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Project />
                </Col>{" "}
                <Col justify="center" xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Project />
                </Col>{" "}
                <Col justify="center" xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Project />
                </Col>{" "}
              </Row>
              <div className="heading-container">
                <div className="screen-heading">
                  <span>
                    <b>Contact Me</b>
                  </span>
                </div>
                <div className="screen-sub-heading">
                  <span>Let's Keep In Touch</span>
                </div>
                <div className="heading-seperator">
                  <div className="seperator-line"></div>
                  <div className="seperator-blob">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="central-form">
                <div className="col">
                  <h2 className="title">
                    <b>
                      <Typical
                        className="text-left typically"
                        steps={["Get In Touch ", 1000]}
                        loop={Infinity}
                      />
                    </b>
                  </h2>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{" "}
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>{" "}
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </div>

                <div className="text-left back-form">
                  <div className="img-back">
                    <h4>Send Your Email Here!</h4>
                    <img src={MailImage} alt="image not found" />
                  </div>

                  <form onSubmit={handleSubmit}>
                    <p></p> <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                      required
                      type="text"
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="send-btn">
                      <Button
                        htmlType="submit"
                        type="submit rounded"
                        style={{ width: "100px" }}
                      >
                        send<i className="fa fa-paper-plane "></i>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Parallax>
    </>
  );
};

export default Info;
