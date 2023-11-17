import React, { useState } from "react";
import Registration from "../Registration/Registration";

const SelectRole = () => {
  const [role, setRole] = useState("");
  const [openReg, setOpenReg] = useState(false);
  return (
    <div>
      {!openReg ? (
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center">
            <button
              onClick={() => {
                setRole("Psychologists");
                setOpenReg(true);
              }}
              className="bg-green-pon p-2 text-white uppercase text-[18px] font-medium duration-500 shadow-[#3a3a3a] shadow-sm hover:shadow-md hover:shadow-[#3a3a3a] active:shadow-sm active:shadow-[#3a3a3a]"
            >
              Продолжить как психолог
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                setRole("User");
                setOpenReg(true);
              }}
              className="bg-green-pon p-2 text-white uppercase text-[18px] font-medium duration-500 shadow-[#3a3a3a] shadow-sm hover:shadow-md hover:shadow-[#3a3a3a] active:shadow-sm active:shadow-[#3a3a3a]"
            >
              Продолжить как пациент
            </button>
          </div>
        </div>
      ) : (
        <Registration role={role} />
      )}
    </div>
  );
};

export default SelectRole;
