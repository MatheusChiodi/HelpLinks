export default function Link({
  category,
  bgColor,
  textColor,
  onClick,
  key,
  img,
}) {
  return (
    <div
      onClick={onClick}
      key={key}
      className="w-[150px] h-[150px] rounded-[15px] flex-col justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-500 p-2"
      style={{
        boxShadow:
          '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        backgroundColor: bgColor,
      }}
    >
      <img src={img} alt={category} className="w-[90px] h-[90px] mx-auto" />
      <div className="h-[50px] flex justify-center items-center">
        <p
          className="text-[#F8F8F2] text-[14px] font-bold text-center px-2"
          style={{ color: textColor }}
        >
          {category}
        </p>
      </div>
    </div>
  );
}
