import React, { useEffect, useState } from "react";
import PsychologistItem from "./components/PsychologistItem";
import { useGetAllPsychologist } from "./hook/useGetAllPsychologist";
import PsychologistFilter from "./components/PsychologistFilter";
import FilterIcon from "../../assets/icon/filter.svg";

const PsychologistList = () => {
  const { data } = useGetAllPsychologist();
  const [filter, setFilter] = useState({}); // 1. Состояние для фильтрации
  const [openFilter, setOpenFilter] = useState(false);
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const filteredData = data ? applyFilter(data, filter) : data; // Применение фильтра

  return (
    <div className="flex flex-row bg-[#004E64]">
      <PsychologistFilter
        setFilter={setFilter}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
      <div className=" hidden  w-[15%] lg:block "></div>
      <button
        onClick={() => setOpenFilter(!openFilter)}
        className="fixed bottom-10 right-10 rounded-full border-fuchsia-400 border-2 bg-white shadow-green-pon z-50"
      >
        <img src={FilterIcon} alt="Filter" width={45} />
      </button>

      <div className="flex flex-col items-center w-[85%] gap-y-6">
        {filteredData &&
          filteredData.map((psy) => (
            <PsychologistItem info={psy} key={psy.$id} />
          ))}
      </div>
    </div>
  );
};

export default PsychologistList;

const applyFilter = (data, filter) => {
  return data.filter((psy) => {
    const genderFilter = !filter.gender || psy.gender === filter.gender;

    const ageFilter =
      !filter.age ||
      (filter.age.min !== undefined &&
        filter.age.max !== undefined &&
        getAge(psy.dateOfBirth) >= filter.age.min &&
        getAge(psy.dateOfBirth) <= filter.age.max);

    const specializationFilter =
      !filter.specialization ||
      (psy.specialization &&
        Array.isArray(psy.specialization.$values) &&
        (filter.specialization.length === 0 ||
          filter.specialization.some((s) =>
            psy.specialization.$values.includes(s)
          )));

    return genderFilter && ageFilter && specializationFilter;
  });
};

const getAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  console.log(today.getFullYear() - birth.getFullYear());
  return today.getFullYear() - birth.getFullYear();
};
