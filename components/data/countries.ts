"use client";
import Flag_of_Afghanistan from "../../public/assets/img/Flag Svg/Flag_of_Afghanistan.svg";
import Flag_of_Albania from "../../public/assets/img/Flag Svg/Flag_of_Albania.svg";
import Flag_of_Algeria from "../../public/assets/img/Flag Svg/Flag_of_Algeria.svg";
import Flag_of_Andorra from "../../public/assets/img/Flag Svg/Flag_of_Andorra.svg";
import Flag_of_Angola from "../../public/assets/img/Flag Svg/Flag_of_Angola.svg";
interface countries_type {
  id: number;
  name: string;
  flag: string;
  country_code: string;
  phone_number_length: number;
  currency_symbol: string;
  is_included_country: boolean;
}

const countries: countries_type[] = [
  {
    id: 1,
    name: "Afghanistan",
    flag: Flag_of_Afghanistan,
    country_code: "93",
    phone_number_length: 10,
    currency_symbol: "؋;",
    is_included_country: false,
  },
  {
    id: 2,
    flag: Flag_of_Albania,
    name: "Albania",
    country_code: "355",
    phone_number_length: 11,
    currency_symbol: "ALL",
    is_included_country: true,
  },
  {
    id: 3,
    flag: Flag_of_Algeria,
    name: "Algeria",
    country_code: "213",
    phone_number_length: 11,
    currency_symbol: "دج",
    is_included_country: true,
  },
  {
    id: 4,
    flag: Flag_of_Andorra,
    name: "Andorra",
    country_code: "376",
    phone_number_length: 7,
    currency_symbol: "D.",
    is_included_country: true,
  },
  {
    id: 5,
    flag: Flag_of_Angola,
    name: "Angola",
    country_code: "244",
    phone_number_length: 10,
    currency_symbol: "Kz",
    is_included_country: false,
  },
];

export default countries;
