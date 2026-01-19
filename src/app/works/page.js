"use client";
import styles from "./styles.module.scss";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image6 from "../../../public/image0.jpeg";
import Image2 from "../../../public/Screenshot (25).jpg";
import Image1 from "../../../public/Screenshot (35).png";
import Image3 from "../../../public/beltelcake.png";
import Image4 from "../../../public/afrika.png";
import Image8 from "../../../public/cloudhub.png";
import Image9 from "../../../public/branddesigner.png";
import Image5 from "../../../public/image0 (3).jpeg";
import Image7 from "../../../public/real estate.png";
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
          <h2 className="text-third font-oswald text-[10rem] leading-[8rem] pb-8  sm:text-[4rem] sm:leading-[5rem] uppercase">
            Selected Works
          </h2>
          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5 ">
            <div className="flex items-start justify-center gap-3 sm:flex-col sm:w-[100%]">
              <Image
                src={Image6}
                width={500}
                height={500}
                alt="project1"
                className="sm:w-full"
              />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  African Business Radio
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
                  African Business Radio is a podcast platform offering diverse
                  channels across Kids & Parenting, Religion, Sports, and
                  Technology. With smart filtering and sorting, users can easily
                  discover and enjoy content that informs, inspires, and
                  connects with the African experience.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3  font-open sm:grid sm:grid-cols-3">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    TypeScript
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    React Query
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Restful API
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://african-business-radio-dun.vercel.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/business-radio"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image5} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Selhono
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
                  Selhono is an interior design platform that showcases elegant
                  design projects and offers tailored services. From concept to
                  completion, users can explore Selhono’s portfolio and discover
                  how beauty meets functionality in every space.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Nuxt.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Vue.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    GSAP
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://selhono-interior.netlify.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/selhono"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image8} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  CloudHub
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
                  This platform blends intelligence, precision, and
                  collaboration through a clean, dynamic interface that captures
                  Cloudhub’s essence of digital innovation. Smooth transitions,
                  reactive visuals, and data-driven motion create an experience
                  that feels alive — where technology becomes both tool and
                  teammate. From creating and inspecting synthetic surveillance
                  models to securely sharing progress, every interaction feels
                  deliberate and intelligent. Built with Next.js, TailwindCSS,
                  and GSAP, Cloudhub redefines how teams visualize, refine, and
                  deploy ideas — connecting creativity with code in a seamless,
                  secure, and scalable environment.
                </p>
                <ul className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>

                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Landing Page
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    GSAP
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://landingpages-drab.vercel.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/landingpages"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image9} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Finn portfolio
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
                  This platform merges design intuition, strategy, and motion to
                  express Finn’s artistry — a Lagos-based brand designer shaping
                  visual stories that connect and convert. Fluid transitions,
                  vibrant color layers, and playful animations reveal a world
                  where creativity meets clarity. From crafting bold identities
                  to curating social media experiences that move audiences,
                  every frame feels deliberate and human. Built with Next.js,
                  TailwindCSS, and GSAP, Finn’s digital space embodies the
                  spirit of modern storytelling — seamless, expressive, and made
                  to inspire brands that dare to stand out.
                </p>
                <ul className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>

                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Landing Page
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    GSAP
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://landingpages-drab.vercel.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/landingpages"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image1} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Jacob Grønberg
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
                  This portfolio breaks convention with a minimalist yet
                  striking design, mirroring the photographer's signature style.
                  Seamless animations and intentional whitespace let each image
                  command attention, while the unconventional layout reflects a
                  modern editorail eye.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    GSAP
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://jacob-peach.vercel.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/jacob"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image7} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Ile Alawora{" "}
                </h1>
                <p className="text-sm text-primary py-5 w-[70%] sm:w-full md:w-full font-karla">
                  Designed with simplicity and trust in mind, this real estate
                  landing page offers a seamless way to explore apartments
                  tailored to every need. With location-based search and
                  flexible filters for pricing, short-lets, and purchases, users
                  can effortlessly narrow down options that fit their lifestyle.
                  Clean layouts, soft transitions, and clear visual hierarchy
                  create a calm browsing experience, allowing properties to
                  stand out while helping users make confident, informed
                  decisions.
                </p>
                <ul className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-lg cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    Tailwindcss
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    GSAP
                  </li>

                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    Landing Page
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://landingpages-drab.vercel.app/RealEstate"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://landingpages-drab.vercel.app/RealEstate"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image3} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Beltel Cakes and more
                </h1>
                <p className="text-sm text-primary py-5 w-[70%] sm:w-full md:w-full font-karla">
                  This website blends elegance and warmth through a clean,
                  inviting design that reflects Beltel Cakes & More’s passion
                  for celebration. Soft tones, graceful transitions, and
                  thoughtful spacing highlight each cake and gift box as a
                  centerpiece of joy. Every detail,from layout to imagery,
                  evokes a sense of delight and indulgence, mirroring the
                  brand’s dedication to making every moment feel special.
                </p>
                <ul className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-lg cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    Tailwindcss
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    GSAP
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    Context API
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    E-commerce
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    Firebase
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-lg">
                    Paystack
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://beltelcake.vercel.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/beltelcake"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image4} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Afrika
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
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
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    E-commerce
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Next.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwindcss
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Framer Motion
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    API
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://github.com/Chiblessed/afri"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://afri-tawny.vercel.app/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Github
                  </p>
                </WorkButton>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:mb-6 md:flex-col bg-third px-3 rounded-2xl py-5">
            <div className="flex items-start justify-center sm:flex-col gap-3">
              <Image src={Image2} width={500} height={500} alt="project1" />
              <div className="flex flex-col">
                <h1 className="text-primary font-oswald text-3xl uppercase">
                  Insurance
                </h1>
                <p className="text-sm py-5 w-[70%] sm:w-full md:w-full font-karla text-primary">
                  Insurance is a sleek landing page built to introduce users to
                  a trusted insurance solution, providing clear information on
                  coverage options, benefits, and how to get started—making
                  protection simple and accessible.
                </p>
                <ul className="flex gap-3 sm:gap-1 sm:mb-3 font-open">
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 rounded-sm cursor-pointer">
                    Landing Page
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Vue.js
                  </li>
                  <li className="bg-primary/75 text-third text-sm px-3 py-2 cursor-pointer rounded-sm">
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:mt-3">
              <Link
                href="https://chiblessed.github.io/insurance/"
                className="border border-primary font-karla rounded-2xl"
              >
                <WorkButton>
                  <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">
                    Live
                  </p>
                </WorkButton>
              </Link>
              <Link
                href="https://github.com/Chiblessed/insurance"
                className="border border-primary font-karla rounded-2xl"
              >
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
