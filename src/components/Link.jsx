export default function Link({ category,bgColor,textColor }) {
  return (
    <div
      className="w-[150px] h-[150px] rounded-[15px] flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-500"
      style={{
        boxShadow:
          '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        backgroundColor: bgColor,
      }}
    >
      <p className="text-center w-100 p-2">
        <span
          className="text-[#F8F8F2] text-[14px] font-bold"
          style={{ color: textColor }}
        >
          {category}
        </span>
      </p>
    </div>
  );
}
