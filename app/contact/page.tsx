/** @format */
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const page = () => {
  const mail = 'alanre427@gmail.com';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(mail);
    alert('mail copied ');
  };

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

            <div className="mb-4">
              <label className="block text-8 text-heroTextColor" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full bg-contactBg rounded-md "
                id="name"
                type="text"
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
                className="w-full bg-contactBg rounded-md"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="text-heroTextColor text-8 " htmlFor="message">
                Your Message
              </label>
              <textarea
                className="rounded-md bg-contactBg text-heroTextColor"
                name="message"
                id="message"
                cols={34}
                rows={5}
              ></textarea>
            </div>
            <Button className="bg-buttonBg w-full  " type="submit">
              <span className="text-10 font-light ">Send Message</span>
            </Button>
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

export default page;
