import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import Lottie from "lottie-react";

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
    desc: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
  },
  {
    img: "digital_outcomes",
    desc: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
  },
  {
    img: "alfalgo",
    desc: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
  },
  {
    img: "beekle",
    desc: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
  },
  {
    img: "eminent",
    desc: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
  },
  {
    img: "eduvisory",
    desc: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
  },
];

const Home = () => {
  const [eventTab, setEventTab] = useState(0);
  const { width } = useWindowDimensions();

  const [modalIsOpen, setIsOpen] = useState(false);

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
            <Link href="#contactUs" scroll={false}>
              <div className={styles.headerBtn2}>Contact Me</div>
            </Link>
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
            <Link
              href={`mailto:${pageData.email}`}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <span style={{ color: "blue" }} className="pointer">
                Email me
              </span>
            </Link>
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
                  <div className={styles.prContentText}>
                    High-end, custom residential renovaters serving Fraser
                    Valley homeowners.
                  </div>
                  <button
                    className={styles.prContentBtn}
                    onClick={() =>
                      alert("Building the content, thanks for your patience!")
                    }
                  >
                    Know More
                  </button>
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
        </section>

        <section
          id="sponsors"
          className={styles.section6}
          style={{ marginTop: width > wid_break ? 0 : 0 }}
        ></section>

        <footer id="contactUs" className={styles.footer}></footer>
      </main>
    </div>
  );
};

export default Home;
