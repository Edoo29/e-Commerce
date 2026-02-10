import playstation from "../../public/playstation.png";
import airpods from "../../public/airpods.png";
import type { StarValutationProps } from "../types";
import type { CardProps } from "../types";

const Hero = () => {
  const cards: CardProps[] = [
    {
      name: "Apple AirPods Pro",
      price: 479.99,
      isOnSale: true,
      discount: 25,
      starValutation: 5,
      img: airpods,
      imgWidth: 200,
    },
    {
      name: "Playstation 5",
      price: 499.99,
      starValutation: 5,
      img: playstation,
      bannerText: "Disponibilità immediata",
      imgWidth: 375,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-evenly mt-16">
      <h1 className="font-extrabold text-6xl">
        Il lato <span className="text-red-500">intelligente</span>
        <br />
        dello shopping.
      </h1>
      <div className="flex justify-center gap-20 w-full mt-4">
        {cards.map((card, index) => (
          <Card className="w-1/3" key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  name,
  className,
  bannerText,
  price,
  isOnSale,
  discount,
  starValutation,
  img,
  imgWidth,
}: CardProps) => {
  const discountedPrice =
    isOnSale && String(price - (price * discount) / 100).slice(0, -2);

  return (
    <div className={className}>
      <div className="py-10 mt-10 bg-white rounded-3xl hover:shadow-2xl text-center items-center cursor-pointer transition-all duration-500 flex flex-col justify-between gap-10 hover:-translate-y-2">
        <div
          className={`${isOnSale ? "bg-red-500" : "bg-green-500"} w-full text-white py-4 px-2 text-md`}
        >
          {isOnSale ? "In offerta - " + discount + "% di sconto" : bannerText}
        </div>
        <img src={img} title="airpods" alt="airpods" width={imgWidth} />
        <div className="text-center">
          <StarValutation number={starValutation} />
          <p className="text-xl">{name}</p>
          <div className="flex justify-center gap-3 mt-4">
            <span className={`text-xl ${isOnSale ? "line-through" : ""} mt-1`}>
              €{price}
            </span>
            {isOnSale && (
              <span className="text-2xl font-bold text-red-500">
                €{discountedPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StarValutation = ({ number }: StarValutationProps) => {
  return (
    <div className="flex justify-center">
      {Array.from(Array(number).keys()).map((_, index) => (
        <span key={index}>
          <span className="text-yellow-400 text-3xl">&#x2605;</span>
        </span>
      ))}
      {Array.from(Array(5 - number).keys()).map((_, index) => (
        <span key={index}>
          <span className="text-yellow-400 text-3xl">&#x2606;</span>
        </span>
      ))}
    </div>
  );
};

export default Hero;
