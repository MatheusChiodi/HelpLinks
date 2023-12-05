import { useState, useEffect } from 'react';

const ReturnHome = ({ onCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Função que verifica a posição de rolagem
  const toggleVisibility = () => {
    if (window.scrollY > 380) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento de rolagem
    window.addEventListener('scroll', toggleVisibility);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="ReturnHome">
      {isVisible && (
        <div
          title="Voltar para o início"
          onClick={() => onCategory(null)}
          className="buttonReturnHome"
          style={{
            boxShadow:
              '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
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
            className="lucide lucide-undo-2"
          >
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ReturnHome;
