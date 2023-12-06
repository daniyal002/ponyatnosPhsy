import React from 'react';
import TableForB from './tableForB';
import WhyChooseUs from './WhyChooseUs';
import Warning from './Warning';

const BusinessPsyholog = () => {
  return (
    <div className="w-full">
      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex items-center pt-[105px] pb-[105px]">
          <div className="max-w-[860px]  flex flex-col justify-center mx-3 p-3 lg:pl-[100px] items-start gap-y-[45px]  ">
            <h1 className="text-[30px] md:text-[64px] md:leading-[80px] font-semibold text-[#171717] ">
              Психологическая поддержка сотрудников
            </h1>
            <h4 className="text-[20px] md:text-[24px] text-[#171717]">
              Заботимся об эффективности и здоровье ваших сотрудников и улучшаем
              климат в команде
            </h4>
            <form className="w-full items-stretch flex flex-col  gap-x-5 gap-y-5 md:flex-row md:items-start">
              <input
                type="email"
                className="bg-[#eef0eb] px-5 rounded-lg h-[58px]  outline-none border-[1px] border-[#d9dbd7]  md:w-[40%]"
                placeholder="E-mail"
              />
              <button
                type="submit"
                className="md:w-[18%] bg-green-pon p-[5px_68px] rounded-lg h-[50px] text-[17px] text-white  font-semibold shadow-[0px_0px_10px_0px] shadow-[#00000030]"
              >
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-[url('/images/bg_2.svg')] w-full h-[60vh] lg:h-[80vh] bg-no-repeat bg-cover bg-fixed"></section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div class="flex flex-col items-center gap-y-[40px] p-3">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Зачем инвестировать в психологическое <br /> здоровье сотрудников?
            </h2>
            <div class="t-section__descr t-descr t-descr_xl t-margin_auto">
              <p className="text-[18px] md:text-[22px] text-[#171717] text-center max-w-[560px]">
                Около <strong>98%</strong>
                <strong> предприятий </strong>с численностью сотрудников более
                1000 человек в англоязычных странах используют услуги
                психологической поддержки сотрудников и вот почему:
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center px-5 ">
            <div className="flex justify-between gap-x-[40px] items-start flex-col-reverse lg:flex-row lg:items-center mb-[75px]">
              <div className="flex flex-col gap-y-5 w-full">
                <h3 className="text-[22px] md:text-[26px] text-[#171717] font-semibold">
                  Увеличение эффективности
                </h3>
                <p className="text-[16px] md:text-[18px] text-[#171717] max-w-[400px] font-light">
                  Правильная психологическая поддержка не только значительное
                  увеличит личную эффективность сотрудника, но и улучшит
                  коммуникацию в команде, снизит влияние проблем на дистресс**,
                  снизит количество часов отсутствия по больничным.
                </p>
              </div>
              <img
                className="mb-6"
                src="./images/b_3.webp"
                width="460"
                alt="Увеличение эффективности"
              />
            </div>

            <div className="flex justify-between gap-x-[40px] items-start flex-col lg:flex-row lg:items-center">
              <img src="./images/b_2.svg" alt="" width="460" />
              <div className="flex flex-col gap-y-5 w-full">
                <h3 className="text-[22px] md:text-[26px] text-[#171717] font-semibold">
                  Статус и доверие к компании
                </h3>
                <p className="text-[14px] md:text-[18px] text-[#171717]  w-[200px] xs:w-full xs:text-[16px] md:max-w-[400px] font-light">
                  Увеличение лояльности к компании и соответствие мировым
                  стандартам организации сотрудников, уменьшит уроветь «текучки»
                  кадров.
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-x-[40px] items-start flex-col-reverse lg:flex-row lg:items-center mt-[75px]">
              <div className="flex flex-col gap-y-5 w-full">
                <h3 className="text-[22px] md:text-[26px] text-[#171717] font-semibold">
                  Экономической выгода
                </h3>
                <p className="text-[14px] md:text-[18px] text-[#171717]  w-[220px] xs:w-full xs:text-[16px] md:max-w-[400px] font-light">
                  При вложении
                  <strong>
                    <span data-redactor-tag="span"> 1 рубля </span>
                  </strong>
                  экономический эффект составит в среднем
                  <strong>
                    <span data-redactor-tag="span"> 3,71 рубля*</span>
                  </strong>
                </p>
              </div>
              <img
                src="./images/b_1.webp"
                alt=""
                width="460"
                className="mb-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="flex flex-col lg:flex-row items-center  gap-x-[100px] gap-y-[50px] px-[20px] max-w-[500px] lg:max-w-[1200px]">
            <div className="flex flex-col  w-full lg:w-1/2 gap-y-[20px]">
              <p className="text-[11px] text-[#888] tracking-[2.5px] font-semibold">
                КАК ЭТО РАБОТАЕТ
              </p>
              <h3 className="text-[32px] font-semibold text-[#171717]">
                Ваша команда поддержки сотрудников
              </h3>
              <p className="text-[18px] font-light text-[#171717]">
                Свой корпоративный раздел психологической помощи и поддержки
                сотрудников: быстрое создание, закрытая система и гибкая
                персонализация.
              </p>
            </div>
            <img
              src="./images/laptop.webp"
              alt="Laptop"
              className="max-h-[550px] w-full lg:w-1/2"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fef5b5]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[760px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[30px] md:text-[42px] text-[#171717] text-center">
              Почему работают с нами?
            </h2>
            <p className="text-[20px] md:text-[26px] text-[#171717] font-light text-center">
              Сравнительная таблица для организации психологической поддержки
              сотрудников.
            </p>
          </div>
          <TableForB />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[760px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[30px] md:text-[42px] text-[#171717] text-center">
              О Connect Psychologists
            </h2>
            <p className="text-[20px] md:text-[26px] text-[#171717] font-light text-center">
              Connect — это сервис поиска и подбора психологической помощи
              онлайн и очно
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-y-3 p-3">
            <div className="w-1/2 flex justify-around ">
              <div className="border-2 border-[#fef5b5] max-w-[261px] p-3">
                <h3 className="text-[32px] font-bold">40+</h3>
                <h4 className="text-[16px] font-semibold">ВЕБИНАРОВ</h4>
                <p className="text-[14px]">
                  Большой выбор вебинаров и групп в различных тематиках.
                </p>
              </div>
            </div>

            <div className="w-1/2 flex justify-around">
              <div className="border-2 border-[#fef5b5] max-w-[261px] p-3">
                <h3 className="text-[32px] font-bold">12000+</h3>
                <h4 className="text-[16px] font-semibold">ПСИХОЛОГОВ</h4>
                <p className="text-[14px]">
                  База прошедших отбор и специализацию психологов.
                </p>
              </div>
            </div>

            <div className="w-1/2 flex justify-around">
              <div className="border-2 border-[#fef5b5] max-w-[261px] p-3">
                <h3 className="text-[32px] font-bold">7–10%</h3>
                <h4 className="text-[16px] font-semibold">СПЕЦИАЛИСТОВ</h4>
                <p className="text-[14px]">
                  Менее 10% специалистов проходят отбор в команду.
                </p>
              </div>
            </div>

            <div className="w-1/2 flex justify-around">
              <div className="border-2 border-[#fef5b5] max-w-[261px] p-3">
                <h3 className="text-[32px] font-bold">9,6</h3>
                <h4 className="text-[16px] font-semibold">ОЦЕНКА</h4>
                <p className="text-[14px]">
                  Средняя оценка работы сервиса и психологов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fef5b5]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[760px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[30px] md:text-[42px] text-[#171717] text-center">
              Услуги
            </h2>
            <p className="text-[20px] md:text-[26px] text-[#171717] font-light text-center">
              В рамках психологической поддержки сотрудников мы предоставляем
              следующие услуги психологов:
            </p>
          </div>
          <div className="w-[95%]">
            <div className="flex flex-wrap flex-col lg:flex-row items-center">
              <div className="flex w-full lg:w-1/2 md:w-[70%] flex-col md:flex-row">
                <div className="bg-white flex items-center justify-center w-full md:w-1/2">
                  <div className="flex flex-col gap-y-5 p-2">
                    <h3 className="text-[20px] text-[#171717] max-w-[200px] font-semibold   ">
                      Индивидуальные сессии с психологом
                    </h3>
                    <p className="text-[16px] text-[#171717] max-w-[250px]">
                      Помощь в подборе психолога на сайте с помощью уникального
                      алгоритма из <strong>150+</strong> специалистов.
                    </p>
                  </div>
                </div>
                <div className="bg-[url('/images/services_1.png')]  h-[418px] bg-no-repeat bg-center bg-cover w-full md:w-1/2"></div>
              </div>

              <div className="flex w-full lg:w-1/2 md:w-[70%] flex-col lg:flex-row md:flex-row-reverse">
                <div className="bg-white flex items-center justify-center w-full md:w-1/2">
                  <div className="flex flex-col gap-y-5 p-2">
                    <h3 className="text-[20px] text-[#171717] max-w-[200px] font-semibold">
                      Групповые тренинги и вебинары
                    </h3>
                    <p className="text-[16px] text-[#171717] max-w-[250px]">
                      Предложим на выбор пакеты с тренингами и бесплатными
                      вебинарам под запрос компании.
                    </p>
                  </div>
                </div>
                <div className="bg-[url('/images/services_2.png')]  h-[418px] bg-no-repeat bg-center bg-cover w-full md:w-1/2"></div>
              </div>

              <div className="flex w-full lg:w-1/2 md:w-[70%] flex-col lg:flex-row-reverse md:flex-row">
                <div className="bg-white flex items-center justify-center  w-full md:w-1/2">
                  <div className="flex flex-col gap-y-5 p-2">
                    <h3 className="text-[20px] text-[#171717] max-w-[200px] font-semibold">
                      Медиация
                    </h3>
                    <p className="text-[16px] text-[#171717] max-w-[250px]">
                      Разрешение споров внутри предприятия. Совместно с
                      партнёрами юридической компанией.
                    </p>
                  </div>
                </div>
                <div className="bg-[url('/images/services_3.png')]  h-[418px] bg-no-repeat bg-center bg-cover w-full md:w-1/2"></div>
              </div>

              <div className="flex w-full lg:w-1/2 md:w-[70%]  flex-col md:flex-row-reverse">
                <div className="bg-white flex items-center justify-center  w-full md:w-1/2">
                  <div className="flex flex-col gap-y-5 p-2">
                    <h3 className="text-[20px] text-[#171717] max-w-[200px] font-semibold">
                      Полиграф
                    </h3>
                    <p className="text-[16px] text-[#171717] max-w-[250px]">
                      Проверка сотрудников и партнёров. Оценка работы
                      сотрудников. Увольнение.
                    </p>
                  </div>
                </div>
                <div className="bg-[url('/images/services_4.png')]  h-[418px] bg-no-repeat bg-center bg-cover  w-full md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[50px]">
          <div className="max-w-[760px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[30px] md:text-[42px] text-[#171717] text-center">
              Команда психологов
            </h2>
            <p className="text-[20px] md:text-[26px] text-[#171717] font-light text-center px-3">
              В нашу команду попадают психологи, прошедшие строгий отбор и
              собеседование,<strong> менее 10% от всех кандидатов </strong>
              приглашаются к публикации анкеты
            </p>
          </div>
          <img src="./images/psychologists.png" alt="Психологи" width="690" />
          <p className="text-[18px] font-light text-[#171717]">
            И ЕЩЁ <span className="text-green-pon">БОЛЕЕ 12000</span> ПСИХОЛОГОВ
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[50px]">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[20px] md:text-[26px] text-[#171717] text-center">
              Почему выбирают нас?
            </h2>
            <p className="text-[20px] md:text-[26px] text-[#171717] font-light text-center">
              Мы нацелены на максимальную эффективность программ психологической
              поддержки и потому предлагаем индивидуальные условия для каждой
              компании:
            </p>
          </div>
          <WhyChooseUs />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[50px]">
          <div className="max-w-[640px] p-[60px_45px_70px] flex flex-col justify-center gap-y-[40px] border-[5px] md:border-[15px] border-[#fef5b5] shadow-[0px_0px_30px_0px] shadow-[#0000002f]">
            <h2 className="text-[20px] md:text-[26px] text-[#171717] text-center ">
              Оставьте заявку
            </h2>
            <p className="text-[20px] md:text-[26px] text-[#171717] font-light text-center px-3">
              И мы составим варианты программы психологической поддержки
              сотрудников для вас:
            </p>
            <div className="flex justify-center ">
              <form className="max-w-[640px] w-[80%] flex flex-col gap-y-[25px] justify-center items-center text-center">
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  className="border-b-[1px] border-[#d6d6d6] pb-1 outline-none w-full h-[56px]"
                />
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="border-b-[1px] border-[#d6d6d6] pb-1 outline-none w-full h-[56px]"
                />
                <button
                  type="submit"
                  className="md:w-[35%] bg-green-pon p-[5px_68px] rounded-lg h-[50px] text-[17px] text-white  font-semibold shadow-[0px_0px_10px_0px] shadow-[#00000030]"
                >
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Warning />
    </div>
  );
};

export default BusinessPsyholog;
