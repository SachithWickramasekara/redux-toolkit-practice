const Cards = ({
  cardTitle,
  cardSrc,
  cardPrice,
  OnclickFunction,
  buttonBg,
  buttonText,
  buttonTextColor,
  hoverBg,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 h-full border border-[#D9D9D9] rounded-xl ">
      <div className="w-full max-w-[300px] max-h-[700px] h-full flex justify-center items-center p-3">
        <img className=" w-full object-contain" alt="Image" src={cardSrc} />
      </div>
      <div className="flex items-center [font-family:'Poppins-Regular',Helvetica] font-normal text-[#111518] text-lg px-3">
        {cardTitle}
      </div>
      <div className="w-full max-w-xs [font-family:'Poppins-Regular',Helvetica] font-normal text-[#3f3f3f] text-base px-3">
        {cardPrice}
      </div>
      <button
        className={`${buttonBg} rounded-b-md p-2 w-full text-left [font-family:'Poppins-Regular',Helvetica] font-normal ${buttonTextColor} text-base hover:scale-95 group hover:rounded-md duration-300 ${hoverBg}`}
        onClick={OnclickFunction}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Cards;
