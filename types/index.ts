import { MouseEventHandler, SetStateAction, Dispatch } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface SearchBarProps {
  setManufacturer: (e :string) => void;
  setModel: (e :string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}


export interface OptionsProps {
  title: string;
  value: string;
}


export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
  setFilter: Dispatch<SetStateAction<string | number>>;
}


export interface ShowMoreProps {
  pageNumber : number;
  isNext : boolean;
  setLimit : (newLimit: number) => void;
}