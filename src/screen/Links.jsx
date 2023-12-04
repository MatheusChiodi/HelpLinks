import links from '../context/links.js';

const CATEGORY_TITLES = {
  1: 'Inteligência Artificial',
  2: 'Desenvolvimento Web',
  3: 'Desenvolvimento de Jogos',
  4: 'Segurança da Informação',
  5: 'Realidade Virtual',
  6: 'Ciência de Dados',
  7: 'Desenvolvimento Mobile',
  8: 'Desing',
  9: 'Front-end',
  10: 'Back-end',
  11: 'Banco de Dados',
  12: 'Ferramentas',
  13: 'Achar Trabalho',
  14: 'Comunidade',
  15: 'Mais Projetos Meus',
};
const CategoryTitle = ({ categoryId }) => CATEGORY_TITLES[categoryId] || null;

const Resource = ({ resource }) => {
  return (
    <div className="w-full resource-card bg-white rounded-lg shadow transition-all hover:shadow-xl p-5 mb-5">
      <h1 className="text-xl font-semibold text-[#44475A]">{resource.name}</h1>
      <p className="text-[#44475A]">{resource.text}</p>
      <ul className="list-disc pl-5 mt-3">
        {resource.links.map((link) => (
          <li key={link.idLink}>
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-[#FF5555] transition-colors duration-500 cursor-pointer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Links({ category, onCategory }) {
  const selectedLinks = links.filter((link) => link.id === category);

  return (
    <div className="links-container min-h-screen bg-gray-100 px-3 pt-[80px]">
      <div className="category-header flex items-center justify-between p-5 bg-white shadow-lg rounded-md mb-5">
        <button
          onClick={() => onCategory(null)}
          className="back-button hover:scale-105 transition-transform duration-500"
        >
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
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <p className="category-title text-2xl font-bold text-[#44475A]">
          <CategoryTitle categoryId={category} />
        </p>
      </div>
      {selectedLinks.map((link) => (
        <div key={link.id} className="resources-wrapper">
          {link.resources.map((resource) => (
            <Resource key={resource.id} resource={resource} />
          ))}
        </div>
      ))}
    </div>
  );
}
