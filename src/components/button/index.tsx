import { Button as ButtonUI } from "@/components/ui/button";
import { ButtonTypeEnum, type ButtonProps } from "./types";
import { cn } from "@/lib/utils";

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  className,
  ...buttonProps
}) => {
  if (buttonType === ButtonTypeEnum.PRIMARY) {
    return (
      <ButtonUI {...buttonProps} className={`${cn(className)}`}>
        {children}
      </ButtonUI>
    );
  }

  if (buttonType === ButtonTypeEnum.SECONDARY) {
    return (
      <ButtonUI {...buttonProps} className={`${cn(className)}`}>
        {children}
      </ButtonUI>
    );
  }
};
