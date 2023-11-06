import React, { useEffect } from 'react';
import { useGetAllPsychologist } from './hook/useGetAllPsychologist';
import PsychologistItem from './components/PsychologistItem';

const PsychologistList = () => {
  const { data } = useGetAllPsychologist();
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      PsychologistList
      <PsychologistItem />
    </div>
  );
};

export default PsychologistList;
