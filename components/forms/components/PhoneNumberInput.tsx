import React, { useState, useEffect } from "react";
import Select, { components, SingleValue } from "react-select";
import Image from "next/image";
import { useController, useFormContext } from "react-hook-form";
import countries from "../../data/countries";
import { handleInput } from "../../utils/keyInputValidation";

interface Country {
  id: number;
  name: string;
  country_code: string;
  flag: string;
  phone_number_length: number;
}

interface PhoneNumberInputProps {
  name: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ name }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    countries?.find((country) => country.name === "India")
  );

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  const countryOptions = countries.map((country: Country) => ({
    value: country.country_code,
    label: (
      <div className="d-flex align-items-center">
        <Image
          src={country.flag}
          alt={country.name}
          width={20}
          height={15}
          className="me-2"
        />
        <span>
          {country.name} +{country.country_code}
        </span>
      </div>
    ),
    ...country,
  }));

  const customSingleValue = (props: any) => (
    <components.SingleValue {...props} className="select-custom-option">
      <img
        src={props.data?.flag}
        alt="country"
        className="select-custom-option-icon"
      />
    </components.SingleValue>
  );

  useEffect(() => {
    if (selectedCountry && !value.startsWith(selectedCountry.country_code)) {
      onChange(selectedCountry.country_code);
    }
  }, [selectedCountry]);

  const handleCountryChange = (option: SingleValue<Country>) => {
    if (option) {
      setSelectedCountry(option);
      onChange(option.country_code);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (selectedCountry) {
      if (input.length >= selectedCountry.country_code.length) {
        onChange(input);
      } else {
        onChange(selectedCountry.country_code);
      }
    }
  };

  const findCountryByNumber = (number: string): Country | undefined => {
    return countries.find((country: Country) =>
      number.startsWith(country.country_code)
    );
  };

  useEffect(() => {
    const matchedCountry = findCountryByNumber(value);
    if (matchedCountry && matchedCountry.id !== selectedCountry?.id) {
      setSelectedCountry(
        countryOptions.find((option) => option.id === matchedCountry.id) ||
          undefined
      );
    }
  }, [value]);

  return (
    <div className="input-group">
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        className="country-select"
        classNamePrefix="react-select"
        components={{ SingleValue: customSingleValue }}
        isSearchable={false}
        backspaceRemovesValue={false}
      />
      {value ? "+" : ""}
      <input
        type="tel"
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        id={name}
        value={value}
        onChange={handlePhoneNumberChange}
        onBlur={onBlur}
        ref={ref}
        placeholder="Enter phone number"
        onInput={(e) => handleInput(e, "phone_number")}
        maxLength={
          selectedCountry
            ? selectedCountry.phone_number_length +
              selectedCountry.country_code.length
            : undefined
        }
      />
    </div>
  );
};

export default PhoneNumberInput;
