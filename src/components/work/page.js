"use client";

import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion, useTransform } from "framer-motion";
import Image2 from "../../../public/image0 (3).jpeg";
import Image1 from "../../../public/Screenshot (35).png";
import Image3 from "../../../public/image0.jpeg";
import Image4 from "../../../public/afrika.png";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import WorkButton from "../workbtn/page";

export default function Work() {
  useEffect(() => {
    const hoverBodies = document.querySelectorAll(".hover-body");

    hoverBodies.forEach((body) => {
      const hoverImg = body.querySelector(".hover-img");
      const hiddenImg = body.querySelector(".hidden-img");

      body.addEventListener("mousemove", (e) => {
        hoverImg.style.opacity = 1;
        hoverImg.style.transform = "translate(-100%, -50%) rotate(5deg)";
        hiddenImg.style.transform = "scale(1,1)";
        if (e.clientX + "px" === "1500px") {
          hoverImg.style.left = e.clientX + "px";
        }
      });

      body.addEventListener("mouseleave", (e) => {
        hoverImg.style.opacity = 0;
        hoverImg.style.transform = "translate(-50%, -50%)";
        hiddenImg.style.transform = "scale(0.5, 0.5)";
      });
    });
  }, []);

  return (
    <main className="bg-primary h-full px-16 sm:px-3 md:px-7 overflow-hidden lg:px-16">
      <section>
        <h2 className="text-second font-oswald text-[10rem] leading-[8rem] sm:text-[5rem] uppercase">
          Selected Works
        </h2>

        {[
          {
            title: "African Business Radio",
            img: Image3,
            live: "https://african-business-radio-dun.vercel.app/",
            github: "https://github.com/Chiblessed/business-radio",
          },
          {
            title: "Selhono",
            img: Image2,
            live: "https://selhono-interior.netlify.app/",
            github: "https://github.com/Chiblessed/selhono",
          },
          {
            title: "Afrika",
            img: Image4,
            live: "https://afri-tawny.vercel.app//",
            github: "https://github.com/Chiblessed/afri",
          },
          {
            title: "Jacob Grønberg",
            img: Image1,
            live: "https://jacob-peach.vercel.app/",
            github: "https://github.com/Chiblessed/jacob",
          },
        ].map(({ title, img, live, github }, i) => (
          <div
            key={i}
            className="hover-body overflow-hidden first:border-t-none border-t border-t-third w-full flex items-center justify-between py-6 cursor-pointer"
          >
            <p className="text-2xl sm:text-xl text-second">{title}</p>
            <div className="hover-img sm:hidden absolute w-[550px] h-[250px] left-1/2 translate-x-[-50%] translate-y-[50%] transition-all duration-500 ease-out cursor-none opacity-0">
              <Image
                src={img}
                width={300}
                height={200}
                alt={title}
                className="hidden-img w-full h-full object-cover relative"
              />
            </div>
            <div className="flex items-center justify-center gap-3">
              <Link href={live} target="_blank">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link href={github} target="_blank">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>
        ))}
        <div className="w-44 h-20 mx-auto mt-5">
          <Link href="/works">
            <WorkButton>
              <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                More Work
              </p>
            </WorkButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
