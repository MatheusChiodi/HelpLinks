import Header from './components/Header';
import Modal from './components/Modal';
import Category from './screen/Category';
import Links from './screen/Links';
import { useState } from 'react';

export default function App() {
  const [modalExist, setModalExist] = useState(false);
  const handleModal = () => {
    setModalExist(!modalExist);
  };

  const [category, setCategory] = useState(false);
  const handleCategory = (id) => {
    setCategory(id);
    setModalExist(false);
  };

  return (
    <div className="w-full h-screen bg-[#F8F8F2] pb-3">
      <Header onModal={handleModal} />
      {category ? (
        <Links category={category} onCategory={handleCategory}/>
      ) : (
        <div className="max-w-4xl mx-auto overflow-auto h-[90%] pt-4">
          <Category onCategory={handleCategory} />
          <div className="h-[50px]"></div>
        </div>
      )}

      {modalExist ? (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <Modal onModal={handleModal} onCategory={handleCategory} />
        </div>
      ) : null}
    </div>
  );
}
