/** @format */
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation';

const Page = () => {
  const mail = 'alanre427@gmail.com';
  const router = useRouter()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(mail);
    alert('mail copied ');
  };

  const form = useRef()

  // @ts-ignore
  const handSendEmail = async (e) => {

    try {
      e.preventDefault();

      // @ts-ignore
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as any,
        process.env.NEXT_PUBLIC_EMAIL_KEY as string,
      );

      alert('Email sent successfully')

      router.push("/")


      
    } catch (error) {
      alert('Error Sending a Message')
    }
  

  }

  return (
    <div>
      <div className=" flex mt-6 flex-col items-center justify-center p-10 font-mono lg:grid lg:grid-cols-2 ">
        <section className="flex flex-col mb-8 justify-center items-center">
          <div className="flex flex-col justify-start mb-5">
            <p>Contact</p>
            <p className=" text-25 text-heroTextColor ">Get In Touch</p>
          </div>
          <Image src="/talk.png" width={256} height={128} alt="communicate" />
        </section>
        <section className="lg:flex lg:flex-col ">
          <div className=" bg-white p-5 w-96 min-h-min rounded-md drop-shadow-xl ">
            <p className="text-sendBg mb-4 ">Send Me A Message</p>

            {/* @ts-ignore */}
            <form ref={form} onSubmit={handSendEmail}>
              <div className="mb-4">
                <label
                  className="block text-8 text-heroTextColor"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full bg-contactBg rounded-md caret-blue-400 p-1 "
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  max={15}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-8 text-heroTextColor"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="w-full bg-contactBg rounded-md caret-blue-400 p-1 "
                  id="email"
                  name="user_email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-heroTextColor text-8 " htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="rounded-md bg-contactBg text-heroTextColor caret-blue-400 p-1"
                  name="message"
                  id="message"
                  cols={33}
                  maxLength={250}
                  rows={5}
                  required
                ></textarea>
              </div>
              <Button className="bg-buttonBg w-full  " type="submit">
                <span className="text-10 font-light ">Send Message</span>
              </Button>
            </form>
          </div>
          <div className="w-96 min-h-min mt-3 bg-white drop-shadow-xl rounded-md p-2 ">
            <div className="flex gap-2 justify-center items-center">
              <label htmlFor="email">
                <Image
                  className="w-8 h-8"
                  src="/mail.svg"
                  width={256}
                  height={128}
                  alt="mail"
                />
              </label>
              <div className="flex w-full bg-contactBg rounded-md p-1 items-center justify-between ">
                <div>
                  <p className="text-mailColor text-8 ">alanre427@gmail.com</p>
                </div>
                <div>
                  <p>
                    <Image
                      onClick={handleCopy}
                      className="w-4 h-4 cursor-pointer"
                      src="/copy.svg"
                      width={256}
                      height={128}
                      alt="copy"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
