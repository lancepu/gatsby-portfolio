import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Row, Col, Progress } from "antd";
import profilePic from "../images/lancepu_profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3,
  faPython,
  faAws,
  faGoogle,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import Proficiency from "../components/proficiency";

const Index = () => {
  return (
    <React.Fragment>
      <SEO />
      <Layout>
        <h2>Hello There</h2>
        <a href="/about">
          <img className="avatar" src={profilePic} alt="Lance Pu" />
        </a>
        <Row
          type="flex"
          justify="center"
          style={{ margin: "20px 0", fontSize: "20px" }}
        >
          <Col span={24}>Welcome to my</Col>
          <Col span={8}>
            <a href="/project">portfolio</a>
          </Col>
          <Col span={8}>
            <a href="/blog">blog</a>
          </Col>
          <Col span={8}>
            <a href="/tool">utility belt</a>
          </Col>
        </Row>
        {/* <p style={{ fontSize: "20px" }}>
          Welcome to my <a href="/project">portfolio</a> /{" "}
          <a href="/blog">blog</a> / <a href="/tool">utility belt</a>
        </p> */}
        <h3>Proficiencies</h3>
        <Row type="flex" justify="center" style={{ margin: "10px 0" }}>
          <Col span={6}>
            <Proficiency
              percent={60}
              description="ReactJS"
              format={<FontAwesomeIcon className="faIcon" icon={faReact} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={60}
              description="NodeJS"
              format={<FontAwesomeIcon className="faIcon" icon={faNodeJs} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={60}
              description="MySQL / MongoDB"
              format={<FontAwesomeIcon className="faIcon" icon={faDatabase} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={60}
              description="Javascript"
              format={<FontAwesomeIcon className="faIcon" icon={faJs} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={50}
              description="HTML"
              format={<FontAwesomeIcon className="faIcon" icon={faHtml5} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={40}
              description="CSS"
              format={<FontAwesomeIcon className="faIcon" icon={faCss3} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={40}
              description="Python"
              format={<FontAwesomeIcon className="faIcon" icon={faPython} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={30}
              description="AWS"
              format={<FontAwesomeIcon className="faIcon" icon={faAws} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={40}
              description="GCP"
              format={<FontAwesomeIcon className="faIcon" icon={faGoogle} />}
            />
          </Col>
          <Col span={6}>
            <Proficiency
              percent={10}
              description="Docker"
              format={<FontAwesomeIcon className="faIcon" icon={faDocker} />}
            />
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  );
};

export default Index;
