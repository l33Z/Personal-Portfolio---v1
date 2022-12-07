import "../styles/aboutme.css";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="About__Main" id="About__Main">
      <motion.div
        className="About__Heading"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="./01.svg" alt="01" />
        <h1 id="Title">About Me</h1>
      </motion.div>
      <motion.div
        className="About__container"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="About__info">
          <h2>
            Hello stranger! 👋, My name is Zeel and I am a{" "}
            <span style={{ color: "white" }}>Fullstack developer </span>
            and also interested in{" "}
            <span style={{ color: "white" }}>Web3 technologies.</span> I enjoy
            creating things that live on the internet. My interest in web
            development started back in 2020.
          </h2>
          <h2>
            Fast-forward to 2022 starting, I started learning blockchain
            technology and I find it interesting so I build some projects on
            Blockchain technology.
          </h2>
          <h2>
            When I am not coding, I am either playing chess, video game, or
            watching a movie. Other times I am reading or learning a new
            language or framework.
          </h2>
        </div>
        <div className="About__profilePic">
          <img src="./ppp.jpg" alt="profile" />
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
