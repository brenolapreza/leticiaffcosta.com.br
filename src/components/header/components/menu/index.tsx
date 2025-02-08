import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { menuLinks } from "./constants/menu-links";
import { AlignJustify } from "lucide-react";

export const Menu = () => {
  return (
    <>
      <Menubar className="p-0 bg-transparent border-none shadow-none w-auto">
        <MenubarMenu>
          <MenubarTrigger className="p-0 bg-none p-">
            <AlignJustify />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};
