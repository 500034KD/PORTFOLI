// Home.js
import React from "react";
import "./Home.css";
import line from "../Images/logodd.gif";
import scroll from "../Images/scroll.webp";
import github from "../Images/GitHub-Logo.png";
import instagram from "../Images/instagram.jpeg";
import M from "../Images/mern -m.png";
import E from "../Images/images - Copy.png";
import R from "../Images/React-icon.svg - Copy.png";
import N from "../Images/nodejs - Copy.webp";
import blog from "../Images/blog.png";
import arrow from "../Images/arrow.gif";

export default function Home() {
  return (
    <>
      <img src={line} alt="IMG" className="imagebackground" />

      <div>
        <h1 className="KHALIAKHAN">
          KHALID <span className="AHMED">AHMED</span> KHAN
        </h1>
        <h2>
          [ Full Stack <span className="mern">MERN</span> Developer ]
        </h2>
        <ul>
          <li>
            <img src={M} alt="M" className="MERN-logo" />
          </li>
          <li>
            <img src={E} alt="E" className="MERN-logo" />
          </li>
          <li>
            <img src={R} alt="R" className="MERN-logo" />
          </li>
          <li>
            <img src={N} alt="M" className="MERN-logo" />
          </li>
        </ul>
        <p className="intro">
          " As a passionate and skilled MERN stack web developer, I bring fresh
          ideas and a strong foundation in MongoDB, Express.js, React, and
          Node.js to the table. Eager to contribute innovative solutions and
          elevate user experiences in t he ever-evolving world of web
          development. "
        </p>
        <img src={scroll} alt="" className="scroll" />

        <div className="section-about">
          <h2 className="aboutme-logo">About Me</h2>
          <p className="p-intro">
            <i className="aboutme-intro">
              Hello! Myself Khalid Ahmed Khan, I'm a Full Stack MERN Developer
              based from Hyderabad Telangana India and I am a passionate and
              dedicated developer with a focus on web development. My goal is
              tocreate elegant and efficient solutions to complex problems. i
              purely enjoy working with team and im also flexiable at multi
              tasking with some little gudiance through the great minds of the
              time, I'm always a great learner through seeking knowledge.{" "}
            </i>
          </p>
          <h2 className="blog-logo">
            <span className="here">Here is my first </span>BLOG,
          </h2>
          <p className="info-blog">
            <i>
              "Discover the nuances of character encoding with my new blog,
              'Deciphering the Digital Alphabet: My Journey through Unicode and
              UTF.' Join me as I unravel the differences between Unicode and UTF
              through my experiential learning. Gain practical insights and
              invaluable knowledge to navigate the digital landscape more
              effectively. Subscribe now and embark on this educational journey
              to enhance your digital literacy. Let's explore the world of
              Unicode and UTF together!"
            </i>
          </p>
          <img src={arrow} alt="" className="arrow" />
          <img src={blog} alt="" className="blog-pic" />
        </div>
        <div className="projects-section">
          <h2 className="project-logo">PROJECTS</h2>
          <p className="projects-desc">
            Welcome to my world of real-time innovations! These projects are the
            results of my passion for using technology to solve real-world
            problems and drive meaningful change. Each project showcases
            creativity and problem-solving skills, demonstrating the impact of
            technology in real-time scenarios. Explore these projects to witness
            how I've harnessed cutting-edge technologies to deliver practical
            solutions, streamline processes, and enhance user experiences. Each
            one is a testament to my commitment to excellence and innovation.
            Feel free to dive in, ask questions, and discover the potential of
            real-time technology.
          </p>
          <img src={blog} alt="" className="blog-pic" />
         
        </div>

        {/* <img src={github} alt="" className='github'/>
        <img src={instagram} alt="" className='instagram'/>
        <img src="" alt="" className='linkedin'/>
        <img src="" alt="" className='youtube'/>
        <img src="" alt="" className=''/> */}
      </div>
    </>
  );
}
