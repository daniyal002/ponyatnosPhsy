import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ image, title, cases }) => (
  <div className="flex flex-col gap-y-4 items-start mb-[0px] md:mb-[56px] mx-4 ">
    <div className="flex  items-start gap-x-4">
      <img src={image} alt={title} width='32' height='32' />
      <h4 className="text-[16px] font-semibold text-white">{title}</h4>
    </div>
    <ul className="list-disc ml-[70px]">
      {cases.map((cases, index) => (
        <li key={index} className="text-[14px] text-white text-left">
          {" "}
          {cases}
        </li>
      ))}
    </ul>
  </div>
);

const SliderStartCases = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "5px",
        },
      },
    ],
    // variableWidth: true,
  };

  const slides = [
    {
      id: 1,
      image: "./images/1.svg",
      title: "Наладить контакт в семье:",
      cases: [
        "наладить отношение с ребёнком;",
        "наладить отношение с подростком;",
        "наладить отношение с родителем;",
        "пережить развод родителей;",
        "победить детские травмы (простить родителей или простить себя);",
        "помощь в вопросе лгбт и принятие родственниками;",
        "вопросы особого родительства (помощь родителям особых детей).",
      ],
    },
    {
      id: 2,
      image: "./images/1.svg",
      title: "Наладить контакт с окружающими:",
      cases: [
        "понять причины неприятия в коллективе;",
        "преодолеть неуверенность в самореализации;",
        "избавиться от зависимости от виртуального мира;",
        "построение коммуникаций в деловой среде;",
        "победить боязнь публичных выступлений;",
        "пережить общественное осуждение;",
        "вопросы иммигрантства (чувство изоляции, ностальгия, уныние, идеализация родины...).",
      ],
    },
    {
      id: 3,
      image: "./images/1.svg",
      title: "Наладить контакт с собой:",
      cases: [
        "помочь с неконтролируемыми эмоциями;",
        "выйти из депрессии или апатии;",
        "избавиться от панических атак;",
        "пережить стрессы и неврозы;",
        "победить неуверенность в себе;",
        "помочь при травмирующем событии (горе, утрата, переезд, абьюз...);",
        "избавиться от навязчивых мыслей;",
        "избавиться от зависимости;",
        "победить фобию;",
        "преодолеть кризис;",
        "восстановить интерес к жизни;",
      ],
    },
    {
      id: 4,
      image: "./images/1.svg",
      title: "Наладить контакт с противоположным полом:",
      cases: [
        "вернуть взаимопонимание;",
        "преодолеть семейный кризис;",
        "научиться контролировать ревность;",
        "пережить измену;",
        "пережить расставание;",
        "пережить развод;",
        "избавиться от зависимых или токсичных отношений;",
        "определить нарциссические отношения;",
        "вылечить нарушение сексуальной жизни;",
        "преодолеть страх перед близкими отношениями;",
        "побороть недоверие к представителям противоположного пола;",
      ],
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

export default SliderStartCases;
