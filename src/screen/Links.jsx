import links from '../context/links.js';

export default function Links({ category, onCategory }) {
  return (
    <div className="w-full px-4">
      <div className="w-full h-[50px]  flex items-center  bg-[#F8F8F2] border-b border-gray-300 ">
        <button
          className="w-[30px] h-[30px] bg-white border rounded-[10px] flex items-center justify-center hover:brightness-[0.95] transition-all duration-500"
          style={{
            boxShadow:
              '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          onClick={() => onCategory(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#44475A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <p className="text-[#44475A] text-[18px] font-bold pl-2">
          {category === 1
            ? 'Inteligência Artificial'
            : category === 2
            ? 'Desenvolvimento Web'
            : category === 3
            ? 'Desenvolvimento de Jogos'
            : category === 4
            ? 'Segurança da Informação'
            : category === 5
            ? 'Realidade Virtual'
            : category === 6
            ? 'Ciência de Dados'
            : category === 7
            ? 'Desenvolvimento Mobile'
            : category === 8
            ? 'Desing'
            : category === 9
            ? 'Front-end'
            : category === 10
            ? 'Back-end'
            : category === 11
            ? 'Banco de Dados'
            : category === 12
            ? 'Ferramentas'
            : category === 13
            ? 'Achar Trabalho'
            : category === 14
            ? 'Comunidade'
            : category === 15
            ? 'Mais Projetos Meus'
            : null}
        </p>
      </div>
      {links.map((link) => {
        if (link.id === category) {
          return (
            <div
              key={link.id}
              className="w-full h-[50px] flex items-center "
            >
             
            </div>
          );
        }
      })}
    </div>
  );
}
