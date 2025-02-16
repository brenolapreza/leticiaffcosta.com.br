"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { useDimensions } from "@/hooks/useDimensions";
import { AlignJustify } from "lucide-react";
import { menuLinks } from "./constants/menu-links";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const { isMobile } = useDimensions();
  const params = usePathname();

  if (isMobile) {
    return (
      <Menubar className="p-0 bg-transparent border-none shadow-none  flex justify-center items-center data-[state=open]:!bg-transparent">
        <MenubarMenu>
          <MenubarTrigger className="p-0 hover:bg-transparent focus:bg-transparent focus:border  data-[state=open]:!bg-transparent flex justify-center">
            <AlignJustify className="text-tertiary" />
          </MenubarTrigger>
          <MenubarContent>
            {menuLinks.map((menu) => (
              <MenubarItem key={menu.name}>{menu.name}</MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {menuLinks.map((menu) => (
            <NavigationMenuItem
              key={menu.name}
              className={`${
                params === menu.link ? "bg-primary" : "bg-transparent"
              } rounded-sm`}
            >
              <NavigationMenuTrigger
                hasArrow={menu.content && menu.content?.length > 0}
                className="bg-transparent"
              >
                {menu.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {menu.content &&
                  menu.content.map((content) => (
                    <NavigationMenuLink key={content.name}>
                      {content.name}
                    </NavigationMenuLink>
                  ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
