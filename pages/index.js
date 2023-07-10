import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import Lottie from "lottie-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Home.module.css";
import developerAnimation from "../public/animations/developer.json";

const customStyles = (width) => {
  return {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width,
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      position: "fixed",
      zIndex: 1020,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
};

const wid_break = 800;

const pageData = {
  email: "rairishav221@gmail.com",
  linkedIn: "https://www.linkedin.com/in/rishav-raj-2639341a5/",
};

// knowledge and skills data
const ksData = [
  {
    icon: "frontend_web",
    header: "Frontend Web Developer",
    description:
      "I love crafting captivating user experiences on the web and bringing designs to life with clean and efficient code.",
    l: [
      {
        key: "Technologies I specialize in",
        value: ["React JS", "Next JS", "Gatsby JS", "HTML / CSS"],
      },
      {
        key: "Styling",
        value: ["SASS", "CSS-in-JS"],
      },
      {
        key: "Tools",
        value: ["VS Code", "Git", "GitHub", "Browser Dev Tools", "Terminal"],
      },
    ],
  },
  {
    icon: "frontend_mobile",
    header: "Frontend Mobile Developer",
    description:
      "I enjoy building native-like intuitive and performant mobile applications that engage users and deliver seamless experiences.",
    l: [
      {
        key: "Technologies I work with",
        value: ["React Native", "Expo"],
      },
      {
        key: "UI Libraries",
        value: ["React Navigation", "Styled Components"],
      },
      {
        key: "Tools",
        value: [
          "Android Studio",
          "Xcode",
          "App Store Connect",
          "Google Play Console",
        ],
      },
    ],
  },
  {
    icon: "cloud",
    header: "Backend & Cloud Developer",
    description:
      "I'm passionate about developing robust backend systems and leveraging cloud technologies to create scalable and secure applications.",
    l: [
      {
        key: "Technologies I excel in",
        value: ["JavaScript", "Node.js", "Python", "Java"],
      },
      {
        key: "Databases",
        value: [
          "DynamoDB",
          "MongoDB",
          "PostgresSQL",
          "AWS Athena",
          "AWS Timestream",
        ],
      },
      {
        key: "Cloud Services",
        value: [
          "AWS EC2",
          "S3",
          "Lambda",
          "API Gateway",
          "Cognito",
          "Firebase",
          "Cloudinary",
          "and many more...",
        ],
      },
      {
        key: "Tools",
        value: ["Postman", "AWS Console"],
      },
    ],
  },
];

const projectsData = [
  {
    img: "roots",
    desc: "Robust web and mobile applications for supply chain management",
    href: "https://rootsagrifoodtech.com",
    target: "_blank",
  },
  {
    img: "eduvisory",
    desc: "Student consultation and counseling website for personalized support and academic guidance.",
    href: "",
    target: "_self",
  },
  {
    img: "eminent",
    desc: "Interior design experiences with an immersive website showcasing stunning portfolios.",
    href: "https://eminentmaster.gatsbyjs.io/",
    target: "_blank",
  },
  {
    img: "fastail",
    desc: "E-commerce through a mobile application that leverages reels to enhance product discovery and engagement.",
    href: "",
    target: "_self",
  },
  {
    img: "alfalgo",
    desc: "Strategy builder and backtesting website to optimize trading decisions based on historical market data.",
    href: "http://alfalgo.com/",
    target: "_blank",
  },
  {
    img: "digital_outcomes",
    desc: "Sentiment analysis website with speech-to-text capabilities real-time emotion recognition.",
    href: "https://www.digitaloutcomes.io/",
    target: "_blank",
  },
];

const testimonialData = [
  {
    img: "vinayak.png",
    text: "It has been an absolute joy working with Rishav. His proficiency in site building and attention to details are simply amazing. He regularly outperformed our expectations and provided great outcomes. I highly recommend Rishav for any project.",
    name: "Vinayak SK",
    designation: "Director, Roots",
  },
  {
    img: "venkat_sir.jpeg",
    text: "I am extremely impressed with Rishav's skills and professionalism. He was able to translate our vision into a stunning web application. His ability to problem-solve and provide creative solutions is truly commendable. I look forward to working with him again in the future.",
    name: "Venkatraman J",
    designation: "London, Good Kind",
  },
  {
    img: "ananth_fastail.jpeg",
    text: "Rishav's expertise in full-stack development is truly remarkable. His ability to seamlessly integrate front-end and back-end functionalities is commendable. It was a pleasure working with him, and I would gladly do so again in the future.",
    name: "Anantha P",
    designation: "Founder, Fastail",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const { width } = useWindowDimensions();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [iconHover, setIconHover] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rishav Raj - Portfolio</title>
        <meta name="description" content="Rishav Raj - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header id="home" className={styles.header}>
          <Link href="#" scroll={false}>
            <Image
              src="/images/logo.svg" // Route of the image file
              height={width > wid_break ? 55 : 30} // Desired size with correct aspect ratio
              width={width > wid_break ? 80 : 45} // Desired size with correct aspect ratio
              alt="Rishav Raj"
              className="pointer"
            />
          </Link>
          <div className={styles.headerBtns}>
            <Link href="#projects" scroll={false}>
              <div className={styles.headerBtn}>Projects</div>
            </Link>
            <a href={`mailto:${pageData.email}`} scroll={false}>
              <div className={styles.headerBtn2}>Contact Me</div>
            </a>
          </div>
        </header>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles(width > wid_break ? "60%" : "95%")}
          contentLabel="Example Modal"
        >
          <h1>modal</h1>
        </Modal>

        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            Full Stack Wizard Creating Innovative Web and Mobile Applications
          </div>
          <div className={styles.heroSubHeader}>I Love What I Do 😃.</div>
          <div className={styles.heroImage}>
            <Image
              src="/images/photo.png" // Route of the image file
              height={width > wid_break ? 235 : 170} // Desired size with correct aspect ratio
              width={width > wid_break ? 210 : 150} // Desired size with correct aspect ratio
              alt="Rishav Raj"
            />
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.devAnimation}>
            <Lottie animationData={developerAnimation} loop={true} />
          </div>

          <section id="my-bio" className={styles.bio}>
            <div className={styles.bioHeader}>
              Hi, I'm Rishav Raj. Nice to meet you.
            </div>
            <div className={styles.bioSubHeader}>
              With 2 years of experience, I'm a dedicated developer and lifelong
              learner. I've worked on diverse projects, collaborating with teams
              to build innovative web and mobile applications. Constantly
              expanding my skills, I strive to create seamless user experiences
              and solve complex coding challenges. Passionate about my craft,
              I'm always eager to take on new opportunities and grow as a
              developer.
            </div>
          </section>
        </section>

        <section className={styles.section4}>
          {ksData.map((d, i) => (
            <div
              key={i}
              className={styles.kns}
              style={{ borderLeft: `${i === 0 ? "0" : "1"}px solid #e6ecf8` }}
            >
              <div className={styles.knIcon}>
                <Image
                  src={`/icons/${d.icon}.svg`} // Route of the image file
                  height={width > wid_break ? 45 : 30} // Desired size with correct aspect ratio
                  width={width > wid_break ? 45 : 30} // Desired size with correct aspect ratio
                  alt={d.icon}
                />
              </div>
              <div className={styles.knsHeader}>{d.header}</div>
              <div className={styles.knsDesc}>{d.description}</div>
              {d.l.map((dl, j) => (
                <div key={j} className={styles.knsL}>
                  <div className={styles.knsLHeader}>{dl.key}</div>
                  {dl.value.map((dlv, k) => (
                    <div key={k} className={styles.dlvK}>
                      {dlv}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>

        <section id="projects" className={styles.section5}>
          <h1 className={styles.pjHeader}>My Recent Works</h1>
          <h2 className={styles.pjDesc}>
            Here are a few past design projects I've worked on. Want to see
            more?{" "}
            <a href={`mailto:${pageData.email}`} target="_blank">
              <span style={{ color: "blue" }} className="pointer">
                Email me
              </span>
            </a>
            .
          </h2>

          <div className={styles.projectGrid}>
            {projectsData.map((pd, i) => (
              <div key={i} className={styles.prContainer}>
                <Image
                  src={`/projects/${pd.img}.png`} // Route of the image file
                  layout="fill"
                  alt={"project"}
                />
                <div className={styles.prContent}>
                  <div className={styles.prContentText}>{pd.desc}</div>
                  <a
                    href={pd.href}
                    target={pd.target}
                    className={styles.prContentBtn}
                  >
                    Know More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={styles.section5}>
          <h1 className={styles.pjHeader}>Testimonials</h1>
          <h2 className={styles.pjDesc}>
            People I've worked with have said some nice things...
          </h2>
          <Carousel
            className={styles.carousel}
            responsive={responsive}
            arrows={false}
            showDots={true}
          >
            {testimonialData.map((td, i) => (
              <div key={i} className={styles.testimonialContainer}>
                <div className={styles.testimonialImage}>
                  <Image
                    src={`/testimonials/${td.img}`} // Route of the image file
                    width={100}
                    height={100}
                    alt={"project"}
                  />
                </div>
                <div className={styles.testimonialText}>{`"${td.text}"`}</div>

                <div className={styles.testimonialAuthor}>{td.name}</div>
                <div className={styles.taDesignation}>{td.designation}</div>
              </div>
            ))}
          </Carousel>
        </section>

        <section className={styles.footerHead}>
          <div className={styles.fhH1}>Hire me!</div>
          <div className={styles.fhH2Cont}>
            <div className={styles.fhH2}>
              Interested in working together? Let's schedule a time to chat.
            </div>
          </div>
          <div className={styles.fhBtnCont}>
            <a
              href={`mailto:${pageData.email}`}
              target="_blank"
              className={styles.fhBtn}
            >
              Let's do this
            </a>
          </div>
        </section>

        <div className={styles.footerTop} />
        <footer className={styles.footer}>
          <a href="#" className={styles.footerLogo}>
            <Image
              src="/images/logo2.svg" // Route of the image file
              height={width > wid_break ? 55 : 30} // Desired size with correct aspect ratio
              width={width > wid_break ? 80 : 45} // Desired size with correct aspect ratio
              alt="Rishav Raj"
              className="pointer"
            />
          </a>
          <div className={styles.footerSlogan}>
            Living, learning, & embracing new challenges every day.
          </div>
          <a
            href={pageData.linkedIn}
            target="_blank"
            className={styles.footerIcon}
            onMouseEnter={() => setIconHover(true)}
            onMouseLeave={() => setIconHover(false)}
          >
            <Image
              src={`/icons/linkedin${iconHover ? "" : "2"}.svg`} // Route of the image file
              height={width > wid_break ? 20 : 20} // Desired size with correct aspect ratio
              width={width > wid_break ? 20 : 20} // Desired size with correct aspect ratio
              alt="LinkedIn"
            />
          </a>
          <div className={styles.fH3}>Handcrafted by me @2023</div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
