import Header from './components/Header';
import Modal from './components/Modal';
import Links from './screen/Links';
import { useState } from 'react';

export default function App() {
  const [modalExist, setModalExist] = useState(false);

  const handleModal = () => {
    setModalExist(!modalExist);
  };

  return (
    <div className="w-full h-screen bg-[#F8F8F2] pb-3">
      <Header onModal={handleModal} />
      <div className="max-w-4xl mx-auto overflow-auto h-[90%] pt-4">
        <Links />
        <div className="h-[50px]"></div>
      </div>
      {modalExist ? (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <Modal onModal={handleModal} />
        </div>
      ) : null}
    </div>
  );
}
