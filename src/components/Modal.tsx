import { useEffect, useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`modal ${isOpen ? "hidden md:block p-10 fixed top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-2xl" : "hidden"}`}
    >
      <div onClick={closeModal}></div>
      <div>
        <div>
          <div>
            <h2 className="font-bold text-2xl">Avviso importante</h2>
          </div>
          <p className="mt-2">
            Questo sito è stato fatto a scopo didattico.
            <br />
            Esso non offre alcun servizio di vendita di prodotti online.
            <br />
            Non tutte le funzionalità sono state implementate per questioni di
            tempo.
            <br />
            Le funzioni utilizzabili sono la visualizzazione della scheda di un
            prodotto specifico (AirPods) e il routing tra le varie pagine
            mediante la navbar.
          </p>
          <div>
            <button
              onClick={closeModal}
              className="cursor-pointer hover:underline mt-10"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
