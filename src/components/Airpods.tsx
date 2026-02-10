import Navbar from "./Navbar";
import airpods from "../assets/airpods.png";
import { StarValutation } from "./Hero";

const Airpods = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center p-10 justify-evenly gap-4 mt-20">
        <div className="flex flex-col gap-10">
          <h2 className="font-extrabold text-4xl">Scheda prodotto</h2>
          <img
            src={airpods}
            alt="airpods"
            width={400}
            className="rounded-3xl"
          />
        </div>
        <div>
          <p className="text-lg mt-20">
            Apple AirPods Max Cuffie, Cancellazione attiva del rumore di livello
            <br />
            pro, Modalità Trasparenza, Audio spaziale personalizzato,
            <br />
            Ricarica USB-C, Arancione
          </p>
          <p className="flex gap-5">
            <StarValutation number={5} />
            <span className="mt-2">(3.400)</span>
          </p>
          <hr className="mt-5 mb-5" />
          <div className="flex justify-between">
            <p className="text-2xl font-bold">&euro;359.99</p>
            <p className="mt-2">I prezzi degli articoli includo l'IVA.</p>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <button className="py-3 rounded-full bg-white font-bold cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              ACQUISTA ORA
            </button>
            <button className="py-3 rounded-full bg-black text-white font-bold cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              AGGIUNGI AL CARRELLO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airpods;
