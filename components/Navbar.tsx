/** @format */

import React from 'react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './ui/menubar';

const Navbar = () => {
  return (
    <Menubar className="flex justify-center">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> Sample 1</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>File 2</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className=" text-black "> Sample 2</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>File 3</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> Sample 3</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
