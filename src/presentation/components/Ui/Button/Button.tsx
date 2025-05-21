import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-transparent border-2 border-[#f5c518] text-[#f5c518] rounded-lg hover:bg-[#f5c518] hover:text-black transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
