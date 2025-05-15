interface Props {
  onClick: () => void;
  children: React.ReactNode;
}


const CloseButton = ({onClick, children}: Props) => {
  return (
    <button
        onClick={onClick}
        className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white bg-opacity-90
        flex items-center justify-center shadow-lg hover:bg-[#f5c518] transition"
        aria-label="Close"
      >
        <span className="text-2xl text-black font-bold">{children}</span>
      </button>
  )
}

export default CloseButton
