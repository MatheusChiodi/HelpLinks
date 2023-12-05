import links from '../context/links';
export default function Modal({ onModal, onCategory }) {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity ease-out duration-300 z-10 overflow-y-auto">
      <div
        className="w-[300px] h-[400px] absolute top-[15%] left-[50%] translate-x-[-50%] rounded-[20px] bg-white border"
        style={{
          boxShadow:
            '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="p-4">
          <div className="w-full flex justify-between border-b  border-gray-300  mb-4">
            <h2 className="text-lg font-bold text-[#44475A]">Categorias</h2>
            <button
              className="text-lg font-bold text-[#44475A] hover:text-[#FF5555] transition-all duration-500"
              onClick={onModal}
            >
              X
            </button>
          </div>

          <div className="overflow-auto h-[300px]">
            {links.map((link) => (
              <div
                key={link.id}
                onClick={() => onCategory(link.id)}
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
    </div>
  );
}
