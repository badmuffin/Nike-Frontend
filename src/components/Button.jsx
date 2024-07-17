const Button = ({ label, iconURL, backgroundColor, border, textColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? backgroundColor : "bg-coral-red"}
      ${border ? border : "border-coral-red"}
      ${textColor ? textColor : "text-white"} 
      ${fullWidth ? "w-full" : ""}
      rounded-full `}
    >
      {label}
      {/* if iconURL doesn't have any images then do not use img tag */}
      {iconURL ? (
        <img
          src={iconURL}
          alt="right arrow icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      ) : (
        <span></span>
      )}
    </button>
  );
};

export default Button;
