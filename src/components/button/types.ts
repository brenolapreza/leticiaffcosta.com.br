import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import type { buttonVariants } from "../ui/button";

export enum ButtonTypeEnum {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export const buttonType = {
  PRIMARY: ButtonTypeEnum.PRIMARY,
  SECONDARY: ButtonTypeEnum.SECONDARY,
} as const;

export type ButtonType = keyof typeof buttonType;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  buttonType: ButtonType;
  children?: ReactNode;
  className?: string;
}
