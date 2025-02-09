"use client";
import { useDimensions } from "@/hooks/useDimensions";
import { Circle } from "@phosphor-icons/react/dist/ssr";

export const Tag = () => {
  const { isMobile } = useDimensions();

  const customerSuccess = isMobile ? "CS" : "Customer Success";

  return (
    <div className="flex gap-5 items-center  text-center ">
      <span>Marketing</span>
      <Circle weight="fill" size={6} />
      <span>{customerSuccess}</span>
      <Circle weight="fill" size={6} />
      <span>Design</span>
    </div>
  );
};
