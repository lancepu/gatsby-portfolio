import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Row, Col } from "antd";
import profilePic from "../images/lancepu_profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faCalculator } from "@fortawesome/free-solid-svg-icons";
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
  faJava
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
        <h3>Tools</h3>
        <Row type="flex"
          justify="center"
          style={{ margin: "20px 0", fontSize: "15px" }}
        >
          <a href="/tipcalc">
          <Col span={24} className="toolsShortcut">
            <Proficiency
              percent={100}
              description="Tip Calculator"
              format={<FontAwesomeIcon className="faIcon" icon={faCalculator} />}
            />
          </Col>
          </a>
        </Row>
        <h3>Proficiencies</h3>
        <Row type="flex" justify="center" style={{ margin: "10px 0" }}>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={50}
              description="Java"
              format={<FontAwesomeIcon className="faIcon" icon={faJava} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={60}
              description="ReactJS"
              format={<FontAwesomeIcon className="faIcon" icon={faReact} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={60}
              description="NodeJS"
              format={<FontAwesomeIcon className="faIcon" icon={faNodeJs} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={60}
              description="MySQL / MongoDB"
              format={<FontAwesomeIcon className="faIcon" icon={faDatabase} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={60}
              description="Javascript"
              format={<FontAwesomeIcon className="faIcon" icon={faJs} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={50}
              description="HTML"
              format={<FontAwesomeIcon className="faIcon" icon={faHtml5} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={40}
              description="CSS"
              format={<FontAwesomeIcon className="faIcon" icon={faCss3} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={50}
              description="Python"
              format={<FontAwesomeIcon className="faIcon" icon={faPython} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={50}
              description="AWS"
              format={<FontAwesomeIcon className="faIcon" icon={faAws} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={40}
              description="GCP"
              format={<FontAwesomeIcon className="faIcon" icon={faGoogle} />}
            />
          </Col>
          <Col span={6} className="proficiency">
            <Proficiency
              percent={20}
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
