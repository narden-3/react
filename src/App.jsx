import { useState, useEffect } from 'react'; // Import useEffect
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // This state isn't used in the provided JSX, but keeping it as is.
  const [showScrollBtn, setShowScrollBtn] = useState(false); // State for scroll-to-top button
  const [showContent, setShowContent] = useState(false); // State for "Show More" content

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  };

  // Function to toggle the "Show More" content
  const toggleShowMore = () => {
    setShowContent(!showContent);
  };

  // Effect to handle scroll event for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

          * {
            font-family: "Poppins", sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
          }

          body {
            background-image: url("../src/assets/subtle-cinematics-KEI-VNDi0_g-unsplash.jpg");
            background-size: cover;
            background-attachment: fixed;
          }

          header {
            background-color: rgba(255, 255, 255, 0.4);
            margin-left: 25%;
            width: 50%;
            z-index: 999;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 5px 5px;
          }

          
          header #btn {
            font-size: larger;
            font-weight: bolder;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 20%;
            background-color: blueviolet;
            color: black;
            cursor: pointer;
            position: fixed;
            bottom: 10px;
            right: 10px;
          }

          .logo {
            text-decoration: none;
            color: blueviolet;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.2em;
          }

          .navigation a {
            color: rgb(78, 96, 253);
            text-decoration: none;
            font-size: 1.1em;
            font-weight: 500;
            padding-left: 30px;
          }

          .navigation a:hover {
            color: crimson;
          }

          section {
            padding: 100px 200px;
            display: inline;
          }

          .main {
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .main h2 {
            color: rgb(0, 7, 12);
            font-size: 1.6em;
            font-weight: 500;
            margin-top: 30px;
          }

          .main h2 span {
            display: inline-block;
            margin-top: 10px;
            color: rgb(25, 0, 255);
            font-size: 2em;
            font-weight: 600;
          }

          .main h3 {
            color: rgb(165, 2, 2);
            font-size: 1.5em;
            font-weight: 750;
            letter-spacing: 2px;
            line-height: 40px;
            margin-top: 10px;
            margin-bottom: 30px;
            text-align:left;
          }

          .main h4 {
            color: rgb(189, 251, 215);
            font-size: 1.2em;
            font-weight: 700;
            letter-spacing: 2px;
            line-height: 50px;
            text-align:left;
          }

          .main h3 span {
            display: inline-block;
            margin-top: 10px;
            color: rgb(255,255,255);
            font-size: 1em;
            font-weight: 700;
          }

          #show-more-btn {
            background-color: #ff0000;
            color: white;
            padding: 10px 20px;
            margin-top: 30px;
            margin-bottom: 50px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
          }

          .main-btn {
            color: white;
            background-color: #3a6cf4;
            text-decoration: none;
            font-size: 1.1em;
            font-weight: 600;
            display: inline-block;
            padding: 0.9375em 2.1875em;
            letter-spacing: 1px;
            border-radius: 15px;
            margin-top: 2px;
            transition: 1s ease;
          }

          .main-btn:hover {
            background-color:rgb(7, 61, 209);
            transform: scale(1.1);
          }

          .title {
            display: flex;
            justify-content: center;
            color:rgb(255, 255, 255);
            font-size: 2.2em;
            font-weight: 800;
            margin-bottom: 30px;
          }

          .content {
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .card {
            background-color: rgba(190, 190, 248, 0.679);
            width: 21.25em;
            box-shadow: 0 5px 25px rgba(8, 0, 0, 0.15);
            border-radius: 15px;
            padding: 15px;
            margin: 20px;
            transition: 1s ease-in-out;
          }

          .card:hover {
            transform: scale(1.1);
          }

          .info {
            text-align: center;
          }

          .info h3 {
            color: rgb(100, 1, 100);
            font-size: 1.2em;
            font-weight: 900;
            margin: 5px;
          }

          .info p {
            color: black;
            line-height: 30px;
            font-size: 1em;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 0;
          }

          .comunicate {
            border: 4px solid black;
            padding: 20px;
          }

          .comunicate a{
            color: purple;
            text-decoration: underline;
          }

          .contact .info h2 {
            color: rgb(85, 0, 68);
            font-size: 800;
            font-weight: bolder;
          }

          .contact .info p {
            font-size: 1.3em;
          }

          .social-media {
            background-color: rgba(0, 0, 0, 60%);
            margin-left: 25%;
            width: 50%;
            display: flex;
            justify-content: center;

          }

          .social-media h3 {
            color: rgb(255, 255, 255);
            padding: 40px;
          }

          .social-media a {
            color: purple;
            font-size: 1.7em;
            justify-content: space-between;
          }
        `}
      </style>

      <header>
        {/* Apply inline style for display based on showScrollBtn state */}
        <button id="btn" onClick={scrollToTop} style={{ display: showScrollBtn ? 'block' : 'none' }}>&#8679;</button>
        <a href="#" className="logo">Narden Nashat</a>
        <nav className="navigation">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="main">
        <nav>
          <div>
            <h2>Hello Everyone, My name is<br /><span>Narden Nashat</span></h2>
            <h3>I am improving myself, especially in computer programs like Microsoft Office and Front-End
              Development. <br />
              <span> I can do these:</span>
              {/* Apply inline style for display based on showContent state */}
              <h4 id="content" style={{ display: showContent ? 'block' : 'none' }}>
                1-Translating from Arabic to English (and vice versa).<br />
                2-I have a particular interest in administrative work like data entry and customer service.<br />
                3-I have experience in using computers such as Microsoft Office (Word, PowerPoint, Excel.... etc.)<br />
                4-Designing logos, CVs, posters, cards, book covers, and presentations professionally.<br />
                5-Converting pdf files to word (and vice versa).<br />
                6-Emptying videos and write them by using Microsoft Office Word.<br />
                <span>I am doing other things you can check my service.</span>
              </h4>
            </h3>
            <button id="show-more-btn" onClick={toggleShowMore}>
              {showContent ? 'Show Less' : 'Show More'}
            </button>
            <br />
            <a href="#services" className="main-btn">View My Services</a>
          </div>
        </nav>
      </section>

      <section className="cards" id="services">
        <h2 className="title">Services</h2>
        <div className="content">
          <div className="card">
            <div className="info">
              <h3>Translation English</h3>
              <p>I studied translation for four years so I can translate from Arabic to English (and vice versa).
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3>Data Entry & Customer Service</h3>
              <p>I have experence for three years, I can data entry and helping people for their guestions.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3>Design Logo</h3>
              <p>I am designing logos and covers for books, cards and Facebook covers by using photoshop and illustrator.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3>Montage videos</h3>
              <p>I montage videos by using premiere, canava and devinci...etc. </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3>Front-End Developer</h3>
              <p>I am doing websites.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cards contact" id="contact">
        <h2 className="title">Let's work together</h2>
        <div className="content">
          <div className="card comunicate">
            <div className="info">
              <h2>Phone & WhatsApp</h2>
              <p>+20 1065159770 & +20 1550600578</p>
            </div>
          </div>
          <div className="card comunicate">
            <div className="info">
              <h2>Email</h2>
              <p>nardennashat3@gmail.com</p>
            </div>
            <br />
            <a href="mailto:nardennashat3@gmail.com?subject=contact me&body=The CV">Mail Me</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="social-media">
          <h3>To Communicate</h3>
          <a href="#" className="logo">@ Narden Nashat</a>
          <a href="https://codepen.io/narden-nashat-nathan" target="_blank"><i className="fa-brands fa-codepen"></i></a>
          <a href="https://www.linkedin.com/in/narden-nashat-7a41b0119/" target="_blank"><i
            className="fa-brands fa-linkedin"></i></a>
          <a href="https://twitter.com/NardenNashat3" target="_blank"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/narden-3" target="_blank"><i className="fa-brands fa-github"></i></a>
        </div>
      </footer>
    </>
  );
}

export default App;