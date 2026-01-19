"use client";

import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Image from "next/image";
import Flower from "@/../../public/Chisom image.png";
import Flower2 from "@/../../public/third (2).png";

const About = () => {
  useEffect(() => {
    const splitText = new SplitType(".aboutmain", { types: "line, chars" });

    gsap.fromTo(
      ".aboutmain .line",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.1,
        ease: "easeInOut",
      }
    );

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <main className="bg-primary -z-10 h-full pt-36">
      <section className="">
        <h2 className="font-oswald text-center text-6xl text-black">
          About Me
        </h2>

        <div className="mt-10 mx-20 md:mx-2 lg:mx-20 sm:mx-0 sm:px-3 pb-5">
          <div>
            {" "}
            <p className=" text-xl leading-[35px] font-karla aboutmain text-wrap">
              Hey there! 👋 I know you’re here to learn more about me, so let me
              share what drives my work. My name is Chisom Blessing Ohanu, and
              I’m a creative front-end developer and product designer with a
              passion for crafting digital experiences that feel alive.{" "}
              <span className="inline-block w-14 h-14 align-middle mx-1">
                <Image
                  src={Flower}
                  width={200}
                  height={200}
                  alt="Flower"
                  className="rounded-full"
                />
              </span>{" "}
              I combine design thinking, user-focused interfaces, and clean code
              to bring ideas to life, building websites and apps that aren’t
              just functional, but intuitive, beautiful, and engaging. I love
              exploring how colors, layouts, and interactions influence human
              perception and experience. Experimenting with color palettes,
              typography, spacing, and micro-interactions is like my playground;
              seeing how small details can guide a user, enhance usability, or
              make a product feel effortless is what keeps me curious and
              inspired. Every project is a chance to tell a story through
              design, and I thrive on turning complex ideas into smooth,
              intuitive experiences that users love and remember.
            </p>
            <p className="font-karla text-xl leading-[35px] mt-3 aboutmain">
              Beyond screens and interfaces, I’m constantly learning,
              experimenting, and observing, whether it’s the latest design
              trend, a new animation technique, or the subtle psychology behind
              user behavior.{" "}
              <span className="inline-block w-14 h-14 align-middle mx-1">
                <Image
                  src={Flower}
                  width={200}
                  height={200}
                  alt="Flower"
                  className="rounded-full"
                />
              </span>{" "}
              I believe that great product design is a mix of creativity,
              empathy, and problem-solving, and I bring that mindset to
              everything I work on. From wireframes to prototypes to polished
              UI, I focus on creating products that not only look amazing but
              work seamlessly, making every interaction feel natural and
              engaging. Fun, playful, and thoughtful, that’s how I approach
              design, and that’s the energy I bring to every collaboration. If
              you’re looking for someone who can blend creative vision with
              technical expertise to build digital experiences that stand out,
              let’s make something extraordinary together!{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
