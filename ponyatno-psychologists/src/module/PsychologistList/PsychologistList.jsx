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
    <div className="flex flex-col gap-y-6">
      PsychologistList
      {data &&
        data.map((psy) => (
          <div key={psy.$id}>
            <PsychologistItem info={psy} />
          </div>
        ))}
    </div>
  );
};

export default PsychologistList;
