import logo from '../../public/logo.png';
export default function Header({ onModal }) {
  return (
    <div className="h-[60px] mx-auto">
      <div className="bg-[#44475A] rounded-b-[15px] h-[55px] flex justify-between items-center px-2">
        <div className="w-[70%] flex">
          <div className="border-r pr-3 ">
            <img
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] bg-[#F8F8F2] rounded-[50px]"
            />
          </div>

          <input
            className="w-[95%] h-[90%] bg-[#44475A] text-[#F8F8F2] text-[20px] outline-none mt-[5px] pl-3"
            placeholder="Pesquise"
          />
        </div>

        <button
          className="h-[60%] px-2 rounded-[15px] bg-[#FF5555] text-[#F8F8F2] text-[20px] outline-none hover:brightness-90 transition-all duration-500"
          style={{
            boxShadow:
              '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          onClick={onModal}
        >
          <p>Categorias</p>
        </button>
      </div>
    </div>
  );
}
