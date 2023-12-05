import logo from '../../public/logo.png';

export default function Header({ onModal }) {
  return (
    <div className="w-full fixed z-50">
      <div className="bg-gray-800 rounded-b-lg h-[60px] flex items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <a
            href="https://matheuschiodi.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer w-[70px] transition-all hover:scale-105 duration-500"
          >
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 rounded-full border border-gray-700 p-1"
            />
          </a>

          <input
            className="w-full h-10 bg-gray-800 text-white text-lg outline-none placeholder-gray-400 px-4 py-2 border-l"
            placeholder="Pesquise"
          />
        </div>
        <button
          className="h-[40px] bg-gray-500 hover:bg-[#FF5555] text-white text-lg px-2 rounded-lg shadow-md transition duration-300"
          onClick={onModal}
        >
          <span className="md:block hidden">Categorias</span>
          <span className="md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layers-3"
            >
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
              <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
