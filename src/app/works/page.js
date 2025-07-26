"use client";
import styles from "./styles.module.scss";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image6 from "../../../public/image0.jpeg";
import Image2 from "../../../public/Screenshot (25).jpg";
import Image1 from "../../../public/Screenshot (35).png";
import Image3 from "../../../public/Screenshot (30) (1).jpg";
import Image4 from "../../../public/afrika.png";
import Image5 from "../../../public/image0 (3).jpeg";
import Link from "next/link";
import Image from "next/image";
import WorkButton from "@/components/workbtn/page";

const Work = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main className="bg-primary h-full px-16 sm:px-3 md:px-3 lg:px-16">
        <section className="flex flex-col">
          <h2 className="text-second font-oswald text-[10rem] leading-[8rem] pb-3  sm:text-[4rem] sm:leading-[5rem] uppercase">
            Selected Works
          </h2>
          <div className="flex items-center justify-between sm:flex-col md:flex-col border-t border-t-second py-5 ">
            <div className="flex items-start justify-center gap-3 sm:flex-col sm:w-[100%]">
              <Image
                src={Image6}
                width={500}
                height={500}
                alt="project1"
                className="sm:w-full"
              />
              <div className="flex flex-col">
                <h1 className="text-second font-oswald text-3xl uppercase">
                  African Business Radio
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-open">
                  African Business Radio is a podcast platform offering diverse
                  channels across Kids & Parenting, Religion, Sports, and
                  Technology. With smart filtering and sorting, users can easily
                  discover and enjoy content that informs, inspires, and
                  connects with the African experience.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3  font-open sm:grid sm:grid-cols-3">
                  <li className="bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer">
                    TypeScript
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    React Query
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Restful API
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link href="https://african-business-radio-dun.vercel.app/">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link href="https://github.com/Chiblessed/business-radio">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col md:flex-col border-t border-t-second py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image5} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-second font-oswald text-3xl uppercase">
                  Selhono
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-open">
                  Selhono is an interior design platform that showcases elegant
                  design projects and offers tailored services. From concept to
                  completion, users can explore Selhono’s portfolio and discover
                  how beauty meets functionality in every space.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Nuxt.js
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Vue.js
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    GSAP
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link href="https://selhono-interior.netlify.app/">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link href="https://github.com/Chiblessed/selhono">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col  md:flex-col border-t border-t-second py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image1} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-second font-oswald text-3xl uppercase">
                  Jacob Grønberg
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-open">
                  This portfolio breaks convention with a minimalist yet
                  striking design, mirroring the photographer's signature style.
                  Seamless animations and intentional whitespace let each image
                  command attention, while the unconventional layout reflects a
                  modern editorail eye.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    GSAP
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link href="https://jacob-peach.vercel.app/">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link href="https://github.com/Chiblessed/jacob">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col  md:flex-col border-t border-t-second py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image4} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-second font-oswald text-3xl uppercase">
                  Afrika
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-open">
                  Afrika is an e-commerce platform built with Next.js and
                  Tailwind CSS that addresses key challenges in African markets.
                  It empowers rural African fashion designers by connecting them
                  directly with potential customers, helping to showcase and
                  spread the rich cultural heritage of Africa through authentic
                  fashion. By bridging the gap between creators and buyers,
                  Afrika fosters economic growth and celebrates African
                  creativity on a global scale.{" "}
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open sm:grid sm:grid-cols-3">
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    E-commerce
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Framer Motion
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    API
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link href="https://github.com/Chiblessed/afri">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link href="https://afri-tawny.vercel.app/">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col  md:flex-col border-t border-t-second py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image2} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-second font-oswald text-3xl uppercase">
                  Insurance
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-open">
                  Insurance is a sleek landing page built to introduce users to
                  a trusted insurance solution, providing clear information on
                  coverage options, benefits, and how to get started—making
                  protection simple and accessible.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Landing Page
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Vue.js
                  </li>
                  <li className="bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link href="https://chiblessed.github.io/insurance/">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link href="https://github.com/Chiblessed/insurance">
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Work;
