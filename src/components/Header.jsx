import logo from '../../public/logo.png';

export default function Header({ onModal }) {
  return (
    <div className="w-full fixed z-50">
      <div className="bg-gray-800 rounded-b-lg h-[60px] flex items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 rounded-full border border-gray-700 p-1"
          />
          <input
            className="w-full h-10 bg-gray-800 text-white text-lg outline-none placeholder-gray-400 px-4 py-2 border-l"
            placeholder="Pesquise"
          />
        </div>
        <button
          className="h-[40px] bg-gray-500 hover:bg-[#FF5555] text-white text-lg px-2 rounded-lg shadow-md transition duration-300"
          onClick={onModal}
        >
          Categorias
        </button>
      </div>
    </div>
  );
}
