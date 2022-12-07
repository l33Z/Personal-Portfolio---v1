import "../styles/projects.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="Project__Main" id="Project__Main">
      <motion.div
        className="Project__Heading"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="./02.svg" alt="02" />
        <h1 id="Title">Projects</h1>
      </motion.div>
      <div className="Project__Lists">
        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src="s3.png" alt="s3" />
          <div className="Project__info">
            <h2>Z - Transfer</h2>
            <h3>
              It is a Web application that facilitates the exchange of
              cryptocurrencies in an easy and interactive manner through the use
              of Giphy Api
            </h3>

            <div className="Project__Btns">
              <a
                href="https://z-transfer.netlify.app/"
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/l33Z/Z-Transfer"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#solidity</p>
              <p>#truffle</p>
              <p>#ether.js</p>
              <p>#giphy Api</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <img src="s5.png" alt="s5" />
          <div className="Project__info">
            <h2>Blockchain Voting System</h2>
            <h3>
              Blockchain Voting System has been implemented on the Goerli Ether
              test network and aims to provide a highly secure method of online
              voting.
            </h3>

            <div className="Project__Btns">
              {/* <a
                href="https://z-transfer.netlify.app/"
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a> */}
              <a
                href="https://github.com/l33Z/Blockchain-Base-Voting-System"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#infura</p>
              <p>#express.js</p>
              <p>#mongodb</p>
              <p>#solidity</p>
              <p>#truffle</p>
              <p>#react router</p>
              <p>#ether.js</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <img src="s2.png" alt="s2" />

          <div className="Project__info">
            <h2>MagnumZ Token</h2>
            <h3>
              The MagnumZ web app lets you buy the MagunZ token (like Doge Coin
              Token) using the Goerli test network.
            </h3>

            <div className="Project__Btns">
              <a
                href="https://magnumz.netlify.app/"
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/l33Z/MagnumZ-Token"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#solidity</p>
              <p>#truffle</p>
              <p>#ether.js</p>
              <p>#react router</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
        >
          <img src="s4.png" alt="s1" />
          <div className="Project__info">
            <h2>Ether Lottery</h2>
            <h3>
              Building Lottery web-app with the help of solidity for smart
              contarct and react as framework
            </h3>

            <div className="Project__Btns">
              <a
                href="https://ether-lottery.netlify.app/"
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/l33Z/Ether-Lottery"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#tailwind.css</p>
              <p>#solidity</p>
              <p>#truffle</p>
              <p>#infura</p>
              <p>#ether.js</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <img src="s6.png" alt="s6" />
          <div className="Project__info">
            <h2>Personal Portfolio Site</h2>
            <h3>
              Create a personal portfolio site with React and use Framer Motion
              for animation
            </h3>

            <div className="Project__Btns">
              <a href="/" target="_blank" className="Project__btn">
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/l33Z/Personal-Portfolio---v1"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#css</p>
              <p>#framer motion</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <img src="s1.png" alt="s1" />
          <div className="Project__info">
            <h2>Hostinger Clone</h2>
            <h3>
              Rebuild Hostinger Site with the new look of site with help of
              React as Framework
            </h3>

            <div className="Project__Btns">
              <a
                href="https://hostingerz.netlify.app/"
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/l33Z/Hostinger-Clone"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#swiper.js</p>
              <p>#aos</p>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        className="Project__MoreProjects"
        href="https://github.com/l33Z"
        target="_blank"
      >
        Other Noteworthy Projects
      </a>
    </div>
  );
};

export default Projects;
