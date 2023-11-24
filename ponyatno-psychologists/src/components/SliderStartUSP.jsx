import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ image, title, description }) => (
  <div className="flex flex-col gap-y-4 items-center mb-[56px] ">
    <img src={image} alt={title} />
    <h4 className="text-[22px] font-semibold">{title}</h4>
    <p className="text-[16px] text-[#171717] text-center w-[200px]">
      {description}
    </p>
  </div>
);

const SliderStartUSP = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
    // variableWidth: true,
  };

  const slides = [
    {
      id: 1,
      image: "./images/ic-main-why-opit-1.svg",
      title: "Опыт",
      description:
        "Только проверенные психологи и терапевты готовые вам помочь",
    },
    {
      id: 2,
      image: "./images/ic-main-why-komfort.svg",
      title: "Комфорт",
      description:
        "Контакт с психологом там, где вам максимально удобно и спокойно",
    },
    {
      id: 3,
      image: "./images/ic-main-why-anonim.svg",
      title: "Анонимность",
      description: "Подбор психолога анонимно и без регистрации",
    },
    {
      id: 4,
      image: "./images/ic-main-why-dostup.svg",
      title: "Доступность",
      description: "Вам не нужно устанавливать новое ПО или регистрироваться",
    },
  ];

  return (
    <Slider
      {...settings}
      className="flex justify-center max-w-[288px] md:max-w-[698px] lg:max-w-[940px] m-auto "
    >
      {slides.map((slide) => (
        <Slide key={slide.id} {...slide} />
      ))}
    </Slider>
  );
};

export default SliderStartUSP;
