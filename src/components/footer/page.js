"use client";
import Image from "next/image";
import Flower from "@/../../public/flower.svg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FooterScroll from "../footerscroll/page";

function Footer({ contactRef }) {
  return (
    <>
      <footer
        ref={contactRef}
        id="contact"
        className="bg-third h-full text-primary"
      >
        <FooterScroll />
        <div className="px-16 sm:px-3">
          <div className="flex py-24 sm:flex-col items-center justify-center gap-12 md:grid md:grid-cols-2">
            <button className="bg-primary/75 text-third px-9 py-3 rounded-3xl text-[3rem]">
              <a
                href="https://www.linkedin.com/in/chisom-ohanu-897a37230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIN
              </a>{" "}
            </button>
            <button className="bg-primary/75 text-third px-9 py-3 rounded-3xl text-[3rem]">
              <a
                href="https://x.com/theblessed_man"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </button>
            <button className="bg-primary/75 text-third px-9 py-3 rounded-3xl text-[3rem]">
              <a
                href="https://x.com/theblessed_man"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </button>
            <button
              onClick={() => {
                const subject = encodeURIComponent("Let's Build Your Idea");
                const body = encodeURIComponent(
                  "Hi, my name is [Your Name], and I want to discuss building my idea with you.",
                );
                window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
              }}
              className="bg-primary/75 text-third px-9 py-3 rounded-3xl text-[3rem]"
            >
              Email
            </button>
          </div>

          <div className="flex sm:flex-col sm:gap-5 items-start justify-between py-10">
            <div className="flex items-center gap-1 justify-center font-open">
              <div className="w-10 h-10">
                <Image src={Flower} width={200} height={200} alt="Flower" />
              </div>
              <h2 className=" text-3xl">Let's Work Together</h2>
            </div>
            <p className="text-xl font-open">@Ohanu Chisom 2025</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
