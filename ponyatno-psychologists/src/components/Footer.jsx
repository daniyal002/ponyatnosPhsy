import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#171717] ">
      <div className="flex justify-between pt-[58px] pb-[48px] max-w-[900px] mx-auto flex-wrap  p-3">
        <div className="w-[50%] md:w-[30%]">
          <h4 className="text-[14px] text-[#6D6D6D]">Контакт</h4>
          <ul>
            <li>
              <Link
                to="/allpsychologist"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Психологи
              </Link>
            </li>
            <li>
              <Link
                to="/howitworks"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Как это работает
              </Link>
            </li>
            <li>
              <Link
                to="/otzyvy"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Отзывы
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[50%] md:w-[30%]">
          <h4 className="text-[14px] text-[#6D6D6D]">Услуги</h4>
          <ul>
            <li>
              <Link
                to="/business"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Бизнесу
              </Link>
            </li>
            <li>
              <Link
                to="/quiz"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Подбор психолога
              </Link>
            </li>
            <li>
              <Link
                to="/semejnyjpsihologonlajn"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Семейный психолог
              </Link>
            </li>
            <li>
              <Link
                to="/Detskijpsihologonlajn"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Детский психолог
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Оплата
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[50%] md:w-[30%]">
          <h4 className="text-[14px] text-[#6D6D6D]">Полезно</h4>
          <ul>
            <li>
              <Link to="/faq" className="text-[13px] text-green-pon">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/psychologists"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Психологам
              </Link>
            </li>
            <li>
              <Link
                to="/vacancy"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Вакансии
              </Link>
            </li>
            <li>
              <Link
                to="/allpsychologist"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link
                to="/allpsychologist"
                className="text-[13px] text-green-pon hover:text-white duration-500"
              >
                Пользовательское соглашение
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
