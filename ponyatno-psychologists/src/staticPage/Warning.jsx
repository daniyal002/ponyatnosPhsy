import React from 'react';
import { useNavigate } from 'react-router-dom';

const Warning = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black">
      <div className="max-w-[940px] py-[48px] xs:py-[32px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
        <p className="text-white text-[19px]">
          Если у вас серьезные, угрожающие вашей жизни проблемы, которые требуют
          немедленного решения, вам лучше обратиться в какую-либо из &nbsp;
          <span className="text-green-pon" onClick={() => navigate('/')}>
            этих организаций
          </span>
        </p>
      </div>
    </section>
  );
};

export default Warning;
