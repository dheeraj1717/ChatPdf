import React from "react";
import Drop from "../utils/Drop";
import { AiOutlineMessage } from "react-icons/ai";

const Drag = ({ onLoaded, selectedPdfName }) => {
  return (
    <div className="w-[20vw] text-center bg-[#172340]">
      <div className="mx-auto flex justify-center">
        <Drop onLoaded={onLoaded} />
      </div>
      <div className="mt-5">
        {selectedPdfName && (
          <div className="text-white mt-2 flex items-center bg-[#1561e5] rounded-md text-[15px] m-4 p-1">
            <AiOutlineMessage className="mr-2 ml-4 text-[18px]" />
            {selectedPdfName}
          </div>
        )}
        </div>
    </div>
  );
};

export default Drag;
 