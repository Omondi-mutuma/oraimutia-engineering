import { ButtonProps } from "@/types/index.t";
import React from "react";

const CTA = ({ name, type, label, icon: Icon, variant }: ButtonProps) => {
  return (
    <button className={`${variant}`} type={type} name={name}>
      {label}
      {Icon && <Icon className="text-lg text-yellow-500" />}
    </button>
  );
};

export default CTA;
