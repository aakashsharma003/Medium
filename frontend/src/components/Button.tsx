import { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  innertext: string;
  style: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ innertext, style, icon, onClick }: ButtonProps) => {
  return (
    <div className={`${style} cursor-pointer flex items-center`} onClick={onClick}>
      {icon && <div className="mr-2">{icon}</div>} {/* Render icon if provided */}
      {innertext}
    </div>
  );
};

export default Button;
