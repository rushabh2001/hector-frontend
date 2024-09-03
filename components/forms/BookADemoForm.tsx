"use client"
import { useState } from "react"
import { useForm, useWatch, Control } from "react-hook-form"
import PhoneInputWithCountrySelect from "react-phone-number-input"
import Image from 'next/image';
import icon_user from "../../public/assets/img/icon/user-input.ce42f3c2.svg";
import icon_building from "../../public/assets/img/icon/company.35cb6074.svg";
import icon_link from "../../public/assets/img/icon/link-black.5a10da17.svg";
import icon_email from "../../public/assets/img/icon/email-input.a634355c.svg";

type FormValues = {
  firstName: string
  lastName: string
  email: string
  value: string
}

const options = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Vanilla", value: "vanilla" },
]



function IsolateReRender({ control }: { control: Control<FormValues> }) {
  const firstName = useWatch({
    control,
    name: "firstName",
    defaultValue: "default",
  })

  return <div>{firstName}</div>
}

export default function BookADemoForm() {
const {register, control, handleSubmit} = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))

  const [phone, setPhone] = useState();

  return (
    <div className="demo-form-container container">
      <form id="book-demo" onSubmit={onSubmit} className="row">
        <div className="field-with-icon col-md-6">
          <Image className="field-icon" src={icon_user} alt="hectorai" width={20} /> 
          <input {...register("firstName")} placeholder="First Name" />
        </div>
        <div className="field-with-icon col-md-6">
          <Image className="field-icon" src={icon_user} alt="hectorai" width={20} /> 
          <input {...register("lastName")} placeholder="Last Name" />
        </div>
        <div className="field-with-icon col-md-6">
          <Image className="field-icon" src={icon_email} alt="hectorai" width={20} /> 
          <input type="email" {...register("email")} placeholder="Email" />
        </div>
        <input {...register("phoneNumber")} className="col-md-6" placeholder="Phone Number" />
        <input {...register("countryName")} className="col-md-6" placeholder="Country Name" />
        <div className="field-with-icon">
          <Image className="field-icon col-md-6" src={icon_building} alt="hectorai" width={20} /> 
          <input {...register("companyName")} placeholder="Company Name" />
        </div>
        <input {...register("monthlyAdSpend")} className="col-md-6" placeholder="Monthly Ad Spend" />
        <div className="field-with-icon col-md-6">
          <Image className="field-icon" src={icon_link} alt="hectorai" width={20} /> 
          <input {...register("amazonBrandURL")} placeholder="Amazon Brand Store URL" />
        </div>
        
        {/* <IsolateReRender control={control} /> */}
        {/* <PhoneInputWithCountrySelect
          international
          defaultCountry="RU"
          value={phone}
          onChange={setPhone}
        /> */}
        <div className="submit_container col-md-12">
          <input className="submit_btn" type="submit"  value="Book a Demo" />
        </div>
      </form>
    </div>
  )
}