'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Footer({ contactRef }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const form = useRef();

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const serviceId = process.env.NEXT_SERVICE_ID;
  const templateId = process.env.NEXT_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please input Email Address!');
      return;
    }
    if (!name) {
      setError('Please input Name!');
      return;
    }
    if (!message) {
      setError('Message field cannot be empty!');
      return;
    }

    setError(''); 

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: apiKey,
      })
      .then(
        () => {
          console.log('Email sent successfully');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <>
      <footer ref={contactRef} id="contact"  className="bg-third h-full text-primary px-16 sm:px-3">
        <h2 className="text-[10rem] sm:text-[5rem] text-primary max-sm:text-4xl max-sm:py-7 font-oswald">
          Contact
        </h2>

        <p>Leave a message</p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-end justify-end gap-4">
          <div className='flex items-start sm:flex-col justify-start gap-3 mt-5 w-full'>
          <input
            placeholder="Name"
            type="text"
            name="from_name"
            className="border-b border-b-second font-open placeholder:text-primary text-primary w-full text-sm bg-transparent px-3 py-[10px]  focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            type="email"
            name="from_email"
            className="border-b border-b-second font-open placeholder:text-primary text-primary w-full  text-sm bg-transparent px-3 py-[10px]  focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            name="message"
            className="border-b border-b-second font-open placeholder:text-primary text-primary text-sm w-full  bg-transparent  px-3  resize-none focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          </div>
         
          {error && <p className="text-red-500 font-open text-sm mt-2 text-center w-full">{error}</p>}

          <input
            type="submit"
            value="Send"
            className="border-2 border-second mt-6  font-open  text-primary text-lg cursor-pointer px-10 py-3 rounded-3xl hover:bg-second "
          />


        </form>
        <div className='flex sm:flex-col sm:gap-5 items-start justify-between py-10'>
          <h2 className='font-oswald text-3xl'>
            Let's Work Together
          </h2>
          <div className='flex flex-col items-start justify-center font-open'>
            <h2 className='text-2xl font-oswald'>Contact Info</h2>
            <p className='text-sm font-normal'>ohanuchisom@gmail.com</p>
            <p className='text-sm'>+234-903-624-1606</p>
          </div>
          <p className='text-xl font-open'>@Ohanu Chisom 2025</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
