import { PropsWithChildren, HTMLAttributes } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  disabled?: boolean;
}

const Button = ({ children, ...buttonProps }: ButtonProps): JSX.Element => {
  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>;
};

export default Button;
