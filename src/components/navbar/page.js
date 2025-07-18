"use client";
import Link from "next/link";
import styles from './style.module.scss';
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleNavbar = () => {
        setActive((prev) => !prev);
    };

    return ( 
        <>
            <header className="flex items-center justify-between px-16 py-5 w-full sm:px-3 bg-primary">
                <h2 className={`font-oswald z-20 text-4xl font-semibold hover:cursor-pointer `}>
                    <Link href='/'>
                        Chisom.
                    </Link>
                </h2>

                <motion.button
                    onClick={toggleNavbar}
                    animate={active ? 'open' : 'close'}
                    className="relative z-50 h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-third/30">
                    
                    {/* Hamburger icon */}
                    <motion.span 
                        style={{
                            left: '50%',
                            top: '40%',
                            x: '-50%',
                            y: '-50%'
                        }}
                        className="absolute h-1 w-10 bg-black" 
                        variants={{
                            open: {
                                rotate: ['0deg', '0deg', '45deg'],
                                top: ['40%', '50%', '50%'],
                                backgroundColor: 'white'
                            }, 
                            close: {
                                rotate: ['45deg', '45deg', '0deg']
                            },
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                    />
                    <motion.span 
                        style={{
                            left: '50%',
                            top: '50%',
                            x: '-50%',
                            y: '-50%'
                        }}
                        className="absolute h-1 w-10 bg-black" 
                        variants={{
                            open: {
                                rotate: ['0deg', '0deg', '130deg'],
                                top: ['50%', '50%', '50%'],
                                backgroundColor: 'white'
                            }, 
                            close: {
                                rotate: ['130deg','130deg', '0deg']
                            },
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                    />
                    <motion.span 
                        style={{
                            left: '50%',
                            bottom: '35%',
                            x: '-50%',
                            y: '-50%'
                        }}
                        className="absolute h-1 w-5 bg-black"
                        variants={{
                            open: {
                                rotate: ['0deg','0deg', '45deg'],
                                bottom: ['35%','35%', '45%'],
                                backgroundColor: 'white'
                            }, 
                            close: {
                                rotate: ['45deg','45deg', '0deg'],
                                bottom: ['45%','45%', '35%']
                            },
                        }}  
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                    />
                </motion.button>

                {active && (
                    <motion.div 
                    className="absolute z-10 top-0 pt-32 right-0 w-full h-[110vh] bg-second/75 rounded-[20px] text-primary">
                        <div className="pt-10 flex flex-col items-center justify-center gap-10">
                            <button className={`font-open font-semibold text-8xl hover:cursor-pointer`}>
                                <Link href='/'>Home</Link>
                            </button>
                            <button className={`font-open font-semibold   text-8xl hover:cursor-pointer`}>
                                <Link href='/about'>About</Link>
                            </button>
                            <button className={`font-open font-semibold  text-8xl hover:cursor-pointer`}>
                                <Link href='/works'>Work</Link>
                            </button>
                            <div className="flex items-center justify-center gap-10 pb-10">
                            <Link href='https://github.com/Chiblessed' className="bg-primary px-3 py-1 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="35px">  
                              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                            </svg>
                            </Link>
                            <Link href='www.linkedin.com/in/chisom-ohanu-897a37230' className="bg-primary px-3 py-1 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px">
                            <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"/>
                            </svg>
                            </Link>
                            <Link href='https://x.com/theblessed_man' className="bg-primary px-3 py-1 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px">
                            <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"/>
                            </svg>
                            </Link>
                                     </div>
                        </div>
                    </motion.div>
                )}
            </header>
        </>
    );
};

export default Navbar;
