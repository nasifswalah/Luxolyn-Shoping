import React from "react";
import Button from "./Button";
import { X } from "lucide-react";
import { confirm } from "../assets";

const ConfirmationModal = () => {
  return (
    <div className="absolute z-20 w-screen h-screen flex items-center bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
     
      <div className=" relative w-96 h-fit bg-[#292929] text-white mx-auto p-5 rounded-lg">
      <X className="absolute right-4"/>
        <h3>Modal Text</h3>
        <p className="my-5 text-[#BCBCBC]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          ipsam deleniti ducimus suscipit dicta nesciunt odio
        </p>
        <Button name="Confirm" icon={confirm}/>
      </div>
    </div>
  );
};

export default ConfirmationModal;
