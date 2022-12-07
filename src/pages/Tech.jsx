import "../styles/tech.css";
import hackerrank from "../assets/hackerrank.png";
import leetcode from "../assets/leetcode.png";
import { motion } from "framer-motion";

const Tech = () => {
  const skills = [
    "React",
    "Javascript",
    "Truffle",
    "Express.js",
    "Infura",
    "Node.js",
    "Java",
    "Mongodb",
    "C",
    "Solidity",
    "MySQL",
    "Tailwind Css",
    "Github",
    "Figma",
  ];
  return (
    <div className="Tech__Main" id="Tech__Main">
      <motion.div
        className="Tech__Heading"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="./03.svg" alt="03" />
        <h1 id="Title">Skills</h1>
      </motion.div>

      <div className="Tech__Container">
        <div className="Tech__Skills_Name">
          {skills.map((skill, index) => {
            return (
              <motion.h3
                className="skill_name"
                key={index}
                initial={{ translateY: "-100%", opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 0.12 * index }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.h3>
            );
          })}
        </div>
        <div className="Skills__Problem__Solving">
          <h2>♾️ Have a good ability to solve problems </h2>
          <div className="Coding__Profiles">
            <motion.a
              href="https://leetcode.com/rabadiyazeel/"
              target="_blank"
              className="Profile"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <img src={leetcode} alt="leetcode" />
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/zeelrabadiya198"
              target="_blank"
              className="Profile"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <img src={hackerrank} alt="hackerrank" />
            </motion.a>
          </div>
        </div>

        <div className="Skills__Experience">
          <h2>
            ♾️ I completed a one-month virtual internship as a web developer
            intern at LetsGrowMore (LGM) Community.
          </h2>

          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:6996384089436008448/"
            target="_blank"
            className="viewLink"
          >
            VIEW CERTIFICATE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tech;
