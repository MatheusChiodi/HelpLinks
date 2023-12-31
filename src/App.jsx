import Header from './components/Header';
import Modal from './components/Modal';
import Category from './screen/Category';
import Links from './screen/Links';
import { useState } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import ReturnHome from './components/ReturnHome';

export default function App() {
  const [uiState, setUiState] = useState({ modalExist: false, category: null });
  const [search, setSearch] = useState('');

  const toggleModal = () =>
    setUiState({ ...uiState, modalExist: !uiState.modalExist });
  const changeCategory = (id) =>
    setUiState({ modalExist: false, category: id });

  return (
    <>
      <div className="w-full pb-3">
        <Header
          onModal={toggleModal}
          category={uiState.category}
          onSearch={setSearch}
        />
        {uiState.category ? (
          <>
            <Links
              category={uiState.category}
              onCategory={changeCategory}
              search={search}
            />
            <ReturnHome onCategory={changeCategory} />
          </>
        ) : (
          <div className="max-w-4xl mx-auto overflow-auto pt-[80px] pb-[20px]">
            <Category onCategory={changeCategory} search={search} />
          </div>
        )}

        <ScrollToTopButton />
      </div>
      {uiState.modalExist && (
        <Modal onModal={toggleModal} onCategory={changeCategory} />
      )}
    </>
  );
}
