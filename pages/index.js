import Head from "next/head";
import styled from "styled-components";
import ParticleBackground from "../components/ParticleBackground";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Hero = styled.div`
  display: block;
  text-align: center;
  background: #000;
  /* padding-top: 100px; */
  padding-bottom: 50px;
`;

const PreHead = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1px;
  margin-top: -300px;
`;
const Heading = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 30px;
`;
const PostHead = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 150px;
`;

const AboutMe = styled.div`
  background-color: #000;
  display: block;
  padding-bottom: 50px;
`;

const AbCont = styled.div`
  max-width: 1140px;
  height: 380px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
  background: #111;
`;

const LeftSection = styled.div`
  padding: 30px;
  margin: 0 75px 0 50px;
`;

const Img = styled.div`
  padding: 25px;
  margin-left: 50px;
`;

const ContTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  line-height: 1.2;
`;

const Info = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 30px;
`;

const Line = styled.div`
  border-top: 6px solid #4361ee;
  width: 40px;
  border-radius: 5px;
`;

const Skills = styled.div`
  display: flex;
  background-color: #000;
  color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SkillsTitle = styled.h1`
  text-align: center;
  margin: 0px;
  padding-top: 50px;
  padding-bottom: 25px;
`;
const Arrow = styled.div`
  padding: 25px;
`;

const GridCont = styled.div`
  max-width: 1140px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 25px 250px;
  grid-template-areas:
    "HtmlT JavascriptT CssT"
    "Nodejs Wordpress React";
`;
const HtmlT = styled.h2`
  grid-area: HtmlT;
`;

const JavascriptT = styled.h2`
  grid-area: JavascriptT;
`;

const CssT = styled.h2`
  grid-area: CssT;
`;
const Wordpress = styled.h2`
  grid-area: Wordpress;
`;
const Nodejs = styled.h2`
  grid-area: Nodejs;
`;
const React = styled.h2`
  grid-area: React;
`;

export default function Home() {
  return (
    <>
      <Head id="home">
        <title>George Albu | Front End Developer</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Hero id="about">
        <ParticleBackground></ParticleBackground>
        <PreHead>Hi There, I'm</PreHead>
        <Heading>George Albu</Heading>
        <PostHead>Front End Developer</PostHead>
      </Hero>
      <AboutMe>
        <AbCont>
          <Img>
            <Image
              src={"/Avatar.png"}
              alt="Picture of the author"
              width={400}
              height={400}
              priority
            />
          </Img>
          <LeftSection>
            <ContTitle>
              Self-taught Front End Developer, <br />
              School-taught Systems Engineer
            </ContTitle>
            <Line></Line>
            <Info>
              I'm helping companies deliver beautiful, intuitive online
              experiences through solid research, thoughtful design and
              accessile code.
            </Info>
            <a href="https://www.linkedin.com/in/georgealbu24/">
              <FaLinkedin
                size={28}
                style={{
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 10,
                  marginRight: 10,
                }}
              />
            </a>
            <a href="https://github.com/AlbuGeorge">
              <FaGithub size={28} style={{ margin: 10 }} />
            </a>
          </LeftSection>
        </AbCont>
      </AboutMe>
      <Skills>
        <SkillsTitle>My Skills</SkillsTitle>
        <FaArrowDown
          size={28}
          style={{ justifyContent: "center", color: "#4361ee" }}
        ></FaArrowDown>
        <Arrow></Arrow>
        <GridCont>
          <HtmlT>
            <ul style={{ color: "#fff" }}>
              <li>HTML</li>
            </ul>
          </HtmlT>
          <JavascriptT>
            <ul style={{ color: "#fff" }}>
              <li>JavaScript</li>
            </ul>
          </JavascriptT>
          <CssT>
            <ul style={{ color: "#fff" }}>
              <li>CSS</li>
            </ul>
          </CssT>
          <Wordpress>
            <ul style={{ color: "#fff" }}>
              <li>Wordpress</li>
            </ul>
          </Wordpress>
          <Nodejs>
            <ul style={{ color: "#fff" }}>
              <li>Node.js</li>
            </ul>
          </Nodejs>
          <React>
            <ul style={{ color: "#fff" }}>
              <li>React</li>
            </ul>
          </React>
        </GridCont>
      </Skills>
    </>
  );
}
