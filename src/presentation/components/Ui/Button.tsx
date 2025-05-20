interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

const LogSignButton = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border border-[#f5c518] text-[#f5c518] px-4 py-2 rounded font-bold
      hover:bg-[#f5c518] hover:text-black cursor-pointer transition"
    >
      {children}
    </button>
  );
};

export default LogSignButton;
