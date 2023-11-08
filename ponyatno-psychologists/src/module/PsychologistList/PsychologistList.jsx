import React, { useEffect } from "react";
import PsychologistItem from "./components/PsychologistItem";
import { useGetAllPsychologist } from "./hook/useGetAllPsychologist";

const PsychologistList = () => {
  const { data } = useGetAllPsychologist();
  useEffect(() => {
    data;
    console.log(data);
  }, []);

  return (
    <div>
      PsychologistList
      {data && data.map((psy) => <PsychologistItem info={psy} />)}
    </div>
  );
};

export default PsychologistList;
