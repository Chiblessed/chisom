'use client'
import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

function ContactPage() {
    const form = useRef();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const serviceId = process.env.NEXT_SERVICE_ID;
  const templateId = process.env.NEXT_TEMPLATE_ID;

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: apiKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <footer className={` rounded-2xl bg-black h-[100vh] sm:h-[120vh] md:h-[70vh] lg:h-[100vh] text-white flex flex-col items-center justify-center`}>
<div className=" relative py-8 overflow-hidden flex w-full gap-5 whitespace-nowrap">
<h2 className={` text-center text-6xl text-white max-sm:text-4xl max-sm:py-7 `}>Let's Work Together</h2>



</div>
<form ref={form} onSubmit={sendEmail} className="flex flex-col items-center justify-center">
  <div className="flex items-center justify-center gap-5 mb-4 sm:flex-col">
  <label className=' text-3xl mb-2'>Name:</label>
      <input type="text" name="from_name" className="text-black font-fontPrim text-xl w-[25rem] sm:w-[20rem] px-3 focus:outline-none py-2 rounded-[12px]" required/>
  </div>
  <div className="flex items-center justify-center gap-5 mb-4 sm:flex-col">
  <label className=' text-3xl mb-2'>Email:</label>
  <input type="email" name="from_email" className="text-black font-fontPrim text-xl w-[25rem]  sm:w-[20rem] px-3 focus:outline-none py-2 rounded-[12px]" required/>
  </div>
  <div className="flex items-center justify-center gap-4 sm:flex-col">
  <label className=' text-3xl mb-2'>Message:</label>
  <textarea name="message" className="text-black font-fontPrim text-xl w-[25rem]  sm:w-[20rem] h-32 px-3 focus:outline-none py-2 rounded-[12px] resize-none"  required/>
  </div>
   <input type="submit" value="Send" className=' bg-white mt-10 text-black font-fontPrim text-xl cursor-pointer px-5  focus:outline-none py-2 rounded-[12px]' />

    </form>
</footer>
    </>
  )
}

export default ContactPage
