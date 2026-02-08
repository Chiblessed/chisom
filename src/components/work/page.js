"use client";

import React, { useEffect, useRef } from "react";
import Image1 from "../../../public/Screenshot (35).png";
import Image2 from "../../../public/image0 (3).jpeg";
import Image3 from "../../../public/image0.jpeg";
import Image4 from "../../../public/afrika.png";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import WorkButton from "../workbtn/page";

export default function Work() {
  const itemsRef = useRef([]);

  useEffect(() => {
    // Add hover animations using GSAP
    itemsRef.current.forEach((item) => {
      const img = item.querySelector("img");

      if (!img) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(img, { scale: 1.05, duration: 0.4, ease: "power1.out" });

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  const works = [
    {
      title: "African Business Radio",
      description:
        "African Business Radio is a podcast platform offering diverse channels across Kids & Parenting, Religion, Sports, and Technology. With smart filtering and sorting, users can easily discover and enjoy content that informs, inspires, and connects with the African experience.",
      category: [
        "Frontend Development",
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "React Query",
        "Tailwind CSS",
      ],
      img: Image3,
      live: "https://african-business-radio-dun.vercel.app/",
      github: "https://github.com/Chiblessed/business-radio",
    },
    {
      title: "Selhono",
      description:
        " Selhono is an interior design platform that showcases elegant design projects and offers tailored services. From concept to completion, users can explore Selhono’s portfolio and discover how beauty meets functionality in every space.",
      category: [
        "Frontend Development",
        "Nuxt.js",
        "GSAP",
        "Tailwind CSS",
        "Website",
      ],
      img: Image2,
      live: "https://selhono-interior.netlify.app/",
      github: "https://github.com/Chiblessed/selhono",
    },
    {
      title: "Afrika",
      description:
        "  Afrika is an e-commerce platform that addresses key challenges in African markets. It empowers rural African fashion designers by connecting them directly with potential customers, helping to showcase and spread the rich cultural heritage of Africa through authentic fashion.",
      category: [
        "Frontend Development",
        "E-commerce Site",
        "Restful API",
        "Next.js",
        "Tailwind CSS",
      ],
      img: Image4,
      live: "https://afri-tawny.vercel.app/",
      github: "https://github.com/Chiblessed/afri",
    },
    {
      title: "Jacob Grønberg",
      description:
        "This portfolio breaks convention with a minimalist yet striking design, mirroring the photographer's signature style. Seamless animations and intentional whitespace let each image command attention, while the unconventional layout reflects a modern editorail eye.",
      category: [
        "Frontend Development",
        "Portfolio",
        "Next.js",
        "Tailwind CSS",
        "GSAP",
      ],
      img: Image1,
      live: "https://jacob-peach.vercel.app/",
      github: "https://github.com/Chiblessed/jacob",
    },
  ];

  return (
    <main className="bg-primary h-full px-16 sm:px-3 md:px-7 overflow-hidden lg:px-16">
      <section>
        <h2 className="text-third font-titan pb-6 text-[10rem] sm:leading-[4rem] leading-[8rem] sm:text-[5rem] uppercase">
          Recent Works
        </h2>

        <div className="flex flex-col gap-8">
          {works.map(
            ({ title, img, live, github, description, category }, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="hover-body overflow-hidden first:border-t-none bg-third w-full flex sm:flex-col md:flex-col items-start px-6 gap-8 justify-between py-6 rounded-2xl cursor-pointer transition-all duration-300"
              >
                <div>
                  <h2 className="text-primary text-4xl pb-3">{title}</h2>
                  <p className="text-primary text-base font-karla max-w-4xl py-7">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {Array.isArray(category) ? (
                      category.map((cat, idx) => (
                        <p
                          key={idx}
                          className="bg-primary/30 px-3 py-2 rounded-3xl text-primary text-sm"
                        >
                          {cat}
                        </p>
                      ))
                    ) : (
                      <p className="bg-primary/30 px-3 py-2 rounded-3xl text-primary text-sm">
                        {category}
                      </p>
                    )}
                  </div>
                  <div className="flex items-start justify-start gap-3 md:mt-3 pt-8 font-karla">
                    <Link
                      href={live}
                      className="border border-primary/75 rounded-2xl"
                    >
                      <WorkButton>
                        <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                          Live
                        </p>
                      </WorkButton>
                    </Link>
                    <Link
                      href={github}
                      className="border border-primary/75 rounded-2xl"
                    >
                      <WorkButton>
                        <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                          Github
                        </p>
                      </WorkButton>
                    </Link>
                  </div>
                </div>

                <Image
                  src={img}
                  alt={title}
                  width={1200}
                  height={1200}
                  className="transition-transform duration-300 rounded-2xl"
                />
              </div>
            ),
          )}
        </div>

        <div className="w-44 h-20 mx-auto mt-5">
          <Link href="/works">
            <WorkButton className="border border-second">
              <p className="text-lg sm:text-base text-third  transition-colors duration-500 ease-linear z-50">
                More Work
              </p>
            </WorkButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
