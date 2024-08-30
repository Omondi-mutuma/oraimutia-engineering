import { IconType } from "react-icons";

export interface ButtonProps {
  name: string;
  type: "button" | "submit";
  label: string;
  icon?: IconType;
  variant?: string;
}

export interface SkeletonProps {
  image: string;
  width: any;
  height: any;
}
