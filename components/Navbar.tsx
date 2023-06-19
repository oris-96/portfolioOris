/** @format */

'use client';

import React, { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './ui/menubar';
import { Button } from './ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

  return (
    <div className="flex justify-center p-4 relative">
      <Menubar className="flex justify-between max-w-full p-4 h-14 ">
        <div>
          <MenubarMenu>
            <MenubarTrigger>
              <span className=" font-mono">ORIS</span>{' '}
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
            <MenubarTrigger>Home</MenubarTrigger>
            <MenubarContent>
              <MenubarItem> Sample 1</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Case Studies</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className=" text-black "> Sample 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Github</MenubarTrigger>
            <MenubarContent>
              <MenubarItem> Sample 3</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Contact</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <Button>
                <Image
                  src="/assets/download.svg "
                  width={24}
                  height={22}
                  alt="download"
                />
                Resume
              </Button>
            </MenubarTrigger>
          </MenubarMenu>

          <Moon />
        </nav>
      </Menubar>

      <section
        className={` ${
          menuOpen ? 'bg-white w-screen absolute top-40' : 'hidden'
        } lg:hidden`}
      >
        <ul
          className={` ${'flex flex-col space-y-5 justify-center items-center min-h-[250px]'} `}
        >
          <li className="hover:underline">Home</li>
          <li className="hover:underline"> Case Studies </li>
          <li className="hover:underline"> Github </li>
          <li className="hover:underline"> Contact </li>
          <li className="hover:underline">Resume</li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
