import  { ReactNode } from 'react';

type button = {
  innertext: string;
  style: string;
  icon?: ReactNode; 
};



export const Button = ({ innertext, style, icon }: button) => {
   return (
     <div className={style + " cursor-pointer flex items-center"}>
       {icon && <div className="mr-2">{icon}</div>} {/* Render icon if provided */}
       {innertext}
     </div>
   );
 };
 