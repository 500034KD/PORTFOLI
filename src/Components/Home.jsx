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
import frontend from "../Images/FrontEnd-LOGO.png";
import backend from "../Images/Backend-LOGO.png";

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
          <h2 className="aboutme-logo">ABOUT ME</h2>
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

        <div className="skills-section">
          <h2 className="skils-logo">Skills</h2>
          <div>
            <p className="frontend-desc">
              <h3 className="skills-intro">
              Strong problem-solving abilities, with a keen focus on optimizing
              web application performance and user experience. - Effective
              communication and collaboration skills, fostering successful
              teamwork in diverse development environments. - Commitment to
              staying current with the latest web development trends, tools, and
              best practices to deliver high-quality solutions. - Attention to
              detail and a results-oriented mindset, ensuring the successful
              completion of projects and objectives. Feel free to integrate
              these skill sections into your resume, ensuring they align with
              your specific experiences and expertise.
              <br />
              <br />
                Certainly, let's divide the skills section paragraph into
                front-end, back-end, and database skills, as well as
                professional skills:
              </h3>
              <h2> Front-End Skills</h2>
              <img src={frontend} alt="idguigegkbveruk" className="frontend-logo"/> 
              Proficient in front-end development,
              creating visually appealing and user-friendly interfaces using
              HTML5, CSS3, and JavaScript. - Extensive experience in building
              dynamic and responsive web applications with React and managing
              state with Redux. - Strong command of responsive web design
              principles, ensuring a consistent and engaging user experience
              across various devices and screen sizes. - Mastery of modern
              front-end development tools and libraries for enhanced user
              interactivity and interface design.
            </p>
            <p className="backend-desc">
              <h2>Back-End & DataBase Skills</h2>
              <img src={backend} alt="" className="backend-logo"/>
              Skilled in back-end development using
              Node.js and Express.js to create robust server-side applications.
              - Proficient in designing and implementing RESTful APIs, enabling
              efficient communication between front-end and back-end components.
              - Expertise in server-side data management, utilizing MongoDB for
              scalable and efficient database solutions. - Competent in
              leveraging authentication techniques like JWT for secure user
              access and data protection. - Proficient with Node Package Manager
              (NPM) for package management and dependency control.
              <br />
              <br />
              Strong knowledge and hands-on experience in NoSQL database
              management, particularly with MongoDB. - Ability to design
              efficient and scalable database schemas to meet specific
              application requirements. - Proficient in CRUD operations,
              indexing, and query optimization to ensure optimal database
              performance. - Understanding of database security and data
              integrity best practices to safeguard sensitive information.
            </p>
          </div>
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
          </p>
      
        </div>

        <div className="section-Contact">
          <h2 className="contact-logo">CONTACT</h2>
      
        </div>
      </div>
    </>
  );
}
