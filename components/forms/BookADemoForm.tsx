"use client";
import Image from "next/image";
import { useForm, Controller, FieldError, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select, { components } from "react-select";
import { toast } from "react-toastify";
import { demoBookingSchema } from "../utils/schema";
import { handleInput } from "../utils/keyInputValidation";
import { decryptedData, encryptData } from "../utils/utils";
import { useAddDemoBookRequest } from "../book-a-demo/services";
import countries from "../data/countries";

// icons
import icon_user from "../../public/assets/img/icon/user-input.ce42f3c2.svg";
import icon_building from "../../public/assets/img/icon/company.35cb6074.svg";
import icon_link from "../../public/assets/img/icon/link-black.5a10da17.svg";
import icon_email from "../../public/assets/img/icon/email-input.a634355c.svg";

// components
import PhoneNumberInput from "./components/PhoneNumberInput";

type CountryOption = {
  flag: {};
  value: string;
  label: string;
};
const BookADemoForm = ({
  setDemoRequested,
}: {
  setDemoRequested: (value: boolean) => void;
}) => {
  const { mutate } = useAddDemoBookRequest();

  const methods = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
      country_name: "India",
      company_name: "",
      monthly_ad_spend: "",
      amazon_brand_store_url: "",
    },
    resolver: zodResolver(demoBookingSchema),
  });

  const {
    register,
    watch,
    control,
    trigger,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = methods;

  const customOption = (props: any) => (
    <components.Option {...props} className="select-custom-option">
      <img
        src={props.data?.flag}
        alt="country"
        className="select-custom-option-icon"
      />
      {props.data.label}
    </components.Option>
  );
  const customSingleValue = (props: any) => (
    <components.SingleValue {...props} className="select-custom-option">
      <img
        src={props.data?.flag}
        alt="country"
        className="select-custom-option-icon"
      />
      {props.data.label}
    </components.SingleValue>
  );

  const countryNameOptions: CountryOption[] = countries
    .filter((country) => country.is_included_country)
    .map((country) => ({
      flag: country.flag,
      value: country.name,
      label: country.name,
    }));

  const onSubmit = handleSubmit(async (data) => {
    const result = await trigger();
    if (result) {
      if (result) {
        const encryptedData = encryptData(
          JSON.stringify({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            country_name: data.country_name,
            company_name: data.company_name,
            monthly_ad_spend: Number(data.monthly_ad_spend.replace(/,/g, "")),
            amazon_brand_store_url: data.amazon_brand_store_url,
            contact_number: data.contact_number.replace(/\D/g, ""),
          })
        );
        await mutate(
          {
            details: encryptedData,
          },
          {
            onError: async (error: any) => {
              const decryptedError = decryptedData(error.data.response);
              toast.dismiss();
              toast.error(decryptedError.error);
            },
            onSuccess: (data: any) => {
              const decryptedResponse = decryptedData(data.response);
              toast.dismiss();
              toast.success(decryptedResponse.message, {
                position: "top-right",
              });
              setDemoRequested(true);
              reset();
            },
          }
        );
      }
    }
  });

  return (
    <div className="demo-form-container container">
      <FormProvider {...methods}>
        <form id="book-demo" onSubmit={onSubmit} className="row">
          <div className="col col-12 col-md-6 field-with-icon">
            <label>First Name</label>
            <div
              className={`demo-form-input ${errors.first_name && "form-error"}`}
            >
              <Image src={icon_user} alt="hectorai" width={20} />
              <input
                {...register("first_name")}
                placeholder="First Name"
                className={`mb-0`}
                onInput={(e) => handleInput(e, "name")}
              />
            </div>
            {errors.first_name && (
              <div className="text-danger mt-1 text-sm">
                {(errors.first_name as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Last Name</label>
            <div
              className={`demo-form-input ${errors.last_name && "form-error"}`}
            >
              <Image src={icon_user} alt="hectorai" width={20} />
              <input
                {...register("last_name")}
                placeholder="Last Name"
                className="mb-0"
                onInput={(e) => handleInput(e, "name")}
              />
            </div>
            {errors.last_name && (
              <div className="text-danger mt-1 text-sm">
                {(errors.last_name as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Email</label>
            <div className={`demo-form-input ${errors.email && "form-error"}`}>
              <Image src={icon_email} alt="hectorai" width={20} />
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="mb-0"
                onInput={(e) => handleInput(e, "text")}
              />
            </div>
            {errors.email && (
              <div className="text-danger mt-1 text-sm">
                {(errors.email as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Phone Number</label>
            <div
              className={`demo-form-input contact-field-container ${
                errors.contact_number && "form-error"
              }`}
            >
              <PhoneNumberInput name="contact_number" />
            </div>
            {errors.contact_number && (
              <div className="text-danger mt-1 text-sm">
                {(errors.contact_number as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Country Name</label>
            <div
              className={`demo-form-input px-0 ${
                errors.country_name && "form-error"
              }`}
            >
              <Controller
                name="country_name"
                control={control}
                render={({
                  field: { value, onChange, onBlur, name, ref, ...field },
                }) => (
                  <Select
                    {...field}
                    {...register("country_name")}
                    className={`basic-select ${
                      errors.company_name && "form-error"
                    }`}
                    classNamePrefix="select"
                    options={countryNameOptions}
                    name={name}
                    value={
                      value
                        ? countryNameOptions.find(
                            (option) => option.value == value
                          )
                        : ""
                    }
                    onChange={(val) =>
                      val ? onChange(val.value) : onChange("")
                    }
                    placeholder="Country Name"
                    components={{
                      SingleValue: customSingleValue,
                      Option: customOption,
                    }}
                  />
                )}
                rules={{ required: true }}
              />
            </div>

            {errors.country_name && (
              <div className="text-danger mt-1 text-sm">
                {(errors.country_name as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Company Name</label>
            <div
              className={`demo-form-input ${
                errors.company_name && "form-error"
              }`}
            >
              <Image src={icon_building} alt="hectorai" width={20} />
              <input
                {...register("company_name")}
                placeholder="Company Name"
                className="mb-0"
                onInput={(e) => handleInput(e, "text")}
              />
            </div>
            {errors.company_name && (
              <div className="text-danger mt-1 text-sm">
                {(errors.company_name as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Monthly Ad Spend</label>
            <div
              className={`demo-form-input ${
                errors.monthly_ad_spend && "form-error"
              }`}
            >
              {
                countries.find(
                  (country) => country.name === watch("country_name")
                )?.currency_symbol
              }
              <input
                {...register("monthly_ad_spend")}
                className="col-md-6 mb-0"
                placeholder="Monthly Ad Spend"
                onInput={(e) => handleInput(e, "number")}
              />
            </div>
            {errors.monthly_ad_spend && (
              <div className="text-danger mt-1 text-sm">
                {(errors.monthly_ad_spend as FieldError).message}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 field-with-icon">
            <label>Amazon Brand Store URL</label>
            <div
              className={`demo-form-input ${
                errors.amazon_brand_store_url && "form-error"
              }`}
            >
              <Image src={icon_link} alt="hectorai" width={20} />
              <input
                {...register("amazon_brand_store_url")}
                placeholder="Amazon Brand Store URL"
                className="mb-0"
                onInput={(e) => handleInput(e, "text")}
              />
            </div>
            {errors.amazon_brand_store_url && (
              <div className="text-danger mt-1 text-sm">
                {(errors.amazon_brand_store_url as FieldError).message}
              </div>
            )}
          </div>
          <div className="submit_container col-md-12">
            <input
              className="submit_btn mb-0 mt-4"
              type="submit"
              value="Book a Demo"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default BookADemoForm;
