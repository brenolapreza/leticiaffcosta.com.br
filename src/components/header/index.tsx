import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import { Menu } from "./components/menu";
export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="max-w-containerMain w-containerMain mx-auto">
        <Image src={Logo} alt="Logo" className="" />
        <Menu />
      </div>
    </header>
  );
};
