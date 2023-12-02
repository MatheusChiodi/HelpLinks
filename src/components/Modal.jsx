import links from '../context/links';
export default function Modal() {
  return (
    <div
      className="w-[300px] h-[400px] absolute top-[15%] left-[50%] translate-x-[-50%] rounded-[20px] bg-white border"
      style={{
        boxShadow:
          '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 border-b border-gray-300">
          Categorias
        </h2>
        <div className="overflow-auto h-[300px]">
          {links.map((link) => (
            <div
              key={link.id}
              className="w-full h-[50px] bg-[#F8F8F2] border rounded-[15px] flex justify-between items-center px-2 mb-3 cursor-pointer hover:brightness-[0.95] transition-all duration-500"
              style={{
                boxShadow:
                  '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div
                className="w-[30px] h-[30px] bg-white border rounded-[5px]"
                style={{
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  backgroundColor: link.bgColor,
                }}
              ></div>
              <p>
                <span className="text-[#44475A] text-[14px] font-bold">
                  {link.category}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
