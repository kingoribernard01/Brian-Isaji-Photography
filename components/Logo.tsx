import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
       {/* Outer Circle (Lens Element) */}
       <path d="M50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5Z" stroke="currentColor" strokeWidth="2"/>
       
       {/* B */}
       <path d="M35 30V70" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
       <path d="M35 30H52C62 30 62 50 52 50H35" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
       <path d="M35 50H54C66 50 66 70 54 70H35" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
       
       {/* I */}
       <path d="M72 30V70" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
    </svg>
  );
};

export default Logo;