import "../styles/home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="Home__Main">
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Hi, {"  "}my name is
      </motion.p>
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Zeel Rabadiya.
      </motion.h1>
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        I built things for web
      </motion.h2>

      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        I’m a software engineer specializing in building exceptional digital
        experiences.
      </motion.h5>
      <motion.a
        href="#Project__Main"
        className="viewLink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        VIEW PROJECTS
      </motion.a>
    </div>
  );
};

export default Home;
