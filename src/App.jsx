import Header from './components/Header';
import Modal from './components/Modal';
import Links from './screen/Links';

export default function App() {
  return (
    <div className="w-full h-screen bg-[#F8F8F2] pb-3">
      <Header />
      <div className="max-w-4xl mx-auto overflow-auto h-[90%] pt-4">
        <Links />
        <div className="h-[50px]"></div>
      </div>
      <Modal />
    </div>
  );
}
