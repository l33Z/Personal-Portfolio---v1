import "../styles/navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <>
      <div className="Navbar__Main">
        <div className="Nvbar__level1">
          <a href="/" className="Navbar__logo">
            zeel
          </a>
          <div className="Navbar__Menu__Option">
            <h2 onClick={() => setmenuOpen(!menuOpen)}>
              <span id="menu_icon">
                {!menuOpen ? <HiMenuAlt2 /> : <IoCloseSharp />}
              </span>
            </h2>
          </div>
        </div>
        <div className="Nvbar__level2">
          <motion.ul
            className={menuOpen ? "Navbar__links open" : "Navbar__links"}
            // animate={{
            //   // translateX: menuOpen ? "0%" : "100%",
            //   translateY: menuOpen ? "0%" : "-100%",
            //   scale: menuOpen ? 1 : 0,
            // }}
            // transition={{ duration: 0.5 }}
          >
            <motion.li
              animate={{
                translateX: menuOpen ? "0%" : "100%",
                translateY: menuOpen ? "0%" : "-100%",
                opacity: menuOpen ? 1 : 0,
                scale: menuOpen ? 1 : 0,
              }}
            >
              <a href="#About__Main" onClick={() => setmenuOpen(false)}>
                01. About Me
              </a>
            </motion.li>
            <motion.li
              animate={{
                translateX: menuOpen ? "0%" : "100%",
                translateY: menuOpen ? "0%" : "-100%",
                opacity: menuOpen ? 1 : 0,
                scale: menuOpen ? 1 : 0,
              }}
              transition={{ delay: 0.2 }}
            >
              <a href="#Project__Main" onClick={() => setmenuOpen(false)}>
                02. Projects
              </a>
            </motion.li>
            <motion.li
              animate={{
                translateX: menuOpen ? "0%" : "100%",
                translateY: menuOpen ? "0%" : "-100%",
                opacity: menuOpen ? 1 : 0,
                scale: menuOpen ? 1 : 0,
              }}
              transition={{ delay: 0.4 }}
            >
              <a href="#Tech__Main" onClick={() => setmenuOpen(false)}>
                03. Skills
              </a>
            </motion.li>
            <motion.li
              animate={{
                translateX: menuOpen ? "0%" : "100%",
                translateY: menuOpen ? "0%" : "-100%",
                scale: menuOpen ? 1 : 0,
                opacity: menuOpen ? 1 : 0,
              }}
              transition={{ delay: 0.6 }}
            >
              <a href="#Contact__Main" onClick={() => setmenuOpen(false)}>
                04. Contact Me
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
