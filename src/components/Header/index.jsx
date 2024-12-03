'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); 
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.chisom}>Chisom</p>
            <p className={styles.ohanu}>Ohanu</p>
          </div>
        </div>
        
        <button onClick={toggleMenu} className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
          <span className={styles.burgerIcon}></span>


        </button>

        {isMenuOpen && (
          <motion.div
            className={styles.backgrounddis}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}  
            transition={{ duration: 0.3 }} 
          >
           

            <nav>
              <motion.ul 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                }}
              >
                {["home", "about", "projects"].map((link) => (
                  <motion.li 
                    key={link}
                    variants={{
                      hidden: { y: 0, opacity: 0 },
                      visible: { 
                        y: 50, 
                        opacity: 1, 
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }
                    }}
                  >
                    <Link
                      href={`/${link === "home" ? "" : link}`} 
                      className={`${activeLink === link ? "line-through" : ""} hover:text-gray-400`}
                      onClick={() => handleLinkClick(link)}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </div>
    </>
  );
}
