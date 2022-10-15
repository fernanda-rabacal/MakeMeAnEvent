import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnValue: string | React.ReactNode 
}

export const Button = ({className, type, btnValue, style, onClick }: ButtonProps) => {
  return(
    <button type={type} className={className} style={style} onClick={onClick}>
      {btnValue}
    </button>
  );
};