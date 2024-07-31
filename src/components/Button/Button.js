const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`
        ${className}
        bg-[#1B264F] text-white px-10 py-3 rounded-md shadow-md uppercase font-bold hover:bg-[#4F6AC9] transition-colors active:bg-[#697ab3]
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
