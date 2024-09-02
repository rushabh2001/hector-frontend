import Image from "next/image";
import LoginForm from "../forms/LoginForm";
import Logo from "../../public/assets/img/hector/hector-logo.svg";
import BookADemoForm from "../forms/BookADemoForm";


const FormArea = () => {
    return (
        <>
            <div className="pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {/* <div className="d-flex justify-content-center">
                                <Image className="mb-30 text-center" src={Logo} alt="hectorai" /> 
                            </div> */}
                            <div className="basic-login book-demo-area">
                                <h3 className="text-center mb-60">Book A Demo</h3>
                                <BookADemoForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormArea;