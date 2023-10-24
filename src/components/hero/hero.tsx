import Carousel from "react-multi-carousel";

const Hero = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full px-5 md:px-20 pt-32">
      <div className="flex gap-8 items-center justify-center flex-col text-center">
        <h1 className="text-2xl md:text-4xl font-medium">
          The project that inspired the modern{" "}
          <b className="font-bold">CryptoArt movement</b>
        </h1>
        <p className="text-base md:text-xl">
          10,000 unique collectible characters with proof of ownership stored on
          the Ethereum blockchain.
        </p>
        <button className="py-2 px-5 bg-white text-black rounded-3xl font-medium">
          Mint <b>now</b>{" "}
        </button>
      </div>
      <div className="mt-12">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          draggable={true}
          infinite
          arrows={false}
        >
          {data.map((item, idx) => (
            <img key={idx} className="px-2" src={item.img} alt="nfts" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;

const data = [
  {
    img: "/images/img-1.png",
  },
  {
    img: "/images/img-2.png",
  },
  {
    img: "/images/img-3.png",
  },
  {
    img: "/images/img-4.png",
  },
  {
    img: "/images/img-5.png",
  },
  {
    img: "/images/img-6.png",
  },
];
