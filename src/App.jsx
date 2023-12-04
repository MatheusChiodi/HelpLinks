import Header from './components/Header';
import Modal from './components/Modal';
import Category from './screen/Category';
import Links from './screen/Links';
import { useState } from 'react';

export default function App() {
  const [uiState, setUiState] = useState({ modalExist: false, category: null });

  const toggleModal = () =>
    setUiState({ ...uiState, modalExist: !uiState.modalExist });
  const changeCategory = (id) =>
    setUiState({ modalExist: false, category: id });

  return (
    <div className="w-full h-screen bg-[#F8F8F2] pb-3">
      <Header onModal={toggleModal} />
      {uiState.category ? (
        <Links category={uiState.category} onCategory={changeCategory} />
      ) : (
        <div className="max-w-4xl mx-auto overflow-auto pt-[80px] pb-[20px]">
          <Category onCategory={changeCategory} />
        </div>
      )}
      {uiState.modalExist && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <Modal onModal={toggleModal} onCategory={changeCategory} />
        </div>
      )}
    </div>
  );
}