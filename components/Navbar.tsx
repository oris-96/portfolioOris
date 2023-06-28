/** @format */

'use client';

import React, { useState } from 'react';
import { Moon, Menu, X, Download } from 'lucide-react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './ui/menubar';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

  return (
    <div className="flex justify-center p-4 relative">
      <Menubar className="flex lg:justify-between gap-36 max-w-full py-4 h-14 ">
        <div>
          <MenubarMenu>
            <MenubarTrigger>
              <Image
                className="object-contain w-36 rounded-lg  "
                src={'/oris.png'}
                width={256}
                height={128}
                alt="oris"
              />
            </MenubarTrigger>
          </MenubarMenu>
        </div>

        {menuOpen ? (
          <X onClick={handleMenuClick} />
        ) : (
          <Menu
            onClick={handleMenuClick}
            className="lg:hidden block h-6 w-6 cursor-pointer"
          />
        )}

        <nav className={`${'lg:flex lg:items-center hidden'} `}>
          <MenubarMenu>
            <Link href="/">
              <MenubarTrigger className="font-mono">Home</MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link href="/case-studies">
              <MenubarTrigger className="font-mono">
                Case Studies
              </MenubarTrigger>
            </Link>

            <MenubarContent>
              <Link href="/case-studies/details-morent">
                <MenubarItem className=" text-black "> Morrent </MenubarItem>
              </Link>
              <Link href="/case-studies/details-jobit">
                <MenubarItem className=" text-black "> Jobit </MenubarItem>
              </Link>
              <MenubarItem className=" text-black "> Trip Guide </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <a
              href="https://github.com/oris-96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenubarTrigger className="font-mono">Github</MenubarTrigger>
            </a>
          </MenubarMenu>

          <MenubarMenu>
            <Link href="/contact">
              <MenubarTrigger className="font-mono">Contact</MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <a href="/IBRAHIMABDULKAREEM.pdf" download>
                <Button className="font-mono bg-buttonBg">
                  <Download />
                  Resume
                </Button>
              </a>
            </MenubarTrigger>
          </MenubarMenu>

          <Moon />
        </nav>
      </Menubar>

      <section
        className={` ${
          menuOpen
            ? ' animate-fade-down bg-white w-screen absolute top-40'
            : 'hidden'
        } lg:hidden`}
      >
        <ul
          className={` ${'flex flex-col space-y-5 justify-center items-center min-h-[250px]'} `}
        >
          <Link href="/">
            <li className="hover:underline">Home</li>
          </Link>
          <Link href="/case-studies">
            <li className="hover:underline"> Case Studies </li>
          </Link>
          <a
            href="https://github.com/oris-96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="hover:underline"> Github </li>
          </a>
          <Link href="/contact">
            <li className="hover:underline"> Contact </li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
