import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';
//მოდელი უნდა გამოჩნდეს თუ არა, თავიდან false არი ანუ ჩანს
export default function PortalExample({ cart }) {
  const [showModal, setShowModal] = useState(false);
// ეს useEffect ჰუქი მუშაობს ყოველ ჯერზე, როდესაც showModal შეიცვლება
// როდესაც showModal არის true სქროლვა აღარ შეგიძლია - document.body.style.overflow = 'hidden'
// როდესაც showModal არის false, ბრუნდება გვერდის სქროლვას - document.body.style.overflow = 'auto'
// cleanup ფუნქცია იმისთვისაა, რომ როდესაც კომპონენტი გაიშლება ან showModal შეიცვლება, სქროლვის პარამეტრი ისევ auto-ად დაბრუნდეს
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]); 

 // setShowModal(true)} ანუ როცა დავაჭერთ showmodal იქნება True და ამით ის გამოჩნდება ან არ გამოჩნდება
 // {showModal && ესეიგი თუ არის ის True კოდი გამოჩნდება ხოლო თუ არა არაფერი რენდერირდება 
 // createPortal - ModalContent ირჩევა document.body-ში, რაც ნიშნავს რომ ის რენდერირდება პირდაპირ HTML დოკუმენტის <body>-ში,
 // არა დანარჩენი App-ის კომპონენტების შორის.
 // setShowModal(false)} - როცა მომხმარებელი დააჭერს showmodal false ხდება და modal აღარ გამოჩნდება
 // როდესაც დააჭერენ "Close" ღილაკს , setShowModal(false) მიიღებს და მოდალი დაიხურება.
  return ( 
    <>
      <button className="confirm-order" onClick={() => setShowModal(true)}>
        Confirm Order
      </button>
      {showModal &&
        createPortal(
          <>
            <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
            <ModalContent cart={cart} onClose={() => setShowModal(false)} />
          </>,
          document.body
        )}
    </>
  );
}