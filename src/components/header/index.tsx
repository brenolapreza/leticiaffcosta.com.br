import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import { Menu } from "./components/menu";
export const Header = () => {
  return (
    <header className="flex items-center justify-center sticky top-0 w-full backdrop-blur-md">
      <div className="max-w-containerMain w-containerMain mx-auto flex justify-between py-2">
        <Image src={Logo} alt="Logo" className="" />
        <Menu />
      </div>
    </header>
  );
};
