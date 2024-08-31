import { ButtonProps } from "@/types/index.t";
import React from "react";

const CTA = ({ name, type, label, icon: Icon, variant, goto }: ButtonProps) => {
  return (
    <button className={`${variant}`} type={type} name={name}>
      <a href={goto}>{label}</a>
      {Icon && <Icon className="text-lg text-yellow-500" />}
    </button>
  );
};

export default CTA;
