"use client";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  console.log("Service:", serviceId);
  console.log("Template:", templateId);
  console.log("Key:", apiKey);
  console.log("Form Ref:", form.current);

  useEffect(() => {
    emailjs.init(apiKey);
  }, [apiKey]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Service:", serviceId);
    console.log("Template:", templateId);
    console.log("Key:", apiKey);
    console.log("Form Ref:", form.current);
    emailjs
      .sendForm(serviceId, templateId, form.current)
      .then(() => {
        console.log("SUCCESS!");
        e.target.reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <footer className="rounded-2xl bg-black h-[100vh] text-white flex flex-col items-center justify-center">
      <h2 className="text-center text-6xl max-sm:text-4xl mb-8">
        Let's Work Together
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col mb-4">
          <label className="text-3xl mb-2">Name:</label>
          <input
            type="text"
            name="from_name"
            className="text-black text-xl w-[25rem] sm:w-[20rem] px-3 py-2 rounded-[12px]"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-3xl mb-2">Email:</label>
          <input
            type="email"
            name="from_email"
            className="text-black text-xl w-[25rem] sm:w-[20rem] px-3 py-2 rounded-[12px]"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-3xl mb-2">Message:</label>
          <textarea
            name="message"
            className="text-black text-xl w-[25rem] sm:w-[20rem] h-32 px-3 py-2 rounded-[12px]"
            required
          />
        </div>

        <input
          type="submit"
          value="Send"
          className="bg-white text-black text-xl cursor-pointer px-5 py-2 rounded-[12px]"
        />
      </form>
    </footer>
  );
}

export default ContactPage;
